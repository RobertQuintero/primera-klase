export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
	{
		label: "Home",
		href: "/",
		description: "Home page",
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
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
