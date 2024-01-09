import { getEventsData } from "@/sanity/utils/sanity-events";
import React from "react"
import { EventsList } from "./eventsList";
import { EventLatest } from "./eventLatest";

export const revalidate = 1;

export default async function Events() {

	const events = await getEventsData();
	return (
		<React.Fragment>
		 <EventLatest eventLatest={events[0]} />
          <EventsList event={events} />
		</React.Fragment>
	);
}
