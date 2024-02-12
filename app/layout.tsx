import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
import { Footer } from "@/components/footer";
import { AnimatedFirstPageLoad } from "@/components/animation/animatedFirstPageLoading";
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,

  },
  description: siteConfig.description,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: siteConfig.keywords,
  generator: siteConfig.name,
  verification: {
    google: siteConfig.google,
    yandex: siteConfig.yandex,
    yahoo: siteConfig.yahoo,
    other: {
      me: [siteConfig.email,siteConfig.links.linkedin,siteConfig.links.facebook,siteConfig.links.instagram,siteConfig.links.twitter,siteConfig.links.pinterest],
      bing: siteConfig.bing,
      },
  },

  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    locale: siteConfig.lang,
    siteName: siteConfig.name,
    type: 'website',
    images: [
      {
        url: `${siteConfig.image}`,
      },
    ],
  },
  alternates:{
    canonical: siteConfig.url,
    types: {
          'application/rss+xml': `${siteConfig.url}/feed.xml`,
          //sitemaps
          'application/xml': `${siteConfig.url}/sitemap.xml`,
  }
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "[#0c0802]" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-warning/5 font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <AnimatedFirstPageLoad />
						<Navbar />
						<main >
							{children}
						</main>
						<Footer/>
				</Providers>
			</body>
		</html>
	);
}
