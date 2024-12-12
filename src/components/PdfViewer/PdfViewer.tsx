"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdfjs/pdf.worker.min.js';

interface PdfViewerProps {
  filePath: string;
}

export const PdfViewer: React.FC<PdfViewerProps> = ({ filePath }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pdfDoc, setPdfDoc] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [numPages, setNumPages] = useState<number>(0);
  const renderingRef = useRef<boolean>(false);

  useEffect(() => {
    const loadPDF = async () => {
      try {
        const doc = await pdfjsLib.getDocument({ url: filePath }).promise;
        setPdfDoc(doc);
        setNumPages(doc.numPages);
      } catch (error) {
        console.error('Error loading PDF:', error);
      }
    };
    loadPDF();

    return () => {
      setPdfDoc(null);
    };
  }, [filePath]);

  const renderPage = useCallback(async (pageNumber: number) => {
    if (!pdfDoc || !canvasRef.current || renderingRef.current) return;

    try {
      renderingRef.current = true;
      const page = await pdfDoc.getPage(pageNumber);
      const container = canvasRef.current.parentElement;
      if (!container) return;

      const initialViewport = page.getViewport({ scale: 1, rotation: page.rotate });
      const containerWidth = container.clientWidth;
      const desiredScale = containerWidth / initialViewport.width;

      const viewport = page.getViewport({ scale: desiredScale, rotation: page.rotate });
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      if (!context) return;

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      // Clear the canvas before rendering
      context.clearRect(0, 0, canvas.width, canvas.height);

      try {
        await page.render({
          canvasContext: context,
          viewport,
          intent: 'display'
        }).promise;
      } catch (error) {
        console.error('Error rendering page:', error);
      }
    } finally {
      renderingRef.current = false;
    }
  }, [pdfDoc]);

  useEffect(() => {
    let mounted = true;

    if (pdfDoc && mounted) {
      renderPage(currentPage);
    }

    return () => {
      mounted = false;
    };
  }, [pdfDoc, currentPage, renderPage]);

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const goToNextPage = () => {
    if (currentPage < numPages) setCurrentPage(prev => prev + 1);
  };

  return (
    <div 
      style={{ 
        width: '100%', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        position: 'relative'
      }}
    >
      <canvas 
        ref={canvasRef} 
        style={{ 
          maxWidth: '100%', 
          height: 'auto',
          backgroundColor: 'white' 
        }} 
      />
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        alignItems: 'center',
        padding: '0.5rem',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '4px'
      }}>
        <button 
          onClick={goToPreviousPage} 
          disabled={currentPage <= 1}
          style={{
            padding: '0.5rem 1rem',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '4px',
            color: 'white',
            cursor: currentPage <= 1 ? 'not-allowed' : 'pointer'
          }}
        >
          Previous
        </button>
        <span style={{ color: 'white' }}>
          Page {currentPage} of {numPages}
        </span>
        <button 
          onClick={goToNextPage} 
          disabled={currentPage >= numPages}
          style={{
            padding: '0.5rem 1rem',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '4px',
            color: 'white',
            cursor: currentPage >= numPages ? 'not-allowed' : 'pointer'
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
