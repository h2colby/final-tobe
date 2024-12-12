"use client";

import React from 'react';
import { Flex, Heading, Logo } from '@/once-ui/components';
import { PdfViewer } from '@/components/PdfViewer/PdfViewer';

interface PdfDocument {
  path: string;
}

export default function Whitepapers() {
  // Add the new PDF to the list
  const pdfs: PdfDocument[] = [
    { path: "/documents/IPTECH_WHITEPAPER_ComparativeAnalysis_H2_Efficiency_v1.pdf" },
    { path: "/documents/IPTECH_WHITEPAPER_AI_UseCase_DataCenter_v1.pdf" },
    { path: "/documents/IPTECH_WHITEPAPER_STUDYDETAILS_Optimization_H2_Production_v1.pdf" },
    { path: "/documents/IPTECH_Expanding_Maxwell_Draft_AcademicPub_v1.pdf" }
  ];

  return (
    <Flex
      direction="column"
      alignItems="center"
      fillWidth
      flex={1}
      style={{ color: 'white', minHeight: '100vh', position: 'relative' }}
    >
      <Flex
        as="header"
        position="relative"
        flex={2}
        paddingTop="80"
        paddingX="xl"
        fillWidth
        direction="column"
        alignItems="center"
        gap="xl"
      >
        <Logo size="xl" icon={false} style={{ zIndex: '1' }} href="https://tobe.energy" />
      </Flex>

      <Flex
        as="section"
        position="relative"
        overflow="visible"
        fillWidth
        direction="column"
        alignItems="center"
        flex={1}
        style={{ 
          paddingBottom: '6rem',
          height: 'auto',
          minHeight: '100vh'
        }}
      >
        <Flex
          as="main"
          direction="column"
          justifyContent="flex-start"
          fillWidth
          padding="l"
          gap="l"
          style={{
            maxWidth: '68rem',
            width: '100%'
          }}
        >
          {pdfs.map((pdf, i) => (
            <Flex
              key={i}
              direction="column"
              gap="m"
              style={{
                marginBottom: '4rem',
                maxWidth: '100%',
                overflow: 'visible',
                background: 'rgba(31, 41, 55, 0.4)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(55, 65, 81, 0.3)',
                padding: '3rem 2rem',
                borderRadius: '0.5rem'
              }}
            >
              <PdfViewer filePath={pdf.path} />
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
