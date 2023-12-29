import { getTalentsData } from "@/sanity/utils/sanity-talents-instructors";
import { TalentsList } from "./components.tsx/talentsList";


export const revalidate = 0;


export default async function Talents() {
  const Talents = await getTalentsData();

	console.log(Talents)

  return <TalentsList talents={Talents} />;
}
