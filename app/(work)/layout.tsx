import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: siteConfig.navItems[0].label,
	description: siteConfig.navItems[0].description,
};

export default function WorksLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className=" w-full flex h-full py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32 overflow-hidden">
				{children}
		</section>
	);
}
