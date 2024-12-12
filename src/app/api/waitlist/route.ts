import { NextResponse } from 'next/server';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, phone, build } = body;

    console.log('Received request:', { name, email, phone, build });

    // Validate the input
    if (!name || !email || !phone || !build) {
      console.log('Validation failed: missing required fields');
      return NextResponse.json(
        { error: 'Name, email, phone, and build fields are required' },
        { status: 400 }
      );
    }

    if (!email.includes('@')) {
      console.log('Validation failed: invalid email format');
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    console.log('Attempting to add to Firebase...');

    // Add the document to Firestore
    const docRef = await addDoc(collection(db, 'signup'), {
      name,
      email,
      phone,
      build,
      timestamp: new Date().toISOString()
    });

    console.log('Successfully added to Firebase, doc ID:', docRef.id);

    return NextResponse.json(
      { message: 'Successfully joined waitlist', id: docRef.id },
      { status: 201 }
    );

  } catch (error: unknown) {
    // Type guard function to check if error is an Error object
    const isErrorWithMessage = (error: unknown): error is { message: string } => {
      return (
        typeof error === 'object' &&
        error !== null &&
        'message' in error &&
        typeof (error as { message: string }).message === 'string'
      );
    };

    // Type guard for Firebase-like errors
    const isFirebaseError = (error: unknown): error is { code: string; stack?: string } => {
      return (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        typeof (error as { code: string }).code === 'string'
      );
    };

    // Get error message safely
    const errorMessage = isErrorWithMessage(error) ? error.message : 'An unknown error occurred';

    // Log error details safely
    console.error('Error details:', {
      message: isErrorWithMessage(error) ? error.message : 'Unknown error message',
      code: isFirebaseError(error) ? error.code : 'Unknown error code',
      stack: isFirebaseError(error) && error.stack ? error.stack : 'No stack trace available'
    });
    
    return NextResponse.json(
      { error: `Failed to join waitlist: ${errorMessage}` },
      { status: 500 }
    );
  }
}
