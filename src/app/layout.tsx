import './globals.css';
import { Open_Sans } from 'next/font/google';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		template: 'Chamara Wijepala | %s',
		default: 'Chamara Wijepala',
	},
	description: 'Fullstack developer portfolio, PERN stack + Next.js',
};

const openSans = Open_Sans({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${openSans.className} bg-primary-900`}>{children}</body>
		</html>
	);
}
