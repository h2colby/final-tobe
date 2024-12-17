'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface RevealFxProps {
	children: React.ReactNode;
	speed?: 'fast' | 'medium' | 'slow';
	delay?: number;
	translateY?: number;
}

export const RevealFx = ({
	children,
	speed = 'medium',
	delay = 0,
	translateY = 0,
}: RevealFxProps): JSX.Element => {
	const speeds = {
		fast: 0.3,
		medium: 0.5,
		slow: 0.7,
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: translateY }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: speeds[speed],
				delay,
				ease: 'easeOut',
			}}
		>
			{children}
		</motion.div>
	);
};