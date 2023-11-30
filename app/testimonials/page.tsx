
import { getTestimonialsData } from "@/sanity/utils/sanity-testimonial-successStory";

export default async function Testimonials() {
	const testimonials = await getTestimonialsData();

	console.log(testimonials);
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			Testimonials
		</section>
	);
}
