import { siteConfig } from "@/config/site";
import { getAboutData, getServicesData } from "@/sanity/utils/sanity-about";
import { getEventsData } from "@/sanity/utils/sanity-events";
import { getInstructorsData, getTalentsData} from "@/sanity/utils/sanity-talents-instructors";
import { getWorksData } from "@/sanity/utils/sanity-work";
import { MetadataRoute } from "next";


export default async function sitemap( ): Promise<MetadataRoute.Sitemap> {


    const works = await getWorksData();
    const instructors = await getInstructorsData();
    const about = await getAboutData();
    const services = await getServicesData();
    const event = await getEventsData();
    const talents = await getTalentsData();
    // const talentsMale = await getTalentsMaleData();
    // const talentFemale = await getTalentsFemaleData();

    const workPage = works.map((work) => {
        return {
            url: `${siteConfig.url}/${work.slug}`,
            lastModified: new Date(work._updatedAt).toISOString(),
            changeFrequency: "weekly",
            priority: 0.8,
        };
    });

    const talentPage = talents.map((talent) => {
        return {
            url: `${siteConfig.url}/talents/${talent.slug}`,
            lastModified: new Date(talent._updatedAt).toISOString(),
            changeFrequency: "monthly",
            priority: 1,
        };
    });

    const instructorPage = instructors.map((instructor) => {
        return {
            url: `${siteConfig.url}/instructors/`,
            lastModified: new Date(instructor._updatedAt).toISOString(),
            changeFrequency: "monthly",
            priority: 0.8,
        };
    });

    const aboutPage = {
            url: `${siteConfig.url}/about`,
            lastModified: new Date(about._updatedAt).toISOString(),
            changeFrequency: "monthly",
            priority: 0.5,
        };

    const servicesPage = services.map((services) => {
        return {
            url: `${siteConfig.url}/about#services`,
            lastModified: new Date(services._updatedAt).toISOString(),
            changeFrequency: "monthly",
            priority: 0.8,
        };
    });

    const eventPage = event.map((event) => {
        return {
            url: `${siteConfig.url}/events`,
            lastModified: new Date(event._updatedAt).toISOString(),
            changeFrequency: "weekly",
            priority: 0.8,
        };
    });


    return [ workPage, ...talentPage, ...instructorPage, aboutPage, ...servicesPage, ...eventPage ] as MetadataRoute.Sitemap;
}