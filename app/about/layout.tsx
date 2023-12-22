export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="w-full h-full  px-4 sm:px-8  lg:mx-auto overflow-hidden ">
				{children}
		</section>
	);
}
