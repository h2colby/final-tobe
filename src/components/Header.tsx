"use client";

import { useTransition } from "react";
import { Flex } from "@/once-ui/components";
import { ToggleButton } from "@/once-ui/components/ToggleButton";
import styles from '@/components/Header.module.scss';

export const Header = () => {
    const [isPending] = useTransition();

    const navItems = [
        { icon: "home", href: "/", label: "Home" },
        { icon: "lightning", href: "/technology", label: "Technology" },
        { icon: "sparkles", href: "/h2safety", label: "H2Safety.AI" },
        { icon: "briefcase", href: "/careers", label: "Careers" },
        { icon: "person", href: "/about-us", label: "About Us" },
    ];

    return (
        <Flex 
            className={styles.position}
            as="header"
            zIndex={9}
            fillWidth 
            padding={{ base: "4", m: "8" }}
        >
            <Flex 
                className={styles.mask}
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
            />
            
            {/* Center Navigation */}
            <Flex fillWidth justifyContent="center" position="relative">
                <Flex
                    background="surface"
                    border="neutral-medium"
                    borderStyle="solid-1"
                    radius="m-4"
                    shadow="l"
                    padding={{ base: "2", m: "4" }}
                    justifyContent="center"
                    width={{ base: "100%", m: "auto" }}
                    maxWidth="100vw"
                    overflow="auto"
                >
                    <Flex
                        gap={{ base: "2", m: "4" }}  // Responsive gap
                        textVariant="body-default-s"
                        width="100%"
                        justifyContent={{ base: "space-between", m: "center" }}  // Space between on mobile
                    >
                        {navItems.map((item, index) => (
                            <ToggleButton
                                key={index}
                                prefixIcon={item.icon}
                                href={item.href}
                                selected={false}
                                className={`${isPending ? 'pointer-events-none opacity-60' : ''} ${styles.navButton}`}
                            >
                                <Flex 
                                    paddingX={{ base: "1", m: "2" }}  // Responsive padding
                                    hide={{ base: false, m: "s" }}  // Show text on mobile
                                    fontSize={{ base: "xs", m: "sm" }}  // Smaller font on mobile
                                >
                                    {item.label}
                                </Flex>
                            </ToggleButton>
                        ))}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}