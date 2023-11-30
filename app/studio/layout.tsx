import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Sanity Studio',
  description: "My Sanity Studio",
}
export default function StudioLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="absolute w-full z-50 h-full">
				{children}
		</section>
	);
}
