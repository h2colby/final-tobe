"use client";

import React, { useState, useEffect, ChangeEvent } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, RefreshCcw, Zap, Layers, Bell, Lightbulb, FileText } from "lucide-react";
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
        {/* Hero Section */}
        <Flex direction="column" fillWidth maxWidth="m" gap="m" alignItems="center" paddingY="m" style={{ paddingTop: '2rem' }}>
          {/* Add logo */}
          <img 
            src="/images/h2safety-white.svg" 
            alt="H2Safety.ai Logo" 
            style={{ 
              maxWidth: '300px',
              marginBottom: '1rem'
            }} 
          />
          <Heading variant="display-strong-l" wrap="balance" style={{ textAlign: 'center' }}>
            The Fastest Way to Build Safe, Compliant Hydrogen Projects
          </Heading>
          <Text variant="heading-default-xl" onBackground="neutral-weak" style={{ textAlign: 'center', maxWidth: '40rem' }}>
            Simplify safety, permitting, engineering, and code and standard compliance with AI-powered tools—built for hydrogen professionals like you.
          </Text>
          <Flex justifyContent="center" width="100%">
            <Link href="https://www.h2safety.ai" target="_blank">
              <Button
                variant="tertiary"
                style={{ 
                  background: '#3B82F6', 
                  color: 'white',
                  transition: 'background-color 0.2s ease-in-out'
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.background = '#2563EB'}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.background = '#3B82F6'}>
                Visit H2Safety.ai
              </Button>
            </Link>
          </Flex>
        </Flex>

        {/* Why H2Safety.ai? (Features) Section */}
        <Flex
          direction="column"
          fillWidth
          style={{paddingTop: '0', paddingBottom: '3rem' }}
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
          {/* Two-column features row */}
          <Flex fillWidth maxWidth="m" direction="row" gap="l" style={{ margin: '0 auto' }}>
            <Flex direction="column" gap="m" flex={1}>
              <Flex alignItems="center" gap="m">
                <Bell className="h-8 w-8" style={{ color: '#5BE7A9' }} />
                <Heading variant="heading-strong-s" style={{ color: 'white' }}>Save Time</Heading>
              </Flex>
              <Text variant="body-default-m" style={{ color: '#9CA3AF' }}>
                Process Safety Engineers and Environmental Professionals spend countless hours researching safety and compliance requirements. H2Safety.ai automates that research, delivering instant answers so you can focus on building renewable projects faster and with better compliance. While big companies might afford wasted time, the planet cannot. We built this system to accelerate progress—because the earth doesn't have time to wait.
              </Text>
            </Flex>

            <Flex direction="column" gap="m" flex={1}>
              <Flex alignItems="center" gap="m">
                <Lightbulb className="h-8 w-8" style={{ color: '#5BE7A9' }} />
                <Heading variant="heading-strong-s" style={{ color: 'white' }}>Industry-Specific Insights</Heading>
              </Flex>
              <Text variant="body-default-m" style={{ color: '#9CA3AF' }}>
                Critical safety and environmental standards are often hard to find for something you're required to follow. In most cases, you don't even know a standard exists until you've stumbled upon it. The hydrogen industry cannot afford this gap in knowledge. H2Safety.ai ensures nothing is missed—bringing hidden standards to light, so your projects meet every safety and environmental benchmark effortlessly.
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
                <Flex alignItems="flex-start">
                  <Flex direction="column" gap="s">
                    <Flex alignItems="center" gap="1.5rem">
                      <Layers size={28} color="#5BE7A9" />
                      <Heading variant="heading-strong-s" style={{ color: 'white' }}>Consolidated Information Hub</Heading>
                    </Flex>
                    <Text variant="body-default-m" style={{ color: '#9CA3AF' }}>
                      Access a centralized library of over 150,000+ pages of critical information, including hydrogen safety standards, energy codes, project management guidelines, design practices, and regulatory frameworks. All the knowledge you need—organized and searchable in one intuitive platform.
                    </Text>
                  </Flex>
                </Flex>

                <Flex alignItems="flex-start">
                  <Flex direction="column" gap="s">
                    <Flex alignItems="center" gap="1.5rem">
                      <Lightbulb size={28} color="#5BE7A9" />
                      <Heading variant="heading-strong-s" style={{ color: 'white' }}>Smart Insights</Heading>
                    </Flex>
                    <Text variant="body-default-m" style={{ color: '#9CA3AF' }}>
                      Receive tailored safety insights and actionable best practices specific to your project's needs. Powered by industry-leading AI models and custom-trained algorithms, H2Safety.ai delivers accurate, context-aware guidance you can trust.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>

              <Flex direction="column" gap="l" flex={1}>
                <Flex alignItems="flex-start">
                  <Flex direction="column" gap="s">
                    <Flex alignItems="center" gap="1.5rem">
                      <RefreshCcw size={28} color="#5BE7A9" />
                      <Heading variant="heading-strong-s" style={{ color: 'white' }}>Unified Compliance</Heading>
                    </Flex>
                    <Text variant="body-default-m" style={{ color: '#9CA3AF' }}>
                      Streamline safety and regulatory tracking across all critical frameworks: Codes and Standards (e.g., NFPA), Recommended Practices (API RP), Federal regulations (OSHA PSM), State laws, and a curated collection of best practices. Ensure every requirement is covered seamlessly in one place.
                    </Text>
                  </Flex>
                </Flex>

                <Flex alignItems="flex-start">
                  <Flex direction="column" gap="s">
                    <Flex alignItems="center" gap="1.5rem">
                      <FileText size={28} color="#5BE7A9" />
                      <Heading variant="heading-strong-s" style={{ color: 'white' }}>Customizable Reports</Heading>
                    </Flex>
                    <Text variant="body-default-m" style={{ color: '#9CA3AF' }}>
                      Automatically generate comprehensive reports tailored to your project. Whether you need detailed formal documentation, quick compliance emails, or fully custom reports generated through your own prompts, H2Safety.ai delivers professional results in seconds.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        {/* Join Waitlist Button and Example Queries Row */}
        <Flex fillWidth maxWidth="m" direction="row" gap="xl" alignItems="center" justifyContent="space-between">
          {/* Join Waitlist Button */}
          <Flex justifyContent="center" width="100%">
            <Button
              onClick={openWaitlist}
              variant="tertiary"
              style={{ 
                background: '#3B82F6', 
                color: 'white', 
                transition: 'background-color 0.2s ease-in-out'
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.background = '#2563EB'}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.background = '#3B82F6'}>
              Join the Waitlist
            </Button>
          </Flex>

          {/* Example Queries */}
          <Flex direction="column" background="neutral-strong" radius="m" padding="m" gap="m" style={{ flex: 1, maxWidth: '40rem' }}>
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
                <RefreshCcw className="h-5 w-5" style={{ color: '#5BE7A9' }} />
              </Button>
            </Flex>
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
                Ensuring Accuracy with Retrieval-Augmented Generation (RAG)
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak" style={{ maxWidth: '40rem', color: '#9CA3AF' }}>
                H2Safety.ai leverages Retrieval-Augmented Generation (RAG) to deliver precise, context-specific, hallucination-free compliance guidance for the hydrogen industry. Built on cutting-edge language models like OpenAI, our system dynamically integrates hydrogen safety standards and regulatory frameworks into a unified, ever-evolving knowledge base.
              </Text>
              <Flex justifyContent="center" width="100%" style={{ marginTop: '1rem' }}>
                <Link href="https://www.h2safety.ai" target="_blank">
                  <Button
                    variant="tertiary"
                    style={{ 
                      background: '#3B82F6', 
                      color: 'white',
                      transition: 'background-color 0.2s ease-in-out'
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.background = '#2563EB'}
                    onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.background = '#3B82F6'}>
                    Visit H2Safety.ai
                  </Button>
                </Link>
              </Flex>
            </Flex>

            {/* Right Column */}
            <Flex direction="column" gap="m" flex={1}>
              <Flex direction="column" gap="m" background="neutral-strong" padding="m" radius="m" style={{ position: 'relative' }}>
                <CheckCircle className="h-8 w-8" style={{ 
                  color: '#5BE7A9',
                  position: 'absolute',
                  right: '1.5rem',
                  top: '1.5rem'
                }} />
                <Heading variant="heading-strong-m" style={{ color: 'white', paddingRight: '3rem', marginBottom: '0.5rem' }}>Consolidate</Heading>
                <Text variant="body-default-m" style={{ color: '#9CA3AF' }}>
                  Our AI seamlessly pulls hydrogen safety standards from global sources like ISO, NFPA, OSHA, and local regulations. Advanced natural language processing (NLP) ensures every document, code, and regulation is meticulously cataloged, interlinked, and easy to access.
                </Text>
              </Flex>

              <Flex direction="column" gap="m" background="neutral-strong" padding="m" radius="m" style={{ position: 'relative' }}>
                <RefreshCcw className="h-8 w-8" style={{ 
                  color: '#5BE7A9',
                  position: 'absolute',
                  right: '1.5rem',
                  top: '1.5rem'
                }} />
                <Heading variant="heading-strong-m" style={{ color: 'white', marginBottom: '0.5rem' }}>Update</Heading>
                <Text variant="body-default-m" style={{ color: '#9CA3AF' }}>
                  Stay ahead of change. H2Safety.ai monitors regulatory databases and industry publications in real-time, flagging updates as soon as new standards or changes are published. You'll always have the latest compliance information—no outdated practices, no guesswork.
                </Text>
              </Flex>

              <Flex direction="column" gap="m" background="neutral-strong" padding="m" radius="m" style={{ position: 'relative' }}>
                <Zap className="h-8 w-8" style={{ 
                  color: '#5BE7A9',
                  position: 'absolute',
                  right: '1.5rem',
                  top: '1.5rem'
                }} />
                <Heading variant="heading-strong-m" style={{ color: 'white', marginBottom: '0.5rem' }}>Recommend</Heading>
                <Text variant="body-default-m" style={{ color: '#9CA3AF' }}>
                  H2Safety.ai doesn't just track regulations—it interprets them. Using RAG-powered AI, we deliver tailored, proactive safety recommendations specific to your operations. By combining advanced models with up-to-date practices, we ensure you're not only compliant but implementing the most effective safety standards for your projects.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
