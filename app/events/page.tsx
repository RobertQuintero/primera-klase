import { getEventsData } from "@/sanity/utils/sanity-events";
import React from "react"
import { EventsList } from "./eventsList";

export default async function Events() {

	const events = await getEventsData();
	console.log(events);
	return (
		<React.Fragment>
          <EventsList event={events} />
		</React.Fragment>
	);
}
