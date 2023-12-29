import { getTalentPage } from "@/sanity/utils/sanity-talents-instructors";
import React from "react";
import { TalentSlug } from "./talentSlug";


type Props = {
  params: { slug: string };
};


export default async function Page({params}:Props) {
  const { slug } = params;
  const talent = await getTalentPage(slug);



    return (
        <React.Fragment>
        <TalentSlug talent={talent} params={params} />
        </React.Fragment>
    );

}