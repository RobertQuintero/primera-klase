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
