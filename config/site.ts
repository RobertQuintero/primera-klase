import { create } from "domain";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "sample site name",
	description: "Robert Portfolio",
	url: "",
	image:"/siteLogo.png",
	address: "Primera Klase, 1234, Manila, Philippines",
	keywords: ["Modeling Agency", "Filipino Model", "Philippines Modeling Agency", "Modeling Training Agency"],
	lang: "en-US",
	locale: "en_us",
	email: "info@primeklase.com",
	becomePrimeKlase: "becomeprimera@primeklase.com",
	google: "UA-XXXXXXXX-X",
	bing: "UA-XXXXXXXX-X",
	yandex: "UA-XXXXXXXX-X",
	yahoo: "UA-XXXXXXXX-X",
	createdByUrl: "https://robertquintero.me",
	createByName: " Robert Quintero",
	navItems: [
	{
		label: "Work",
		href: "/",
		description: "Work page",
	},
	{
		label: "Talents",
		href: "/talents",
		description: "Talents page",
	},
	{
		label: "Instructors",
		href: "/instructors",
		description: "Talents page",
	},
    {
      	label: "About",
      	href: "/about",
		description: "About page",
    },
	{
		label: "Events",
		href: "/events",
		description: "Events page",
	},
	// {
	// 	label: "Schedules",
	// 	href: "/schedules",
	// 	description: "Schedules page",
	// },
	{
		label: "Testimonials",
		href: "/testimonials",
		description: "Testimonials page",
	},
	{
		label: "Contact Us",
		href: "/contact",
		description: "Contact Us page",
	}
	],
	navMenuItems: [
	{
		label: "Work",
		href: "/",
		description: "Work page",
	},
	{
		label: "Talents",
		href: "/talents",
		description: "Talents page",
	},
	{
		label: "Instructors",
		href: "/instructors",
		description: "Talents page",
	},
    {
      	label: "About",
      	href: "/about",
		description: "About page",
    },
	{
		label: "Events",
		href: "/events",
		description: "Events page",
	},
	{
		label: "Schedules",
		href: "/schedules",
		description: "Schedules page",
	},
	{
		label: "Testimonials",
		href: "/testimonials",
		description: "Testimonials page",
	},
	{
		label: "Contact Us",
		href: "/contact",
		description: "Contact Us page",
	}
	],
	links: {
		twitter: "https://twitter.com/getnextui",
		facebook: "https://www.facebook.com/getnextui",
		instagram: "https://www.instagram.com/getnextui",
		linkedin: "https://www.linkedin.com/company/getnextui",
		pinterest: "https://www.pinterest.com/getnextui",
	},
	recruiter: {
		person1: "robert.t.quintero.06@gmail.com",
		person2: "robert.t.quintero.06@gmail.com",
		person3: "robert.t.quintero.06@gmail.com",
	},

};
