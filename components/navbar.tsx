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
import {
  TwitterIcon,
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon,
  FemaleIcon,
  MaleIcon,
} from "@/components/icons";
import {
  ChatBubbleBottomCenterTextIcon,
  ChevronDownIcon,
  EnvelopeIcon,
  InformationCircleIcon,
  PaperAirplaneIcon,
  SparklesIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { AnimatedLogo } from "./animation/animatedLogo";


export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useReducer((current) => !current, false);
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
    application: (
      <PaperAirplaneIcon
        className={
          pathname === "/application"
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
    talents: (
      <SparklesIcon
        className={
          pathname === "/talents"
            ? "text-warning w-8 h-8"
            : "text-default-500 w-8 h-8 group-hover:text-warning"
        }
      />
    ),
    female: (
      <FemaleIcon
        className={
          pathname === "/talents/female"
            ? "text-warning w-9 h-9"
            : "text-default-500 w-9 h-9 group-hover:text-warning"
        }
      />
    ),
    male: (
      <MaleIcon
        className={
          pathname === "/talents/male"
            ? "text-warning w-9 h-9"
            : "text-default-500 w-9 h-9 group-hover:text-warning"
        }
      />
    ),
  };

  return (
    <NextUINavbar
      maxWidth="xl"
      shouldHideOnScroll
      isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}
      className="dark:bg-transparent"
    >
      <NavbarContent className="hidden lg:flex gap-4 justify-start ml-2 " justify="start">

          {/* Work */}
          <NavbarItem>
            <NextLink
              href="/"
              className={
                pathname === "/"
                  ? "text-warning font-semibold"
                  : " text-default-500 hover:text-warning"
              }
            >
              Work
            </NextLink>
          </NavbarItem>

          {/* Talents */}
          <Dropdown radius="none" shadow="sm">
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className={clsx(
                    "h-fit p-0 -mx-1 bg-transparent data-[hover=true]:bg-transparent text-base",
                    pathname === "/talents" ||
                      pathname === "/talents/female" ||
                      pathname === "/talents/male"
                      ? "text-warning font-semibold"
                      : "text-default-500"
                  )}
                  endContent={<ChevronDownIcon className="w-4 h-4" />}
                  radius="none"
                  variant="light"
                >
                  Talents
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            {/* // change the color of the dropdown if the pathname is equal to the href */}
            <DropdownMenu
              itemClasses={{
                base: "text-default-500  gap-3 !rounded-none group ",
                title: "text-base group-hover:text-warning-500",
                description: "group-hover:text-warning-500 max-w-[12rem] ",
                // change the color of description if the pathname is equal to the what is active path
              }}
            >
              {siteConfig.navItemsTalents.map((item) => (
                <DropdownItem
                  key={item.href}
                  description={
                    <p
                      className={pathname === item.href ? "text-warning " : ""}
                    >
                      {item.description}
                    </p>
                  }
                  startContent={icons[item.href.split("/").pop()!]}
                  href={item.href}
                  as={NextLink}
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

          {/* Instructors */}
          <NavbarItem>
            <NextLink
              href="/instructors"
              className={
                pathname === "/instructors"
                  ? "text-warning font-semibold"
                  : " text-default-500 hover:text-warning"
              }
            >
              Instructors
            </NextLink>
          </NavbarItem>

          {/* Resources , about , events, application , contact */}
          <Dropdown  radius="none" shadow="sm">
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className={clsx(
                    pathname === "/about" ||
                      pathname === "/events" ||
                      pathname === "/schedules" ||
                      pathname === "/testimonials" ||
                      pathname === "/application" ||
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
                description: "group-hover:text-warning-500 max-w-[12rem]",
                // change the color of description if the pathname is equal to the what is active path
              }}
            >
              {siteConfig.navItems.slice(2).map((item) => (
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
                  as={NextLink}
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

      </NavbarContent>


      <NavbarBrand className="flex w-ful ml-[35%] sm:ml-[46%] lg:ml-[10%] xl:ml-[19%] " >
        <NextLink
          className="flex justify-end  items-end w-fit gap-1 mt-2"
          href="/"
          aria-label="Home"
        >
          <AnimatedLogo className="w-10 h-10" hidden="hidden" />
          <AnimatedLogo className="w-14 h-9" hidden2="hidden" />
        </NextLink>
      </NavbarBrand>

      <NavbarContent className="hidden lg:flex" justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          {siteConfig.links.instagram ? (
            <Link
              isExternal
              href={siteConfig.links.instagram}
              aria-label="instagram"
            >
              <InstagramIcon className="text-default-500 hover:text-warning transition-all" />
            </Link>
          ) : null}
          {siteConfig.links.facebook ? (
            <Link
              isExternal
              href={siteConfig.links.facebook}
              aria-label="facebook"
            >
              <FacebookIcon className="text-default-500 hover:text-warning transition-all" />
            </Link>
          ) : null}
          {siteConfig.links.twitter ? (
            <Link
              isExternal
              href={siteConfig.links.twitter}
              aria-label="twitter"
            >
              <TwitterIcon className="text-default-500 hover:text-warning transition-all" />
            </Link>
          ) : null}
          {siteConfig.links.linkedin ? (
            <Link
              isExternal
              href={siteConfig.links.linkedin}
              aria-label="LinkedIn"
              className=""
            >
              <LinkedInIcon className="text-default-500 w-7 hover:text-warning transition-all" />
            </Link>
          ) : null}
          <ThemeSwitch className="" />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="text-warning lg:hidden "/>
      <NavbarMenu className="hideScroll">
            <NavbarMenuItem>
              <Link as={NextLink}
                color={pathname === "/" ? "warning" : "foreground"}
                href="/"
                size="lg"
                onPress={() => setIsMenuOpen()}
              >
                Work
              </Link>
            </NavbarMenuItem>
          {siteConfig.navItemsTalents.map((item,index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={pathname === item.href ? "warning" : "foreground"}
                href={item.href}
                size="lg"
                onPress={() => setIsMenuOpen()}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          {siteConfig.navItems.slice(1).map((item) => (
            <NavbarMenuItem key={item.label}>
              <Link
                color={pathname === item.href ? "warning" : "foreground"}
                href={item.href}
                size="lg"
                onPress={() => setIsMenuOpen()}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <div className="flex flex-row justify-center md:justify-start  mt-3 gap-2 w-full">
            {siteConfig.links.instagram ? (
              <Link
                isExternal
                href={siteConfig.links.instagram}
                aria-label="instagram"
              >
                <InstagramIcon className="text-default-500 hover:text-warning transition-all" />
              </Link>
            ) : null}
            {siteConfig.links.facebook ? (
              <Link
                isExternal
                href={siteConfig.links.facebook}
                aria-label="facebook"
              >
                <FacebookIcon className="text-default-500 hover:text-warning transition-all" />
              </Link>
            ) : null}
            {siteConfig.links.twitter ? (
              <Link
                isExternal
                href={siteConfig.links.twitter}
                aria-label="twitter"
              >
                <TwitterIcon className="text-default-500 hover:text-warning transition-all" />
              </Link>
            ) : null}
            {siteConfig.links.linkedin ? (
              <Link
                isExternal
                href={siteConfig.links.linkedin}
                aria-label="LinkedIn"
                className=""
              >
                <LinkedInIcon className="text-default-500 w-7 hover:text-warning transition-all" />
              </Link>
            ) : null}
            <ThemeSwitch />
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
