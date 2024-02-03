import RSS from "rss";
import { siteConfig } from "@/config/site";
import { getTalentsData } from "@/sanity/utils/sanity-talents-instructors";

// revalidate every 7 days equivalent to 604800 seconds
export const revalidate = 3600;
export async function GET() {
  const talents = await getTalentsData();

  const feed = new RSS({
    title: siteConfig.name,
    description: siteConfig.description,
    site_url: siteConfig.url,
    feed_url: `${siteConfig.url}/feed.xml`,
    image_url: `${siteConfig.url}/siteLogo.png`,
    copyright: `${new Date().getFullYear()} ${siteConfig.name}`,
    language: "en",
    // Last build time or blog post update time
    pubDate: new Date().toISOString(),
    ttl: 60,
    custom_namespaces: {
      media: `${siteConfig.url}/feed.xml`,
    },
    categories: siteConfig.keywords,
    generator: siteConfig.name,
    docs: `${siteConfig.url}/sitemap.xml`,
    webMaster: siteConfig.name,
    managingEditor: siteConfig.name,
  });

  talents.forEach((talent) => {
    const modelPreference = talent.modelingPreferences
      .map((modelPref) => modelPref)
      .join(", ");

    feed.item({
      title: talent.fullName,
      description: modelPreference,
      url: `${siteConfig.url}/talent/${talent.slug}`,
      guid: `${siteConfig.url}/talent/${talent.slug}`,
      date: talent._updatedAt,
      author: talent.fullName,
      enclosure: {
        url: talent.portfolioImages[0].image,
        type: "image/jpeg",
      },
    });
  });

  // Add posts to the feed
  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
