import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: {
		template: 'Chamara Wijepala | %s',
		default: 'Chamara Wijepala',
	},
	description: 'Fullstack developer portfolio, PERN stack + Next.js',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
