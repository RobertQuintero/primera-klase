import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteConfig.navItems[5].label,
  description: siteConfig.navItems[5].description,
};
export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=" w-full h-full px-4 sm:px-8 py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32 overflow-hidden">
      {children}
    </section>
  );
}
