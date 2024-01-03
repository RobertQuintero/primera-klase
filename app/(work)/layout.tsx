export default function WorksLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="w-full h-full px-4 sm:px-8 py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32 overflow-hidden">
				{children}
		</section>
	);
}
