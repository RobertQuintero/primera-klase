import {
  getAboutData,
  getFaqsData,
  getServicesData,
  getTeamsData,
} from "@/sanity/utils/sanity-about";
import React from "react";
// import { AboutValues } from "./components/values";
import { AboutServices } from "./components/services";
import { IntroductionMissionHistory } from "./components/introductionMissionHistory";
import { Teams } from "./components/team";
import { AboutTestimonials } from "./components/testimonials";
import { Faqs } from "./components/faqs";
import { AboutSuccessStories } from "./components/successStories";

// revalidate every 1sec
export const revalidate = 1;

export default async function AboutPage() {
  const aboutData = await getAboutData();
  const faqsData = await getFaqsData();
  const teamsData = await getTeamsData();
  const servicesData = await getServicesData();
  return (
    <React.Fragment>
      <IntroductionMissionHistory introductionMissionHistory={aboutData} />
      {/* <AboutValues aboutValues={aboutData.values} /> */}
      <AboutSuccessStories aboutSuccessStories={aboutData.successStories} />
      <AboutTestimonials aboutTestimonials={aboutData.testimonials} />
      <AboutServices aboutServices={servicesData} />
      <Teams teams={teamsData} />

      <Faqs faqs={faqsData} />
    </React.Fragment>
  );
}
