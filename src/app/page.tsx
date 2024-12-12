"use client";

import React, { useState } from 'react';
import { Heading, Text, Flex, Button, Grid, InlineCode, Logo, LetterFx } from '@/once-ui/components';
import { Icon } from '@/once-ui/components/Icon';
import { Arrow } from '@/components/Arrow';
import Link from 'next/link';


// Move links data outside the component to avoid re-creation on each render
const NAVIGATION_LINKS = [
	{
		href: "/technology",
		title: "Technology",
		description: "Revolutionize Hydrogen Production",
	},
	{
		href: "/h2safety",
		title: "H2Safety.AI",
		description: "Navigate Hydrogen Standards with AI.",
	},
	{
		href: "/careers",
		title: "Careers",
		description: "Join the Hydrogen Revolution.",
	},
	{
		href: "/about-us",
		title: "About Us",
		description: "Meet the Team & Vision.",
	},
];

export default function Home() {
	// Initialize state with null/empty values to avoid hydration issues
	const [isContactOpen, setIsContactOpen] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});
	const [applyStatus, setApplyStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
	const [errorMessage, setErrorMessage] = useState('');

	// Combine form handling into a single function
	const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const openContactForm = () => {
		setFormData({ name: '', email: '', message: '' });
		setApplyStatus('idle');
		setIsContactOpen(true);
	};

	const closeContactForm = () => {
		setIsContactOpen(false);
	};

	const submitContact = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!formData.name || !formData.email || !formData.message) return;

		setApplyStatus('loading');
		try {
			const res = await fetch('/api/waitlist', {
				method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(formData)
			});
			const data = await res.json();

			if (res.ok) {
				setApplyStatus('success');
			} else {
				setApplyStatus('error');
				setErrorMessage(data.error || 'Something went wrong. Please try again.');
			}
		} catch (err) {
			console.error('Fetch error:', err);
			setApplyStatus('error');
			setErrorMessage('Network error. Please try again.');
		}
	};

	return (
		<Flex
			direction="column"
			alignItems="center"
			fillWidth
			flex={1}
			paddingTop="l"
			paddingX="l"
			style={{color: 'white', minHeight: '100vh' }}
		>
			{isContactOpen && (
				<Flex
					style={{
						position: 'fixed',
						inset: '0',
						background: 'rgba(0,0,0,0.5)',
						zIndex: 9999
					}}
					alignItems="center"
					justifyContent="center"
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
								<Heading variant="heading-strong-m">Thanks for reaching out!</Heading>
								<Text onBackground="neutral-weak">We'll get back to you soon.</Text>
								<Button variant="tertiary" onClick={closeContactForm}>Close</Button>
							</Flex>
						) : (
							<form onSubmit={submitContact}>
								<Heading variant="heading-strong-m" style={{ marginBottom: '1.5rem' }}>
									Contact Us
								</Heading>
								{applyStatus === 'error' && (
									<Text variant="body-default-s" style={{ color: 'red', marginBottom: '1rem' }}>
										{errorMessage || 'Something went wrong. Please try again.'}
									</Text>
								)}
								<input
									type="text"
									name="name"
									placeholder="Your Name"
									value={formData.name}
									onChange={handleFormChange}
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
								<input
									type="email"
									name="email"
									placeholder="Your Email"
									value={formData.email}
									onChange={handleFormChange}
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
								<textarea
									name="message"
									placeholder="What made you click this button?"
									value={formData.message}
									onChange={handleFormChange}
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
									<Button variant="tertiary" onClick={closeContactForm} type="button">Cancel</Button>
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
				overflow="hidden"
				fillWidth
				minHeight="0"
				maxWidth={68}
				direction="column"
				alignItems="center"
				flex={1}
			>
				<Flex
					as="main"
					direction="column"
					justifyContent="center"
					fillWidth fillHeight
					padding="l"
					gap="l"
				>
					<Flex
						mobileDirection="column"
						fillWidth
						gap="24"
					>
						<Flex
							position="relative"
							flex={2}
							paddingTop="80" // Adjusted from 56 to 80 to move the logo lower
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
							marginBottom="64"
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
								40% more efficient electrolysis.
								<span className="brand-on-background-medium"> Costs 75% less.</span>
							</InlineCode>
							<Heading
								wrap="balance"
								variant="display-strong-s"
							>
								<span className="font-code">
									<LetterFx trigger="instant">
										Developing a new generation of green hydrogen technology.
									</LetterFx>
								</span>
							</Heading>
							<Flex gap="m" alignItems="center">
								<Button
									id="readDocs"
									href="/whitepapers"
									variant="secondary"
								>
									<Flex alignItems="center" gap="8">
										Read the Whitepaper
										<Arrow trigger="#readDocs" />
									</Flex>
								</Button>
								<Button
									variant="secondary"
									onClick={openContactForm}
									size="l"
								>
									Contact Us
								</Button>
							</Flex>
						</Flex>
					</Flex>
					<Grid
						radius="l"
						border="neutral-medium"
						borderStyle="solid-1"
						columns="repeat(4, 1fr)"
						tabletColumns="1col"
						mobileColumns="1col"
						fillWidth
						style={{
							background: 'rgba(31, 41, 55, 0.8)',
							backdropFilter: 'blur(16px)',
							boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
							border: '1px solid rgba(255, 255, 255, 0.18)',
							borderRadius: '10px'
						}}
					>
						{NAVIGATION_LINKS.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								style={{ 
									padding: 'var(--responsive-space-l)',
									transition: 'all 0.3s ease',
									borderRadius: '8px',
									'&:hover': {
										background: 'rgba(255, 255, 255, 0.1)',
										transform: 'translateY(-2px)',
										boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)'
									}
								}}
							>
								<Flex
									fillWidth
									paddingY="8"
									gap="8"
									direction="column"
								>
									<Flex fillWidth gap="12" alignItems="center">
										<Text variant="body-strong-m" onBackground="neutral-strong">
											{link.title}
										</Text>
										<Icon 
											name="arrowUpRight"
											size="s"
										/>
									</Flex>
									<Text variant="body-default-s" onBackground="neutral-weak">
										{link.description}
									</Text>
								</Flex>
							</Link>
						))}
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
