"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Flex, 
  Heading, 
  Text, 
  InlineCode, 
  Logo, 
  LetterFx,
  Grid,
  Button
} from '@/once-ui/components';
import { Header } from '@/components/Header';
import styles from '../shared.module.css';
import { Arrow } from '@/components/Arrow';

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-');
}

export default function Technology() {
  const sections = [
    {
      title: "A New Method of Electrolysis",
      subtitle: "Revolutionizing Efficiency in Green Hydrogen",
      description: [
        "Traditional electrolyzers suffer from inherent inefficiencies, high costs, and significant waste heat. These inefficiencies, combined with expensive components, have historically limited the scalability of green hydrogen. Tobe Energy has completely re-engineered the electrolysis process, delivering a transformative solution with >90% wall-to-plug efficiency, nearly double that of conventional systems.",
        "",
        "What Sets Us Apart:"
      ],
      bullets: [
        "Immediate Startup: Unlike traditional systems with long cold-start times, our electrolyzers begin hydrogen production in seconds. This rapid response capability makes them ideal for dynamic energy systems, including renewables with intermittent power supply.",
        "Cost-Effective Design: By reducing capital (CAPEX) and operational (OPEX) costs, we make green hydrogen financially competitive with fossil fuel alternatives.",
        "Sustainable Operation: Our technology eliminates waste heat and reliance on exotic materials, ensuring environmental sustainability alongside cost-effectiveness."
      ]
    },
    {
      title: "Membrane-Free Technology",
      subtitle: "Simplifying Hydrogen Production",
      description: [
        "Traditional electrolyzers rely on fragile and costly membranes, which often limit system lifespan and require frequent, expensive maintenance. Tobe Energy’s membrane-free design eliminates these barriers, creating safer, more durable, and cost-efficient systems. By using widely available materials like 304 stainless steel, we dramatically reduce the complexity and expense of hydrogen production.",
        "",
        "Why Membrane-Free Matters:"
      ],
      bullets: [
        "No Caustic Electrolytes: Our system avoids hazardous chemicals, making operations safer and easier to maintain.",
        "Extended Lifespan: Membranes are a common point of failure in traditional systems; removing them ensures longer operational lifespans and reduces replacement costs.",
        "Scalability: Our modular systems can grow with demand, scaling from 5 kg/day for small projects to 2,500+ kg/day for industrial-scale applications."
      ],
      extraParagraph: [
        "The Impact:",
        "This simplification not only reduces the upfront and ongoing costs of hydrogen production but also makes the technology more accessible to emerging markets and underserved regions."
      ]
    },
    {
      title: "Innovation in Power Electronics",
      subtitle: "Advanced Resonant LLC Technology",
      description: [
        "At the heart of our system lies resonant LLC power conversion technology, the current state-of-the-art in high-efficiency power electronics. Tobe Energy’s innovation goes further by seamlessly integrating the electrolysis cell as a capacitive component within this resonant circuit, enabling unmatched performance.",
        "",
        "Key Innovations:"
      ],
      bullets: [
        "Voltage Amplification: Using precision LC tuning, we amplify voltage within the circuit, maximizing energy transfer and efficiency.",
        "No Waste Heat: Our electrolyzers operate at room temperature, with system temperatures never exceeding 30°C, eliminating the need for costly cooling systems.",
        "Battery-Level Efficiency: With efficiency comparable to modern battery storage, our systems redefine energy storage by producing hydrogen as effectively as batteries store electricity."
      ],
      extraParagraph: [
        "The Competitive Advantage:",
        "This innovation positions Tobe Energy’s electrolyzers as a versatile solution for both energy production and storage, capable of supporting grid-independent and grid-connected systems."
      ]
    },
    {
      title: "Twice the Efficiency, Half the Cost",
      subtitle: "Overcoming Traditional Shortcomings",
      description: [
        "The shortcomings of traditional electrolyzers have hindered widespread adoption of green hydrogen. These systems rely on exotic materials, operate at high temperatures, and produce excessive waste heat, resulting in high costs and inefficiencies.",
        "",
        "Challenges of Traditional Systems:"
      ],
      bullets: [
        "Waste heat production requires complex and expensive cooling mechanisms.",
        "High-pressure and high-temperature operation demands exotic materials like rare-earth metals, driving up costs.",
        "Long startup times and hazardous caustic electrolytes limit flexibility and safety."
      ],
      description2: [
        "",
        "Benefits of Tobe Electrolysis:"
      ],
      bullets2: [
        "No Waste Heat: With >90% efficiency at room temperature, cooling systems are unnecessary.",
        "Standard Materials: Our systems are built with common, cost-effective components, like 304 stainless steel.",
        "Safe, Immediate Startup: Hydrogen production begins instantly without hazardous chemicals, enabling safer, more versatile applications."
      ],
      extraParagraph: [
        "By addressing these inefficiencies, Tobe Energy makes green hydrogen production both practical and economical, paving the way for broader adoption across industries."
      ]
    },
    {
      title: "Science-Driven Innovation",
      subtitle: "Inside the Breakthrough",
      description: [
        "Tobe Energy’s patent-pending technology combines advanced power electronics with innovative materials to deliver game-changing performance. At its core, our system redefines electrolysis through precise engineering and validated science.",
        "",
        "Key Components of Our Breakthrough:"
      ],
      bullets: [
        "Resonant Circuits: Using advanced LC tuning, we amplify efficiency by leveraging the natural frequency of our capacitive electrolysis system.",
        "No Catalysts Required: Unlike conventional systems that rely on expensive, rare catalysts, our design eliminates the need for these materials entirely.",
        "Proven Performance: Thousands of hours of real-world testing have confirmed >90% efficiency, demonstrating both reliability and scalability."
      ],
      extraParagraph: [
        "Why It Matters:",
        "Our approach doesn’t just tweak existing systems; it fundamentally changes how hydrogen is produced, making it more efficient, cost-effective, and environmentally friendly."
      ]
    }
  ];

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
          {/* Hero Section */}
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
                Technology
              </InlineCode>
              <Heading
                wrap="balance"
                variant="display-strong-s"
              >
                <span className="font-code">
                  <LetterFx trigger="instant">
                    Redefining Hydrogen Production
                  </LetterFx>
                </span>
              </Heading>
            </Flex>
          </Flex>

          {/* New Introduction Section */}
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
              direction="column"
              gap="24"
              style={{
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              <Heading 
                variant="display-strong-s"
                className={styles.title}
              >
                No We Don't.. [fit into a box]
              </Heading>
              
              <Text 
                variant="body-default-l"
                onBackground="neutral-weak"
                className={styles.description}
                style={{ 
                  fontSize: '1.25rem',
                  lineHeight: '1.75',
                  textAlign: 'center'
                }}
              >
                No, we don't fit neatly into the traditional categories like AEM, PEM, or SOEC. What we're building is something entirely new—a paradigm shift in hydrogen production. Think of it as what LEDs did to traditional lighting: a completely reimagined approach with transformative potential.
              </Text>
              
              <Flex gap="m" alignItems="center" justifyContent="center">
                <Button
                  id="readDocs"
                  href="/whitepapers"
                  variant="secondary"
                  size="l"
                >
                  <Flex alignItems="center" gap="8">
                    Read the Whitepaper
                    <Arrow trigger="#readDocs" />
                  </Flex>
                </Button>
              </Flex>
            </Flex>
          </Grid>

          {/* Technology Sections */}
          {sections.map((section) => {
            const sectionId = slugify(section.title);
            return (
              <Grid
                key={sectionId}
                id={sectionId}
                radius="l"
                border="neutral-medium"
                borderStyle="solid-1"
                columns="1col"
                fillWidth
                className={styles.card}
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
                  <Heading 
                    variant="display-strong-s"
                    className={styles.title}
                  >
                    {section.title}
                  </Heading>
                  
                  {section.subtitle && (
                    <Text
                      variant="heading-strong-l"
                      onBackground="neutral-weak"
                      className={styles.description}
                      style={{ 
                        fontSize: '1.5rem',
                        marginBottom: '2rem'
                      }}
                    >
                      {section.subtitle}
                    </Text>
                  )}
                  
                  {section.description.map((desc, i) => (
                    <Text 
                      key={i} 
                      variant="body-default-l"
                      onBackground="neutral-weak"
                      className={styles.description}
                      style={{ 
                        opacity: desc === '' ? 0 : 1
                      }}
                    >
                      {desc}
                    </Text>
                  ))}

                  {section.bullets && section.bullets.length > 0 && (
                    <Flex 
                      as="ul" 
                      direction="column" 
                      gap="16" 
                      style={{ 
                        maxWidth: '700px', 
                        margin: '2rem auto',
                        listStyleType: 'none',
                        paddingLeft: '0'
                      }}
                    >
                      {section.bullets.map((bullet, i) => (
                        <Text 
                          as="li" 
                          variant="body-default-l" 
                          key={i}
                          style={{
                            fontSize: '1.125rem',
                            lineHeight: '1.75',
                            position: 'relative',
                            paddingLeft: '2rem',
                            display: 'flex'
                          }}
                        >
                          <span 
                            style={{
                              position: 'absolute',
                              left: '0.5rem',
                              top: '0.6rem',
                              width: '6px',
                              height: '6px',
                              backgroundColor: 'var(--brand-alpha-strong)',
                              borderRadius: '50%'
                            }}
                          />
                          {bullet.replace(/^[•\s]+/, '')}
                        </Text>
                      ))}
                    </Flex>
                  )}

                  {section.description2 && section.description2.map((desc, i) => (
                    <Text 
                      key={i} 
                      variant="body-default-l"
                      onBackground="neutral-weak"
                      className={styles.description}
                      style={{ 
                        opacity: desc === '' ? 0 : 1
                      }}
                    >
                      {desc}
                    </Text>
                  ))}

                  {section.bullets2 && section.bullets2.length > 0 && (
                    <Flex 
                      as="ul" 
                      direction="column" 
                      gap="16" 
                      style={{ 
                        maxWidth: '700px', 
                        margin: '2rem auto',
                        listStyleType: 'none',
                        paddingLeft: '0'
                      }}
                    >
                      {section.bullets2.map((bullet, i) => (
                        <Text 
                          as="li" 
                          variant="body-default-l" 
                          key={i}
                          style={{
                            fontSize: '1.125rem',
                            lineHeight: '1.75',
                            position: 'relative',
                            paddingLeft: '2rem',
                            display: 'flex'
                          }}
                        >
                          <span 
                            style={{
                              position: 'absolute',
                              left: '0.5rem',
                              top: '0.6rem',
                              width: '6px',
                              height: '6px',
                              backgroundColor: 'var(--brand-alpha-strong)',
                              borderRadius: '50%'
                            }}
                          />
                          {bullet.replace(/^[•\s]+/, '')}
                        </Text>
                      ))}
                    </Flex>
                  )}

                  {section.extraParagraph && section.extraParagraph.map((para, i) => (
                    <Text 
                      key={`extra-${i}`} 
                      variant="body-default-l"
                      onBackground="neutral-weak"
                      style={{ 
                        textAlign: 'center', 
                        fontSize: i === 0 ? '1.25rem' : '1.125rem',
                        fontWeight: i === 0 ? '600' : '400',
                        lineHeight: '1.75',
                        marginTop: i === 0 ? '2rem' : '0.5rem'
                      }}
                    >
                      {para}
                    </Text>
                  ))}
                </Flex>
              </Grid>
            );
          })}
        </Flex>
      </Flex>

      {/* Footer */}
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
