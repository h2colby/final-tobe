"use client";

import { useTransition } from "react";
import { Flex } from "@/once-ui/components";
import { ToggleButton } from "@/once-ui/components/ToggleButton";
import styles from '@/components/Header.module.scss';

export const Header = () => {
    const [isPending] = useTransition();

    // Updated navigation items:
    const navItems = [
        { icon: "home", href: "/", label: "Home" },
        { icon: "lightning", href: "/technology", label: "Technology" },
        { icon: "sparkles", href: "/h2safety", label: "H2Safety.AI" },
        { icon: "briefcase", href: "/careers", label: "Careers" },
        { icon: "person", href: "/about-us", label: "About Us" },
    ];

    return (
        <>
            <Flex
                className={styles.mask}
                position="fixed" zIndex={9}
                fillWidth minHeight="80" justifyContent="center">
            </Flex>
            <Flex style={{height: 'fit-content'}}
                className={styles.position}
                as="header"
                zIndex={9}
                fillWidth padding="8"
                justifyContent="center">

                {/* Top Left: Removed location */}
                <Flex
                    paddingLeft="12" fillWidth
                    alignItems="center"
                    textVariant="body-default-s">
                    {/* Nothing here now */}
                </Flex>

                {/* Center Navigation */}
                <Flex fillWidth justifyContent="center">
                    <Flex
                        background="surface"
                        border="neutral-medium"
                        borderStyle="solid-1"
                        radius="m-4"
                        shadow="l"
                        padding="4"
                        justifyContent="center"
                    >
                        <Flex
                            gap="4"
                            textVariant="body-default-s"
                        >
                            {navItems.map((item, index) => (
                                <ToggleButton
                                    key={index}
                                    prefixIcon={item.icon}
                                    href={item.href}
                                    selected={false}
                                    className={isPending ? 'pointer-events-none opacity-60' : ''}
                                >
                                    <Flex paddingX="2" hide="s">{item.label}</Flex>
                                </ToggleButton>
                            ))}
                        </Flex>
                    </Flex>
                </Flex>

                {/* Top Right: Removed Clock */}
                <Flex fillWidth justifyContent="flex-end" alignItems="center">
                    <Flex
                        paddingRight="12"
                        justifyContent="flex-end" alignItems="center"
                        textVariant="body-default-s"
                        gap="20">
                        {/* Nothing here now */}
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}