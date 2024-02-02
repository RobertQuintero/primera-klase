
import { getWorkPage } from "@/sanity/utils/sanity-work";
import React from "react";
import { WorkSlug } from "./workSlug";


export const revalidate = 1;

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {

  const slug = params.slug;
  const work = await getWorkPage(slug);

  return (
    <React.Fragment>
      <WorkSlug work={work} params={params} />
    </React.Fragment>
  );
}
