import React from "react";
import { ContactForm } from "./components/contactForm";
import { AddressSocialMediaLinks } from "./components/addressSocialMediaLinks";
import { getContacts } from "@/sanity/utils/sanity-contact";



export default async function Contact() {

	const contacts = await getContacts();

	return (
		<React.Fragment >
			<AddressSocialMediaLinks contacts={contacts} />
			<ContactForm />
		</React.Fragment>
	);
}
