import { create } from "domain";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {


	url: "",
	image:"/siteLogo.png",
	keywords: ["Modeling Agency", "Filipino Model", "Philippines Modeling Agency", "Modeling Training Agency"],
	lang: "en-US",
	locale: "en_us",

	becomePrimeKlase: "becomeprimera@primeklase.com",
	google: "UA-XXXXXXXX-X",
	bing: "UA-XXXXXXXX-X",
	yandex: "UA-XXXXXXXX-X",
	yahoo: "UA-XXXXXXXX-X",

	// Company details
	name: "sample site name",
	description: "Modeling Agency and training center",
	email: "info@primeklase.com",
	telephone: "+63 999 999 9999",
	mobile: "+63 999 999 9999",
	address: "Primera Klase, 1234, Manila, Philippines",
	// Creator details
	createdByUrl: "https://robertquintero.me",
	createByName: " Robert Quintero",

	navItems: [
	{
		label: "Work",
		href: "/",
		description: "Work page",
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
	// {
	// 	label: "Testimonials",
	// 	href: "/testimonials",
	// 	description: "Testimonials page",
	// },
	{
		label: "Be PrimeKlase",
		href: "/application",
		description: "Testimonials ",
	},
	{
		label: "Contact Us",
		href: "/contact",
		description: "Contact Us page",
	}
	],
	navItemsTalents: [
	{
		label: "Talents",
		href: "/talents",
		description: "Talents page",
	},
	{
		label: "Female",
		href: "/talents/female",
		description: "Female description"
	},
	{
		label: "Male",
		href: "/talents/male",
		description: "Male description"
	},
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
