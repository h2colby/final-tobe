"use client";

import React, { useState, useEffect, ChangeEvent } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, RefreshCcw, Zap, Layers, Bell, Lightbulb } from "lucide-react";
import { Flex, Heading, Text, Button } from "@/once-ui/components";
import { Input } from "@/once-ui/components/Input";
import { Header } from "@/components/Header";

export default function H2SafetyPage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [waitlistName, setWaitlistName] = useState('');
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistStatus, setWaitlistStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Example queries logic
  const [currentQuery, setCurrentQuery] = useState(0);
  const exampleQueries = [
    "What are the latest ISO standards for hydrogen storage?",
    "Compare EU and US regulations for hydrogen fuel cells",
    "Summarize safety protocols for hydrogen refueling stations",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuery((prev) => (prev + 1) % exampleQueries.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  function openWaitlist() {
    setWaitlistName('');
    setWaitlistEmail('');
    setWaitlistStatus('idle');
    setIsWaitlistOpen(true);
  }

  function closeWaitlist() {
    setIsWaitlistOpen(false);
  }

  async function joinWaitlist(e: React.FormEvent) {
    e.preventDefault();
    if (!waitlistName || !waitlistEmail) return;
    setWaitlistStatus('loading');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: waitlistName, email: waitlistEmail })
      });
      const data = await res.json();
      
      if (res.ok) {
        setWaitlistStatus('success');
      } else {
        console.error('Error response:', data);
        setWaitlistStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setWaitlistStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  }

  return (
    <Flex direction="column" fillWidth style={{ 
      minHeight: '100vh', 
      background: 'black', 
      color: 'white',
      position: 'relative'
    }}>
      {/* Header */}
      <Header />

      {/* Waitlist Modal */}
      {isWaitlistOpen && (
        <Flex
          style={{
            position: 'fixed',
            inset: '0',
            background: 'rgba(0,0,0,0.5)'
          }}
          alignItems="center" justifyContent="center" zIndex={9999}
        >
          <Flex
            direction="column" gap="m"
            style={{ background: '#1F2937', padding: '1.5rem', borderRadius: '0.5rem', maxWidth: '20rem', width: '100%' }}
          >
            {waitlistStatus === 'success' ? (
              <Flex direction="column" gap="m">
                <Heading variant="heading-strong-m">Thanks for joining!</Heading>
                <Text onBackground="neutral-weak">We will notify you with updates.</Text>
                <Button variant="tertiary" onClick={closeWaitlist}>Close</Button>
              </Flex>
            ) : (
              <form onSubmit={joinWaitlist}>
                <Heading variant="heading-strong-m" style={{ marginBottom: '0.5rem' }}>
                  Join the Waitlist
                </Heading>
                {waitlistStatus === 'error' && (
                  <Text variant="body-default-s" style={{ color: 'red' }}>Something went wrong. Please try again.</Text>
                )}
                <Flex direction="column" gap="s">
                  <Text 
                    variant="body-default-s" 
                    style={{ 
                      position: 'absolute', 
                      width: '1px', 
                      height: '1px', 
                      padding: '0',
                      margin: '-1px',
                      overflow: 'hidden',
                      clip: 'rect(0,0,0,0)',
                      border: '0'
                    }}
                  >
                    Your Name
                  </Text>
                  <Input
                    id="waitlist-name"
                    type="text"
                    value={waitlistName}
                    label="Your Name"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setWaitlistName(e.target.value)}
                    style={{
                      marginBottom: '0.5rem',
                      background: '#374151',
                      color: 'white',
                      border: '1px solid #4B5563'
                    }}
                    required
                  />
                </Flex>

                <Flex direction="column" gap="s">
                  <Text 
                    variant="body-default-s" 
                    style={{ 
                      position: 'absolute', 
                      width: '1px', 
                      height: '1px', 
                      padding: '0',
                      margin: '-1px',
                      overflow: 'hidden',
                      clip: 'rect(0,0,0,0)',
                      border: '0'
                    }}
                  >
                    Your Email
                  </Text>
                  <Input
                    id="waitlist-email"
                    type="email"
                    value={waitlistEmail}
                    label="Your Email"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setWaitlistEmail(e.target.value)}
                    style={{
                      marginBottom: '0.5rem',
                      background: '#374151',
                      color: 'white',
                      border: '1px solid #4B5563'
                    }}
                    required
                  />
                </Flex>
                <Flex justifyContent="flex-end" gap="m" marginTop="m">
                  <Button variant="tertiary" onClick={closeWaitlist} type="button">Cancel</Button>
                  <Button variant="tertiary" type="submit" disabled={waitlistStatus === 'loading'}>
                    {waitlistStatus === 'loading' ? 'Joining...' : 'Join'}
                  </Button>
                </Flex>
              </form>
            )}
          </Flex>
        </Flex>
      )}

      {/* Main content */}
      <Flex 
        direction="column" 
        fillWidth 
        gap="l" 
        alignItems="center" 
        style={{
          position: 'relative',
          width: '100%',
          overflowX: 'hidden',
          paddingBottom: '4rem'
        }}
      >

        {/* Unlocking Hydrogen... Section */}
        <Flex direction="column" fillWidth maxWidth="m" gap="m" alignItems="center" paddingY="xl">
          <Heading variant="display-strong-l" wrap="balance" style={{ textAlign: 'center' }}>
            Unlocking Hydrogen Safety Compliance with Intelligence for a Secure Future
          </Heading>
          <Text variant="heading-default-xl" onBackground="neutral-weak" style={{ textAlign: 'center', maxWidth: '40rem' }}>
            Hydrogen is transforming the energy landscape, but keeping up with rapidly evolving safety standards can be overwhelming. That's where H2Safety.ai steps in—as your AI-driven Process Safety Engineer.
          </Text>
          <Button
            onClick={openWaitlist}
            variant="tertiary"
            style={{ background: '#3B82F6', color: 'white', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Join the Waitlist <ArrowRight className="inline" />
          </Button>
        </Flex>

        {/* Hydrogen Code Compliance is Hard Section (below Unlocking section) */}
        <Flex
          fillWidth maxWidth="m"
          direction="column" gap="m"
          style={{ background: '#1F2937', borderRadius: '0.5rem', padding: '1rem' }}
        >
          <Heading variant="heading-strong-m">
            Hydrogen Code Compliance is Hard
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            The easier we can make access to this industry guarded and usually hidden information, the faster we can execute projects, and not use a full time engineer to spend their days researching code.
          </Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            At Tobe.Energy we believe hydrogen is the future and we will always work to make our internal tools available if we believe they will benefit the industry as a whole.
          </Text>
          <Link href="https://www.h2safety.ai" target="_blank">
            <Button
              variant="tertiary"
              style={{ background: '#3B82F6', color: 'white', marginTop: '1rem' }}
            >
              Go to H2Safety.AI
            </Button>
          </Link>
        </Flex>

        {/* Example Queries Section (beneath hydrogen code compliance is hard) */}
        <Flex direction="column" fillWidth maxWidth="m" gap="m" alignItems="center" paddingY="l">
          <Heading variant="heading-strong-l" style={{ textAlign: 'center' }}>
            Example Queries
          </Heading>
          <Flex direction="column" background="neutral-strong" radius="m" padding="m" gap="m" style={{ maxWidth: '40rem', width: '100%' }}>
            <Flex alignItems="center" gap="m">
              <Input
                id="example-query"
                label="Example Query"
                value={exampleQueries[currentQuery]} 
                readOnly
                style={{ flex: 1, background: '#374151', color: 'white', border: '1px solid #4B5563' }}
              />
              <Button
                onClick={() => setCurrentQuery((prev) => (prev + 1) % exampleQueries.length)}
                variant="tertiary"
                style={{ background: '#374151', color: 'white', border:'1px solid #4B5563' }}
              >
                <RefreshCcw className="h-5 w-5" />
              </Button>
            </Flex>
            <Text variant="body-default-m" style={{ color: '#9CA3AF', textAlign: 'center' }}>
              Our AI can answer complex questions about hydrogen safety standards and regulations.
            </Text>
          </Flex>
        </Flex>

        {/* How It Works Section */}
        <Flex
          direction="column"
          fillWidth
          style={{ 
            paddingTop: '3rem',
            paddingBottom: '3rem'
          }}
          gap="xl"
        >
          <Flex
            fillWidth
            maxWidth="m"
            direction="row"
            gap="xl"
            style={{ margin: '0 auto' }}
          >
            {/* Left Column */}
            <Flex direction="column" gap="m" flex={1}>
              <Flex
                background="neutral-strong"
                radius="m"
                padding="s"
                style={{ width: 'fit-content' }}
              >
                <Text variant="body-default-s" style={{ color: '#D1D5DB' }}>How It Works</Text>
              </Flex>
              <Heading variant="display-strong-m" style={{ color: 'white' }}>
                Revolutionizing Hydrogen Safety with RAG-Based AI
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak" style={{ maxWidth: '40rem', color: '#9CA3AF' }}>
              Our AI-driven solution is built on top of the world's most powerful language models—OpenAI and Perplexity—combined with RAG (Retrieval-Augmented Generation) techniques to create a specialized compliance tool for the hydrogen industry. We've trained our system to interpret complex safety regulations, cross-reference standards, and provide context-specific guidance that evolves as the hydrogen landscape changes.
              </Text>
            </Flex>

            {/* Right Column */}
            <Flex direction="column" gap="m" flex={1}>
              <Flex direction="column" gap="m" background="neutral-strong" padding="m" radius="m" style={{ position: 'relative' }}>
                <CheckCircle className="h-8 w-8" style={{ 
                  color: '#3B82F6',
                  position: 'absolute',
                  right: '1.5rem',
                  top: '1.5rem'
                }} />
                <Heading variant="heading-strong-m" style={{ color: 'white', paddingRight: '3rem' }}>Consolidate</Heading>
                <Text variant="body-default-m" style={{ color: '#9CA3AF' }}>
                Our RAG-based AI dynamically pulls in hydrogen safety standards from leading global sources such as ISO, NFPA, OSHA, and local regulations, integrating them into a unified database. We use sophisticated natural language processing (NLP) to ensure that every document, regulation, and code is meticulously cataloged and interlinked for easy access.
                </Text>
              </Flex>

              <Flex direction="column" gap="m" background="neutral-strong" padding="m" radius="m" style={{ position: 'relative' }}>
                <RefreshCcw className="h-8 w-8" style={{ 
                  color: '#3B82F6',
                  position: 'absolute',
                  right: '1.5rem',
                  top: '1.5rem'
                }} />
                <Heading variant="heading-strong-m" style={{ color: 'white' }}>Update</Heading>
                <Text variant="body-default-m" style={{ color: '#9CA3AF' }}>
                 Built on cutting-edge models like OpenAI, our AI monitors regulatory databases and industry publications in real-time, flagging relevant updates or new standards as soon as they're published. With this continual monitoring, you're always equipped with the latest compliance information—never defaulting to outdated practices.
                </Text>
              </Flex>

              <Flex direction="column" gap="m" background="neutral-strong" padding="m" radius="m" style={{ position: 'relative' }}>
                <Zap className="h-8 w-8" style={{ 
                  color: '#3B82F6',
                  position: 'absolute',
                  right: '1.5rem',
                  top: '1.5rem'
                }} />
                <Heading variant="heading-strong-m" style={{ color: 'white' }}>Recommend</Heading>
                <Text variant="body-default-m" style={{ color: '#9CA3AF' }}>
                Using advanced AI and RAG algorithms, H2Safety.ai goes beyond just tracking regulations—it tailors recommendations to your exact operational needs. By leveraging the world's best models, our platform provides proactive, industry-specific suggestions based on the most up-to-date safety practices, ensuring you apply the standards that are not only compliant but also most effective for your unique setup. 
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        {/* Why H2Safety.ai? (Features) Section */}
        <Flex
          direction="column"
          fillWidth
          style={{paddingTop: '3rem', paddingBottom: '3rem' }}
          gap="xl"
        >
          <Flex fillWidth maxWidth="m" direction="column" gap="m" style={{ margin: '0 auto' }}>
            <Flex
              background="neutral-strong"
              radius="m"
              padding="s"
              style={{ width: 'fit-content' }}
            >
              <Text variant="body-default-s" style={{ color: '#D1D5DB' }}>Features</Text>
            </Flex>
            <Heading variant="display-strong-m" style={{ color: 'white' }}>
              Why H2Safety.ai?
            </Heading>
          </Flex>
          {/* Three-column features row */}
          <Flex fillWidth maxWidth="m" direction="row" gap="l" style={{ margin: '0 auto' }}>
            <Flex direction="column" gap="m" flex={1}>
              <Flex alignItems="center" gap="m">
                <Layers className="h-8 w-8" style={{ color: '#3B82F6' }} />
                <Heading variant="heading-strong-s" style={{ color: 'white' }}>Unified Compliance</Heading>
              </Flex>
              <Text variant="body-default-m" style={{ color: '#9CA3AF' }}>
              Eliminate the hassle of cross-referencing scattered standards. H2Safety.ai brings all the relevant regulations into one comprehensive view.
              </Text>
            </Flex>
            
            <Flex direction="column" gap="m" flex={1}>
              <Flex alignItems="center" gap="m">
                <Bell className="h-8 w-8" style={{ color: '#3B82F6' }} />
                <Heading variant="heading-strong-s" style={{ color: 'white' }}>Real-Time Alerts</Heading>
              </Flex>
              <Text variant="body-default-m" style={{ color: '#9CA3AF' }}>
              Stay ahead of changes in safety protocols with instant notifications and updates.
              </Text>
            </Flex>

            <Flex direction="column" gap="m" flex={1}>
              <Flex alignItems="center" gap="m">
                <Lightbulb className="h-8 w-8" style={{ color: '#3B82F6' }} />
                <Heading variant="heading-strong-s" style={{ color: 'white' }}>Industry-Specific Insights</Heading>
              </Flex>
              <Text variant="body-default-m" style={{ color: '#9CA3AF' }}>
              Our AI tailors recommendations based on your sector and specific use case, ensuring you get the guidance that matters most.
              </Text>
            </Flex>
          </Flex>

          {/* Features subheading */}
          <Flex fillWidth maxWidth="m" direction="column" gap="m" style={{ margin: '0 auto' }}>
            <Heading variant="heading-strong-l" style={{ color: 'white' }}>
              Features:
            </Heading>

            <Flex direction="row" gap="xl">
              <Flex direction="column" gap="l" flex={1}>
                <Flex alignItems="flex-start" gap="m">
                  <CheckCircle className="h-6 w-6" style={{ color: '#3B82F6' }} />
                  <Flex direction="column" gap="s">
                    <Heading variant="heading-strong-s" style={{ color: 'white' }}>Consolidated Standards Library</Heading>
                    <Text variant="body-default-m" style={{ color: '#9CA3AF' }}>
                    Trained on global hydrogen safety standards, including ISO, NFPA, and local regulations, all in one place.
                    </Text>
                  </Flex>
                </Flex>

                <Flex alignItems="flex-start" gap="m">
                  <CheckCircle className="h-6 w-6" style={{ color: '#3B82F6' }} />
                  <Flex direction="column" gap="s">
                    <Heading variant="heading-strong-s" style={{ color: 'white' }}>Smart Recommendations</Heading>
                    <Text variant="body-default-m" style={{ color: '#9CA3AF' }}>
                     Receive actionable safety recommendations and best practices specific to your industry needs.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>

              <Flex direction="column" gap="l" flex={1}>
                <Flex alignItems="flex-start" gap="m">
                  <CheckCircle className="h-6 w-6" style={{ color: '#3B82F6' }} />
                  <Flex direction="column" gap="s">
                    <Heading variant="heading-strong-s" style={{ color: 'white' }}>Dynamic Compliance Tracking</Heading>
                    <Text variant="body-default-m" style={{ color: '#9CA3AF' }}>
                     Monitor your compliance status in real-time and receive automated alerts for non-compliance risks.
                    </Text>
                  </Flex>
                </Flex>

                <Flex alignItems="flex-start" gap="m">
                  <CheckCircle className="h-6 w-6" style={{ color: '#3B82F6' }} />
                  <Flex direction="column" gap="s">
                    <Heading variant="heading-strong-s" style={{ color: 'white' }}>Customizable Reports</Heading>
                    <Text variant="body-default-m" style={{ color: '#9CA3AF' }}>
                     Generate compliance reports tailored to your operational context, saving time and reducing manual work.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
