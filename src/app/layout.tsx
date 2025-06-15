import './globals.css';
import SmoothScrolling from '@/components/smooth-scrolling';
import { Open_Sans } from 'next/font/google';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		template: 'Chamara Wijepala | %s',
		default: 'Chamara Wijepala',
	},
	description:
		'Fullstack developer portfolio, React, Node.js, Express.js and PostgreSQL',
	icons: {
		icon: '/favicon.svg',
	},
};

const openSans = Open_Sans({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${openSans.className} bg-primary-900 text-secondary-100 font-extrabold uppercase`}
			>
				<SmoothScrolling>{children}</SmoothScrolling>
			</body>
		</html>
	);
}
