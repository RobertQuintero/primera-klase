export default function InstructorLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="w-full h-full mx-auto max-w-7xl px-4 sm:px-8 py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32  overflow-hidden ">
				{children}
		</section>
	);
}
