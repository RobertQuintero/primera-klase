import { getWorksData } from "@/sanity/utils/sanity-work";
import React from "react";
import { WorksList } from "./components/workList";

export const revalidate = 1;

export default async function Works() {

  const works = await getWorksData();
  console.log(works);

  return (
    <React.Fragment>
    <WorksList works={works} />
    </React.Fragment>
  );
}
