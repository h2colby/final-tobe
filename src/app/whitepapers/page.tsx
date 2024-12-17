"use client";

import React from 'react';
import { Flex, Heading, Logo, Button, Text, Grid, InlineCode } from '@/once-ui/components';
import { PdfViewer } from '@/components/PdfViewer/PdfViewer';
import { Header } from "@/components/Header";
import styles from '../shared.module.css';
import { FileText, Settings, Lightbulb, BarChart, Microscope } from "lucide-react";

interface PdfDocument {
  path: string;
}

interface TitleItem {
  title: string;
  icon: React.ReactNode;
}

export default function Whitepapers() {
  const titles: TitleItem[] = [
    {
      title: 'Comparative Analysis of Electrolyzer Efficiency and Cost',
      icon: <FileText size={20} style={{ color: "#5BE7A9" }} />
    },
    {
      title: 'Tobe Electrolyzer Tech Product Guide',
      icon: <Settings size={20} style={{ color: "#5BE7A9" }} />
    },
    {
      title: 'Green Hydrogen in AI Data Centers: Save Up to 60% on Electricity',
      icon: <Lightbulb size={20} style={{ color: "#5BE7A9" }} />
    },
    {
      title: 'Optimizing Hydrogen Production: Efficiency Testing Framework',
      icon: <BarChart size={20} style={{ color: "#5BE7A9" }} />
    },
    {
      title: 'Expanding the Maxwell Equation: Fundamental Physics for Electrolysis',
      icon: <Microscope size={20} style={{ color: "#5BE7A9" }} />
    }
  ];

  const pdfs: PdfDocument[] = [
    { path: "/documents/IPTECH_WHITEPAPER_ComparativeAnalysis_H2_Efficiency_v1.pdf" },
    { path: "/documents/IPTECH_Product_Catalog_TOBE.pdf" },
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
            fillWidth
            direction="column"
            alignItems="center"
            gap="24"
            style={{
              marginBottom: '2rem'
            }}
          >
            <Flex direction="column" alignItems="center" gap="8">
              <InlineCode
                className="shadow-m"
                style={{
                  padding: 'var(--static-space-8) var(--static-space-16)',
                  backdropFilter: 'blur(var(--static-space-1))'
                }}
              >
                Whitepapers
              </InlineCode>
              <Heading variant="display-strong-s">
                <span className="font-code">
                  Technical Documents
                </span>
              </Heading>
            </Flex>

            <Logo
              size="xl"
              icon={false}
              style={{ zIndex: '1' }}
              href="https://tobe.energy"
            />
          </Flex>

          {/* Table of Contents */}
          <Grid
            radius="l"
            border="neutral-medium"
            borderStyle="solid-1"
            columns="1col"
            fillWidth
            className={styles.card}
            style={{
              background: 'linear-gradient(135deg, #111827, #1F2937)',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
              padding: '2rem',
              marginBottom: '2rem'
            }}
          >
            <Flex
              fillWidth
              direction="column"
              gap="24"
              style={{
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              <Text 
                variant="body-default-l"
                style={{ 
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  textAlign: 'center',
                  fontStyle: 'italic',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}
              >
                Explore our collection of whitepapers covering groundbreaking advancements in green hydrogen technology. 
                From technical innovations to practical applications, discover how Tobe Energy is redefining efficiency, 
                affordability, and scalability for a cleaner energy future.
              </Text>
              
              <Flex 
                as="ul"
                direction="column" 
                alignItems="center"
                gap="xs"
                style={{ listStyle: "none", padding: 0 }}
              >
                {titles.map((item, index) => (
                  <Flex
                    as="li"
                    key={index}
                    alignItems="center"
                    gap="8"
                    style={{ 
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                      padding: '0.5rem 1rem',
                      borderRadius: '0.25rem',
                      width: 'fit-content'
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                      const textElement = e.currentTarget.querySelector('span');
                      if (textElement) textElement.style.color = '#5BE7A9';
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                      const textElement = e.currentTarget.querySelector('span');
                      if (textElement) textElement.style.color = 'white';
                    }}
                  >
                    {item.icon}
                    <Text
                      variant="body-default-l"
                      as="span"
                      style={{ 
                        fontSize: '1.1rem',
                        lineHeight: '1.2',
                        textAlign: 'left'
                      }}
                    >
                      {item.title}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </Grid>

          {/* PDF Viewer Section */}
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
              <Flex justifyContent="center" paddingTop="m">
                <a
                  href={pdf.path}
                  download
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    variant="secondary"
                    suffixIcon="arrow-right"
                  >
                    Download PDF
                  </Button>
                </a>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
