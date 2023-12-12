import { getAboutData, getFaqsData, getTeamsData } from "@/sanity/utils/sanity-about";
import React from "react";
import { AboutValues } from "./components/values";
import { AboutServices } from "./components/services";
import { IntroductionMissionHistory } from "./components/introductionMissionhistory";
import { Teams } from "./components/team";
import { AboutTestimonials } from "./components/testimonials";
import { Faqs } from "./components/faqs";

// revalidate every 1sec



export default async function AboutPage() {

	const aboutData = await getAboutData();
	const faqsData = await getFaqsData();
	const teamsData = await getTeamsData();


	console.log(teamsData);
	return (
		<React.Fragment>
			<IntroductionMissionHistory introductionMissionHistory={aboutData} />

			<AboutValues aboutValues={aboutData.values} />

			<AboutServices aboutServices={aboutData.services} />

			<Teams teams={teamsData} />

			<AboutTestimonials aboutTestimonials={aboutData.testimonials} />

			<Faqs faqs={faqsData} />

			</React.Fragment>
	);
}
