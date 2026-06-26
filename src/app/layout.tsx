import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";

const montserrat = localFont({
	src: "../assets/fonts/Montserrat-Regular.ttf",
	variable: "--font-montserrat",
});
const agustina = localFont({
	src: "../assets/fonts/Agustina.woff",
	variable: "--font-agustina",
});

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
			<body className={`${montserrat.variable} ${agustina.variable}`}>
				{children}
			</body>
		</html>
	);
}
