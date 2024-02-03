
import { siteConfig } from '@/config/site';
import { getTalentPage } from '@/sanity/utils/sanity-talents-instructors';
import type { Metadata, ResolvingMetadata } from 'next';
import React from "react";
type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props, parent:ResolvingMetadata): Promise<Metadata> {

	const talent = await getTalentPage(params.slug);
	const modelPreference = talent.modelingPreferences
      .map((modelPref) => modelPref)
      .join(", ");
	const previousTalent = (await parent).openGraph?.images || [];

	return {
		title: talent.fullName,
		description: talent.gender,
		keywords: modelPreference,
		category: modelPreference,
		publisher: siteConfig.name,
		creator: siteConfig.name,
		// authors:
		openGraph: {
		title: talent.fullName,
		description: modelPreference,
		siteName: siteConfig.name,
		modifiedTime: talent._updatedAt,
		publishedTime: talent._createdAt,
		url: `${siteConfig.url}/talents/${talent.slug}`,
		type: 'article',
		images: [`${siteConfig.url}/talents/${talent.portfolioImages[0].image}`,...previousTalent],
		},
		twitter: {
		title: talent.fullName,
		description: modelPreference,
		images: [`${siteConfig.url}/talents/${talent.portfolioImages[0].image}`,...previousTalent],
		card: 'summary_large_image',
		},
		alternates:{
		canonical: siteConfig.url,
		},
	};

}



export default async function SlugLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	return (
	<React.Fragment>
				{children}
    </React.Fragment>
	);
}