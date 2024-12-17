"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Flex, 
  Heading, 
  Text, 
  InlineCode, 
  Logo, 
  Grid,
  Button
} from '@/once-ui/components';
import { Header } from '@/components/Header';
import styles from '../shared.module.css';
import { Arrow } from '@/components/Arrow';
import { FaBolt, FaLeaf, FaDollarSign, FaTools, FaShieldAlt, 
  FaHourglass, FaExpandArrowsAlt, FaGlobe, 
  FaLevelUpAlt, FaThermometerEmpty, FaBatteryFull, 
  FaChartLine, FaTimesCircle, FaFire, FaGem, 
  FaStopwatch, FaThumbsUp, FaLightbulb, 
  FaWaveSquare, FaBan, FaCheckCircle, FaTrophy 
} from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa6';

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-');
}

// Add type definition for bullet points
interface Bullet {
  icon: React.ReactElement;
  text: string;
}

type SectionBullet = Bullet | string;

interface ExtraParagraphItem {
  icon?: React.ReactElement;
  text: string;
}

interface Section {
  title: string;
  subtitle?: string;
  description: string[];
  bullets?: SectionBullet[];
  description2?: string[];
  bullets2?: SectionBullet[];
  extraParagraph?: (string | ExtraParagraphItem)[];
  icon?: React.ReactElement;
}

export default function Technology() {
  const sections: Section[] = [
    {
      title: "A New Method of Electrolysis",
      subtitle: "Transforming Green Hydrogen Production",
      description: [
        "Think of what LEDs did to lighting. Our breakthrough technology delivers >90% wall-to-plug efficiency—nearly double that of outdated electrolysis systems—eliminating waste heat, reducing costs, and enabling rapid hydrogen production.",
        "",
        "Key Benefits:"
      ],
      bullets: [
        {
          icon: <FaBolt className={styles.bulletIcon} />,
          text: "Instant Startup: Hydrogen production begins in seconds, ideal for dynamic and renewable energy systems."
        },
        {
          icon: <FaDollarSign className={styles.bulletIcon} />,
          text: "Cost-Effective: Lower CAPEX and OPEX make green hydrogen competitive with fossil fuels."
        },
        {
          icon: <FaLeaf className={styles.bulletIcon} />,
          text: "Sustainable: Waste heat and exotic materials are eliminated, ensuring environmental and economic benefits."
        }
      ],
      extraParagraph: [
        {
          icon: <FaRocket className={styles.bulletIcon} />,
          text: "Accelerate:",
        },
        "We finally make green hydrogen make sense—no waste heat, no sky-high costs, and no delays. Instant production, unmatched efficiency, and real affordability mean clean hydrogen is ready for industries and energy systems everywhere."
      ]
    },
    {
      title: "Membrane-Free Technology",
      subtitle: "Simplifying Hydrogen Production",
      icon: <FaTools className={styles.titleIcon} />,
      description: [
        "Tobe Energy's membrane-free electrolyzers eliminate the fragile, costly components of traditional systems. By using widely available materials like 304 stainless steel, we deliver safer, more durable, and cost-effective solutions for hydrogen production.",
        "",
        "Why It Matters:"
      ],
      bullets: [
        {
          icon: <FaShieldAlt className={styles.bulletIcon} />,
          text: "No Hazardous Chemicals: Safer and easier operations without caustic electrolytes."
        },
        {
          icon: <FaHourglass className={styles.bulletIcon} />,
          text: "Longer Lifespan: Removing membranes reduces failure points and maintenance costs."
        },
        {
          icon: <FaExpandArrowsAlt className={styles.bulletIcon} />,
          text: "Scalable Design: Modular systems scale seamlessly from small projects (5 kg/day) to industrial applications (2,500+ kg/day)."
        }
      ],
      extraParagraph: [
        {
          icon: <FaGlobe className={styles.bulletIcon} />,
          text: "The Impact:",
        },
        "Lower costs, simplified maintenance, and broader accessibility make clean hydrogen production practical for all markets."
      ]
    },
    {
      title: "Powering the Future with Advanced Electrolysis",
      subtitle: "Advanced Resonant LLC Technology",
      icon: <FaBolt className={styles.titleIcon} />,
      description: [
        "Tobe Energy's breakthrough integrates cutting-edge resonant LLC power conversion technology with innovative electrolysis design to deliver unmatched efficiency and performance. By seamlessly incorporating the electrolysis cell into the resonant circuit, our system amplifies energy transfer, eliminates waste heat, and redefines hydrogen production.",
        "",
        "Key Advantages:"
      ],
      bullets: [
        {
          icon: <FaLevelUpAlt className={styles.bulletIcon} />,
          text: "Precision Voltage Amplification: Advanced LC tuning maximizes energy efficiency."
        },
        {
          icon: <FaThermometerEmpty className={styles.bulletIcon} />,
          text: "No Waste Heat: Operating at room temperature (<30°C) eliminates costly cooling systems."
        },
        {
          icon: <FaGem className={styles.bulletIcon} />,
          text: "No Rare Catalysts: Our design avoids expensive, rare materials, reducing costs and complexity."
        },
        {
          icon: <FaBatteryFull className={styles.bulletIcon} />,
          text: "Battery-Level Efficiency: Produces hydrogen as efficiently as modern batteries store energy."
        },
        {
          icon: <FaCheckCircle className={styles.bulletIcon} />,
          text: "Proven Reliability: Thousands of hours of real-world testing confirm >90% wall-to-plug efficiency."
        }
      ],
      extraParagraph: [
        {
          icon: <FaChartLine className={styles.bulletIcon} />,
          text: "Why It Matters:",
        },
        "Tobe Energy's technology is more than an incremental improvement—it's a fundamental shift. We make hydrogen production cleaner, more efficient, and economically viable, unlocking its potential for both energy generation and storage at any scale."
      ]
    },
    {
      title: "Up to 45% More Efficient. Up to 75% Cheaper.",
      subtitle: "In a comparative analysis of published prices and metrics for competing methods",
      description: [
        "Traditional electrolyzers have struggled to scale due to excessive costs, inefficiencies, and reliance on exotic materials. Tobe Energy's reimagined electrolysis overcomes these barriers with unmatched performance and simplicity.",
        "",
        "Challenges of Traditional Systems:"
      ],
      bullets: [
        {
          icon: <FaFire className={styles.bulletIcon} />,
          text: "Waste Heat: Requires expensive and complex cooling systems."
        },
        {
          icon: <FaGem className={styles.bulletIcon} />,
          text: "Exotic Materials: High temperatures and pressures demand rare, costly components."
        },
        {
          icon: <FaHourglass className={styles.bulletIcon} />,
          text: "Slow Startup: Long delays and hazardous chemicals limit flexibility and safety."
        }
      ],
      description2: [
        "",
        "The Tobe Energy Advantage:"
      ],
      bullets2: [
        {
          icon: <FaThermometerEmpty className={styles.bulletIcon} />,
          text: "No Waste Heat: >90% efficiency at room temperature eliminates cooling systems."
        },
        {
          icon: <FaTools className={styles.bulletIcon} />,
          text: "Standard Materials: Built with cost-effective, widely available 304 stainless steel."
        },
        {
          icon: <FaBolt className={styles.bulletIcon} />,
          text: "Instant Startup: Hydrogen production begins immediately without hazardous electrolytes."
        }
      ],
      extraParagraph: [
        "By solving these challenges, Tobe Energy makes green hydrogen practical, economical, and scalable for widespread adoption across industries."
      ]
    },
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
                style={{
                  opacity: 1,
                  transform: 'translateY(0)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease'
                }}
              >
                <span className="font-code">
                  Redefining Hydrogen Production
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
            className={`${styles.card} introduction-card`}
            style={{
              background: 'linear-gradient(135deg, #111827, #1F2937)',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
              padding: '2rem'
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
              <Heading 
                variant="display-strong-s"
                className={styles.title}
                style={{
                  letterSpacing: '1px',
                  textAlign: 'center'
                }}
              >
                No, We Don't Fit the Mold
              </Heading>
              
              <div 
                style={{
                  borderTop: '2px solid #5BE7A9',
                  width: '50px',
                  margin: '0 auto 1rem auto'
                }}
              />
              
              <Text 
                variant="body-default-l"
                onBackground="neutral-weak"
                className={styles.description}
                style={{ 
                  fontSize: '1.25rem',
                  lineHeight: '1.8',
                  fontWeight: 400,
                  textAlign: 'center'
                }}
              >
                No, we don't fit neatly into the traditional categories like AEM, PEM, or SOEC. What we're building is something entirely new—a paradigm shift in hydrogen production. <span style={{ color: '#5BE7A9', fontWeight: 500 }}>Think of it as what LEDs did to traditional lighting: a completely reimagined approach</span> with transformative potential.
              </Text>
              
              <Flex gap="m" alignItems="center" justifyContent="center">
                <Button
                  id="readDocs"
                  href="/whitepapers"
                  variant="secondary"
                  size="l"
                  className="cta-button"
                  style={{
                    background: 'linear-gradient(90deg, #5BE7A9, #2DD4BF)',
                    color: '#111827',
                    fontWeight: 'bold',
                    padding: '0.8rem 1.5rem',
                    border: 'none',
                    borderRadius: '25px',
                    textTransform: 'uppercase',
                    transition: 'all 0.3s ease-in-out'
                  }}
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
          <div className={styles.gridContainer}>
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
                    
                    <div className={styles.divider} />
                    
                    {section.subtitle && (
                      <Text
                        variant="heading-strong-l"
                        onBackground="neutral-weak"
                        className={styles.subtitle}
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
                        gap="0.5rem" 
                        className={styles.bulletList}
                      >
                        {section.bullets.map((bullet, i) => (
                          <Flex 
                            key={i} 
                            as="li" 
                            alignItems="center" 
                            gap="0.5rem"
                            className={styles.bulletItem}
                          >
                            <span className={styles.bulletIcon}>
                              {typeof bullet === 'object' && bullet.icon}
                            </span>
                            <Text 
                              variant="body-default-l" 
                              onBackground="neutral-weak"
                            >
                              {typeof bullet === 'object' ? bullet.text : bullet}
                            </Text>
                          </Flex>
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
                        className={styles.bulletList}
                      >
                        {section.bullets2.map((bullet, i) => (
                          <Text 
                            as="li" 
                            variant="body-default-l" 
                            key={i}
                            className={styles.bulletItem}
                          >
                            <span className={styles.bulletIcon}>
                              {typeof bullet === 'object' && bullet.icon}
                            </span>
                            {typeof bullet === 'object' ? bullet.text : bullet}
                          </Text>
                        ))}
                      </Flex>
                    )}

                    {section.extraParagraph && section.extraParagraph.map((para, i) => (
                      <Text 
                        key={`extra-${i}`} 
                        variant="body-default-l"
                        onBackground="neutral-weak"
                        className={typeof para === 'object' ? styles.extraParagraph : styles.description}
                        style={{ 
                          textAlign: 'center', 
                          fontSize: i === 0 ? '1.25rem' : '1.125rem',
                          fontWeight: i === 0 ? '600' : '400',
                          lineHeight: '1.75',
                          marginTop: i === 0 ? '2rem' : '0.5rem'
                        }}
                      >
                        {typeof para === 'object' ? (
                          <>
                            {para.icon}
                            {para.text}
                          </>
                        ) : para}
                      </Text>
                    ))}
                  </Flex>
                </Grid>
              );
            })}
          </div>
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
        alignItems="center"
        style={{ 
          borderTop: '1px solid #374151',
          zIndex: 20,
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px',
          background: 'rgba(17, 24, 39, 0.95)',
          backdropFilter: 'blur(8px)',
          '@media (max-width: 640px)': {
            flexDirection: 'column',
            height: 'auto',
            padding: '1rem',
            gap: '0.5rem'
          }
        }}
      >
        <Text 
          variant="body-default-s" 
          onBackground="neutral-weak"
          style={{
            '@media (max-width: 640px)': {
              textAlign: 'center',
              marginBottom: '0.5rem'
            }
          }}
        >
          © 2024 Tobe Energy, <Link href="https://github.com/h2colby">MIT License</Link>
        </Text>
        <Flex 
          gap="12" 
          alignItems="center" 
          justifyContent="center"
          style={{
            '@media (max-width: 640px)': {
              width: '100%'
            }
          }}
        >
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
