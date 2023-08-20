import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ross Reicks",
	description: "Software Engineer 👨‍💻 | Tech Enthusiast 📊 | Father 👨‍👧‍👦",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://rossreicks.com",
		siteName: "Ross Reicks",
		title: "Ross Reicks",
		description: "Software Engineer 👨‍💻 | Tech Enthusiast 📊 | Father 👨‍👧‍👦",
		images: [
			{
				url: "https://rossreicks.com/images/rossreicks.jpg",
				width: 800,
				height: 600,
				alt: "Ross Reicks",
			},
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Script src="https://code.iconify.design/1/1.0.4/iconify.min.js"></Script>
			<body className={montserrat.className}>{children}</body>
		</html>
	);
}
