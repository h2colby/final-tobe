"use client";

import React, { useState } from 'react';
import { Flex, Heading, Text, Button, Grid, InlineCode, Logo, LetterFx } from '@/once-ui/components';
import Link from 'next/link';
import { Header } from "@/components/Header";
import styles from '../shared.module.css';

const jobCardStyles = {
  card: {
    marginBottom: '2rem',
    background: 'rgba(31, 41, 55, 0.2)',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    padding: '3rem 2rem',
    transform: 'translateY(0)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  hover: {
    transform: 'translateY(-4px)',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    background: 'rgba(31, 41, 55, 0.3)',
  }
};

export default function JobsPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [waitlistName, setWaitlistName] = useState('');
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [build, setBuild] = useState('');
  const [applyStatus, setApplyStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  function openApplyForm() {
    setWaitlistName('');
    setWaitlistEmail('');
    setPhone('');
    setBuild('');
    setApplyStatus('idle');
    setIsApplyOpen(true);
  }

  function closeApplyForm() {
    setIsApplyOpen(false);
  }

  async function applyNow(e: React.FormEvent) {
    e.preventDefault();
    if (!waitlistName || !waitlistEmail || !phone || !build) return;

    setApplyStatus('loading');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: waitlistName, email: waitlistEmail, phone, build })
      });
      const data = await res.json();

      if (res.ok) {
        setApplyStatus('success');
      } else {
        console.error('Error response:', data);
        setApplyStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setApplyStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  }

  return (
    <Flex
      direction="column"
      alignItems="center"
      fillWidth
      style={{
        color: 'white',
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Header />

      {isApplyOpen && (
        <Flex
          style={{
            position: 'fixed',
            inset: '0',
            background: 'rgba(0,0,0,0.5)'
          }}
          alignItems="center"
          justifyContent="center"
          zIndex={9999}
        >
          <Flex
            direction="column"
            gap="m"
            style={{ 
              background: '#1F2937', 
              padding: '2rem', 
              borderRadius: '0.5rem', 
              maxWidth: '40rem', 
              width: '90%'
            }}
          >
            {applyStatus === 'success' ? (
              <Flex direction="column" gap="m">
                <Heading variant="heading-strong-m">Thanks for applying!</Heading>
                <Text onBackground="neutral-weak">We will review your info and get back to you.</Text>
                <Button variant="tertiary" onClick={closeApplyForm}>Close</Button>
              </Flex>
            ) : (
              <form onSubmit={applyNow}>
                <Heading variant="heading-strong-m" style={{ marginBottom: '1.5rem' }}>
                  Apply Now
                </Heading>
                {applyStatus === 'error' && (
                  <Text variant="body-default-s" style={{ color: 'red', marginBottom: '1rem' }}>
                    {errorMessage || 'Something went wrong. Please try again.'}
                  </Text>
                )}
                <input
                  type="text"
                  placeholder="Your Name"
                  value={waitlistName}
                  onChange={e => setWaitlistName(e.target.value)}
                  style={{
                    marginBottom: '1rem',
                    background: '#374151',
                    color: 'white',
                    border: '1px solid #4B5563',
                    borderRadius: '0.25rem',
                    padding: '0.75rem',
                    width: '100%',
                    fontSize: '1rem'
                  }}
                  required
                />
                <Flex gap="m" marginBottom="m">
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={waitlistEmail}
                    onChange={e => setWaitlistEmail(e.target.value)}
                    style={{
                      background: '#374151',
                      color: 'white',
                      border: '1px solid #4B5563',
                      borderRadius: '0.25rem',
                      padding: '0.75rem',
                      width: '100%',
                      fontSize: '1rem'
                    }}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    style={{
                      background: '#374151',
                      color: 'white',
                      border: '1px solid #4B5563',
                      borderRadius: '0.25rem',
                      padding: '0.75rem',
                      width: '100%',
                      fontSize: '1rem'
                    }}
                    required
                  />
                </Flex>
                <textarea
                  placeholder="What is the last thing you built for yourself?"
                  value={build}
                  onChange={e => setBuild(e.target.value)}
                  style={{
                    marginBottom: '1.5rem',
                    background: '#374151',
                    color: 'white',
                    border: '1px solid #4B5563',
                    borderRadius: '0.25rem',
                    padding: '0.75rem',
                    height: '150px',
                    width: '100%',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                  required
                />
                <Flex justifyContent="flex-end" gap="m" marginTop="m">
                  <Button variant="tertiary" onClick={closeApplyForm} type="button">Cancel</Button>
                  <Button variant="tertiary" type="submit" disabled={applyStatus === 'loading'}>
                    {applyStatus === 'loading' ? 'Submitting...' : 'Submit'}
                  </Button>
                </Flex>
              </form>
            )}
          </Flex>
        </Flex>
      )}

      <Flex
        as="section"
        position="relative"
        overflow="visible"
        fillWidth
        direction="column"
        alignItems="center"
        style={{ 
          paddingTop: '2rem',
          flex: '1 1 auto',
          width: '100%',
          maxWidth: '1088px'
        }}
      >
        <Flex
          as="main"
          direction="column"
          justifyContent="flex-start"
          fillWidth fillHeight
          padding="l"
          gap="l"
          style={{
            marginTop: '4rem'
          }}
        >
          <Flex
            mobileDirection="column"
            fillWidth
            gap="24"
            style={{
              marginBottom: '2rem'
            }}
          >
            <Flex
              position="relative"
              flex={2}
              paddingTop="80"
              paddingX="xl"
            >
              <Logo
                size="xl"
                icon={false}
                style={{ zIndex: '1' }}
                href="https://tobe.energy"
              />
            </Flex>
            <Flex
              position="relative"
              flex={4}
              gap="24"
              marginBottom="104"
              direction="column"
            >
              <InlineCode
                className="shadow-m"
                style={{
                  width: 'fit-content',
                  padding: 'var(--static-space-8) var(--static-space-16)',
                  backdropFilter: 'blur(var(--static-space-1))'
                }}
              >
                Jobs
              </InlineCode>
              <Heading
                wrap="balance"
                variant="display-strong-s"
              >
                <span className="font-code">
                  <LetterFx trigger="instant">
                    Join the Hydrogen Revolution
                  </LetterFx>
                </span>
              </Heading>
              {/* Apply Now Button */}
              <Button
                variant="secondary"
                onClick={openApplyForm}
                style={{ 
                  marginTop: '1.5rem',
                  padding: '1rem 2.5rem',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  letterSpacing: '0.5px',
                  transform: 'scale(1)',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}
              >
                Apply Now
              </Button>
            </Flex>
          </Flex>

          {/* First box: Job Post #1 */}
          <Grid
            radius="l"
            border="neutral-medium"
            borderStyle="solid-1"
            columns="1col"
            fillWidth
            className={styles.card}
          >
            <Flex
              fillWidth
              paddingY="8"
              paddingX="l"
              direction="column"
              gap="8"
              style={{
                paddingTop: '1rem'
              }}
            >
              <Heading 
                variant="display-strong-s"
                className={styles.title}
              >
                Senior Electrical Engineer / CTO
              </Heading>
              <Text 
                variant="body-default-m"
                onBackground="neutral-weak"
                className={styles.description}
              >
                We're seeking an experienced senior electrical engineer with extensive experience in UL certifications and resonant LLC power converters. You'll lead the design and development of cutting-edge hydrogen technology systems, ensuring regulatory compliance and superior performance.
              </Text>
            </Flex>
          </Grid>

          {/* Second box: Job Post #2 */}
          <Grid
            radius="l"
            border="neutral-medium"
            borderStyle="solid-1"
            columns="1col"
            fillWidth
            className={styles.card}
          >
            <Flex
              fillWidth
              paddingY="8"
              paddingX="l"
              direction="column"
              gap="8"
              style={{
                paddingTop: '1rem'
              }}
            >
              <Heading 
                variant="display-strong-s"
                className={styles.title}
              >
                Lead Operations / Tech
              </Heading>
              <Text 
                variant="body-default-m"
                onBackground="neutral-weak"
                className={styles.description}
              >
                We need someone who can work with their hands and make engineers look like they've never built a thing in their life. You'll handle ground-level implementation, ensuring our innovations come to life with robustness and reliability.
              </Text>
            </Flex>
          </Grid>

          {/* Third box: Job Post #3 */}
          <Grid
            radius="l"
            border="neutral-medium"
            borderStyle="solid-1"
            columns="1col"
            fillWidth
            className={styles.card}
          >
            <Flex
              fillWidth
              paddingY="8"
              paddingX="l"
              direction="column"
              gap="8"
              style={{
                paddingTop: '1rem'
              }}
            >
              <Heading 
                variant="display-strong-s"
                className={styles.title}
              >
                Researcher - Plasma Physics
              </Heading>
              <Text 
                variant="body-default-m"
                onBackground="neutral-weak"
                className={styles.description}
              >
                Whether you're just finishing your PhD or just starting, we want someone with deep expertise in plasma physics. This is a niche and crucial field for our hydrogen technology. The right candidate could grow into a CTO or CSO role, shaping the future of our R&D efforts.
              </Text>
            </Flex>
          </Grid>

          {/* Add a blank spacer section after the plasma physics posting */}
          <Grid
            columns="1col"
            fillWidth
            style={{ 
              minHeight: '20vh',
              marginBottom: '60px'
            }}
          >
          </Grid>
        </Flex>
      </Flex>

      <Flex
        as="footer"
        position="fixed"
        fillWidth
        paddingX="l"
        paddingY="m"
        justifyContent="space-between"
        style={{ 
          borderTop: '1px solid #374151',
          zIndex: 20,
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px'
        }}
      >
        <Text variant="body-default-s" onBackground="neutral-weak">
          © 2024 Tobe Energy, <Link href="https://github.com/h2colby/working-tobe">MIT License</Link>
        </Text>
        <Flex gap="12" style={{ paddingBottom: '4px' }}>
          <Button
            href="https://twitter.com/h2colby"
            prefixIcon="twitter"
            size="s"
            variant="tertiary"
            style={{ color: 'white' }}
          >
            Twitter
          </Button>
          <Button
            href="https://www.youtube.com/@Tobe.Energy"
            prefixIcon="youtube"
            size="s"
            variant="tertiary"
            style={{ color: 'white' }}
          >
            YouTube
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
