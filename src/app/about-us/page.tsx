"use client";

import React from 'react';
import { Flex, Heading, Text, Button, Grid, InlineCode, Logo, LetterFx } from '@/once-ui/components';
import Link from 'next/link';
import { PdfViewer } from '@/components/PdfViewer/PdfViewer';
import { Header } from "@/components/Header";
import styles from '../shared.module.css';

// Add type declarations for missing JSX elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
      img: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
    }
  }
}

export default function AboutUs() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      fillWidth
      flex={1}
      style={{
        color: 'white',
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Header />

      <Flex
        as="section"
        position="relative"
        overflow="visible"
        fillWidth
        direction="column"
        alignItems="center"
        style={{ 
          paddingTop: '2rem',
          paddingBottom: '200px',
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
              marginBottom: '1rem'
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
                Our Mission
              </InlineCode>
              <Heading
                wrap="balance"
                variant="display-strong-s"
              >
                <span className="font-code">
                  <LetterFx trigger="instant">
                    To deliver renewable energy, cost-competitive with fossil fuels. Equitable and Accessible Renewables.
                  </LetterFx>
                </span>
              </Heading>
            </Flex>
          </Flex>

          {/* First Box: PDF Viewer */}
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
                Our Slide Deck
              </Heading>
              <Text 
                variant="body-default-l"
                onBackground="neutral-weak"
                className={styles.description}
              >
                Explore our slide deck to learn more about our technology, vision, and roadmap.
              </Text>
              <Flex fillWidth justifyContent="center" style={{ marginTop: '2rem', position: 'relative', zIndex: 1 }}>
                <PdfViewer filePath="/documents/slide-deck.pdf" />
              </Flex>
            </Flex>
          </Grid>

          {/* Second Box: Founders */}
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
                paddingTop: '1rem',
                marginBottom: '2rem'
              }}
            >
              <Heading 
                variant="display-strong-s"
                className={styles.title}
              >
                Our Team
              </Heading>
              <Text 
                variant="body-default-l"
                onBackground="neutral-weak"
                className={styles.description}
              >
                Meet the minds behind Tobe Energy.
              </Text>

              <Flex
                direction="row"
                gap="xl"
                justifyContent="center"
                wrap
                style={{
                  marginTop: '2rem',
                  width: '100%',
                  maxWidth: '1200px',
                  margin: '2rem auto 2rem auto',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}
              >
                {/* Caleb */}
                <Flex direction="column" alignItems="center" gap="m" style={{ textAlign: 'center', width: '250px' }}>
                  <img
                    src="/images/calebheadshot.jpeg"
                    alt="Caleb Lareau"
                    style={{
                      width: '150px',
                      height: '150px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  <Heading variant="heading-strong-m">Caleb Lareau, Ph.D.</Heading>
                  <Text variant="body-default-m" style={{ color: '#9CA3AF' }}>
                    Co-Founder & Strategic Advisor
                  </Text>
                  <Text variant="body-default-m" onBackground="neutral-weak" style={{ maxWidth: '20rem' }}>
                    Dr. Caleb Lareau is an Assistant Professor at Memorial Sloan Kettering Cancer Institute and a Scientific Co-Founder of Cartography Biosciences. A graduate of Harvard Medical School and an inaugural Stanford Science Fellow, Caleb brings expertise in cutting-edge research and platform technology. He is a Forbes 30 Under 30 honoree and recipient of the NIH Pathway to Independence Award.
                  </Text>
                </Flex>

                {/* Louis */}
                <Flex direction="column" alignItems="center" gap="m" style={{ textAlign: 'center', width: '250px' }}>
                  <img
                    src="/images/louheadshot.jpeg"
                    alt="Louis Mounsey"
                    style={{
                      width: '150px',
                      height: '150px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  <Heading variant="heading-strong-m">Louis Mounsey, PMP</Heading>
                  <Text variant="body-default-m" style={{ color: '#9CA3AF' }}>
                    Co-Founder
                  </Text>
                  <Text variant="body-default-m" onBackground="neutral-weak" style={{ maxWidth: '20rem' }}>
                    Louis Mounsey is a Chemical Engineer from the University of Southern California and a certified Project Management Professional (PMP) with extensive international experience in hydrogen sales and renewable energy. At Arkema, he managed clients across industries like refining, green hydrogen, and carbon capture...
                  </Text>
                </Flex>

                {/* Colby */}
                <Flex direction="column" alignItems="center" gap="m" style={{ textAlign: 'center', width: '250px' }}>
                  <img
                    src="/images/colbyheadshot.jpeg"
                    alt="Colby DeWeese"
                    style={{
                      width: '150px',
                      height: '150px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  <Heading variant="heading-strong-m">Colby DeWeese</Heading>
                  <Text variant="body-default-m" style={{ color: '#9CA3AF' }}>
                    Founder & CEO
                  </Text>
                  <Text variant="body-default-m" onBackground="neutral-weak" style={{ maxWidth: '20rem' }}>
                    Colby DeWeese is the founder and CEO of Tobe Energy, combining expertise in chemical engineering and energy law to pioneer innovations in hydrogen production. With a background in managing $70M+ projects at Markwest Energy Partners and three years as a Principal Process Engineer in renewables, Colby has dedicated the past two years to revolutionizing electrolysis technology and advancing sustainable energy solutions.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Grid>

          {/* Add spacer */}
          <Grid
            columns="1col"
            fillWidth
            style={{ 
              minHeight: '10vh',
              marginBottom: '40px'
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
          zIndex: 10,
          bottom: 0
        }}
      >
        <Text
          variant="body-default-s" onBackground="neutral-weak"
        >
          © 2024 Tobe Energy, <Link href="https://github.com/h2colby/working-tobe">MIT License</Link>
        </Text>
        <Flex gap="12">
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
