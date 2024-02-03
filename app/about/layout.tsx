import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteConfig.navItems[2].label ,
  description: siteConfig.navItems[2].description,
}
export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="w-full h-full  px-4 sm:px-8 mx-auto overflow-hidden ">
				{children}
		</section>
	);
}
