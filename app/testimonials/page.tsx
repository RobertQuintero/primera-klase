
import { getSuccessStoriesData, getTestimonialsData } from "@/sanity/utils/sanity-testimonial-successStory";
import React from "react";
import { TestimonialsList } from "./components/testimonialsList";
import SuccessStories from "@/sanity/schemas/successStories";
import { SuccessStoriesList } from "./components/successStoriesList";

export default async function Testimonials() {
	const testimonials = await getTestimonialsData();
	const successStory = await getSuccessStoriesData();

	return (
		<React.Fragment>
		<div className="mx-auto max-w-7xl">
			<SuccessStoriesList successStories={successStory} />
			<TestimonialsList testimonialsList={testimonials} />
		</div>
		</React.Fragment>
	);
}

