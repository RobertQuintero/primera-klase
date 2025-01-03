//get site map from server cms sanity
import { siteConfig } from "@/config/site";
import { MetadataRoute } from "next";


export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/studio',

    },
      sitemap: siteConfig.url + "/sitemap.xml",
      host: siteConfig.url,
  };
}