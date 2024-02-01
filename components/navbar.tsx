"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Button,
  Link,
  DropdownItem,
  DropdownMenu,
  Dropdown,
  DropdownTrigger,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import { TwitterIcon, Logo, LinkedInIcon, FacebookIcon, InstagramIcon } from "@/components/icons";

import {
  CalendarDaysIcon,
  ChatBubbleBottomCenterTextIcon,
  ChevronDownIcon,
  EnvelopeIcon,
  InformationCircleIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { AnimatedLogo } from "./animation/animatedLogo";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const icons: { [key: string]: JSX.Element } = {
    // Change the icon color to text-warning if the pathname is equal to the href
    about: (
      <InformationCircleIcon
        className={
          pathname === "/about"
            ? "text-warning w-8 h-8"
            : "text-default-500 w-8 h-8 group-hover:text-warning"
        }
      />
    ),
    events: (
      <SwatchIcon
        className={
          pathname === "/events"
            ? "text-warning w-8 h-8"
            : "text-default-500 w-8 h-8 group-hover:text-warning"
        }
      />
    ),
    // schedules: <CalendarDaysIcon className={pathname === "/schedules" ? "text-warning w-8 h-8" : "text-default-500 w-8 h-8"} />,
    testimonials: (
      <ChatBubbleBottomCenterTextIcon
        className={
          pathname === "/testimonials"
            ? "text-warning w-8 h-8 "
            : "text-default-500 w-8 h-8  group-hover:text-warning"
        }
      />
    ),
    contact: (
      <EnvelopeIcon
        className={
          pathname === "/contact"
            ? "text-warning w-8 h-8"
            : "text-default-500 w-8 h-8 group-hover:text-warning"
        }
      />
    ),
  };

  return (
    <NextUINavbar
      maxWidth="xl"
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.slice(0, 3).map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  pathname === item.href
                    ? "text-warning font-semibold"
                    : " text-default-500 hover:text-warning"
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
            //add limit of 3 item only
          ))}
          <Dropdown classNames={{ trigger: "" }} radius="none" shadow="sm">
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className={clsx(
                    pathname === "/about" ||
                      pathname === "/events" ||
                      pathname === "/schedules" ||
                      pathname === "/testimonials" ||
                      pathname === "/contact"
                      ? "h-fit p-0 bg-transparent data-[hover=true]:bg-transparent text-base text-warning font-semibold"
                      : " h-fit p-0 bg-transparent data-[hover=true]:bg-transparent text-base text-default-500 "
                  )}
                  endContent={<ChevronDownIcon className="w-4 h-4" />}
                  radius="none"
                  variant="light"
                >
                  Resources
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            {/* // change the color of the dropdown if the pathname is equal to the href */}
            <DropdownMenu
              itemClasses={{
                base: "text-default-500  gap-3 !rounded-none group ",
                title: "text-base group-hover:text-warning-500",
                description: "group-hover:text-warning-500",
                // change the color of description if the pathname is equal to the what is active path
              }}
            >
              {siteConfig.navItems.slice(3).map((item) => (
                <DropdownItem
                  key={item.href}
                  description={
                    <p
                      className={pathname === item.href ? "text-warning " : ""}
                    >
                      {item.description}
                    </p>
                  }
                  startContent={icons[item.href.split("/")[1]]}
                  href={item.href}
                >
                  <span
                    className={
                      pathname === item.href ? "text-warning font-semibold" : ""
                    }
                  >
                    {item.label}
                  </span>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </ul>
      </NavbarContent>

      <NavbarBrand as="li" className="gap-3 max-w-fit">
        <NextLink
          className="flex justify-start items-center gap-6 mt-2"
          href="/"
        >
          <AnimatedLogo className="w-10 h-10" hidden="hidden" />
          <AnimatedLogo className="w-9 h-9" hidden2="hidden" />
        </NextLink>
      </NavbarBrand>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link
            isExternal
            href={siteConfig.links.instagram}
            aria-label="instagram"
          >
            <InstagramIcon className="text-default-500 hover:text-warning transition-all" />
          </Link>
          <Link
            isExternal
            href={siteConfig.links.facebook}
            aria-label="facebook"
          >
            <FacebookIcon className="text-default-500 hover:text-warning transition-all" />
          </Link>
          <Link isExternal href={siteConfig.links.twitter} aria-label="twitter">
            <TwitterIcon className="text-default-500 hover:text-warning transition-all" />
          </Link>
          <Link
            isExternal
            href={siteConfig.links.linkedin}
            aria-label="LinkedIn"
            className=""
          >
            <LinkedInIcon className="text-default-500 w-7 hover:text-warning transition-all" />
          </Link>

          <ThemeSwitch className=""/>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
