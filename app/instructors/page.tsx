import { getInstructorsData } from "@/sanity/utils/sanity-talents-instructors";
import { InstructorsList } from "./components/instructorsList";


export const revalidate = 1;

export default async function Instructors() {

	const Instructors = await getInstructorsData();

	console.log(Instructors);

	return (

			<InstructorsList instructors={Instructors}/>

	);
}
