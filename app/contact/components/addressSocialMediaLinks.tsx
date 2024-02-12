import React from "react";
import NextLink from "next/link";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from "@nextui-org/react";
import { contactType } from "@/types/contactType";
import { SocialMediaLink } from "@/components/links/socialMediaLink";
import { paragraph, title } from "@/components/primitives";
import { AnimatedLogo } from "@/components/animation/animatedLogo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/icons";
import { siteConfig } from "@/config/site";

type AddressSocialMediaLinksProps = {
  contacts: contactType[];
};

const AddressSocialMediaLinks = ({
  contacts,
}: AddressSocialMediaLinksProps) => {
  return (
    <React.Fragment>
      <div className="flex flex-col justify-center items-center gap-16 ">
        <AnimatedLogo className="w-40 h-40 md:w-60 md:h-60"/>
        <h1
          className={`!font-bold text-warning text-center !text-5xl sm:!text-6xl ${title(
            { size: "xxxl" }
          )}`}
        >
          Contact us
        </h1>
        <p
          className={`!text-default-500 max-w-2xl text-center ${paragraph({
            size: "md",
          })}`}
        >
          Are you looking for models for your next shoot or just want to talk to
          us without obligation? Give us a call or write to us and we&apos;ll get
          back to you as soon as possible. We look forward to hearing from you!
        </p>
      </div>
      <div className="max-w-7xl mx-auto md:items-center grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-4  py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32 mb-14 sm:mb-16 md:mb-24 lg:mb-28 xl:mb-32">
        <Card className="col-span-3 md:col-span-1 border border-warning/30 bg-warning/5 dark:bg-warning/5"
          radius="none"
          isBlurred
          shadow="none"
        >
          <CardHeader>
            <p
              className={`!text-warning !text-center ${title({
                size: "xl",
              })}`}
            >
              Inquiries
            </p>
          </CardHeader>
          <CardBody>
            Thank you for reaching out to {siteConfig.name}! Whether
          </CardBody>
          <CardFooter>
            <Button
              as={Link}
              href="#ContactForm"
              size="lg"
              className="font-bold w-full"
              color="warning"
              variant="solid"
              radius="none"
            >
              Contact us
            </Button>
          </CardFooter>
        </Card>
        <Card className="col-span-3 md:col-span-2 border border-warning/30 bg-warning/5 dark:bg-warning/5 py-4"
          radius="none"
          isBlurred
          shadow="none"
        >
          <CardHeader className="items-center justify-center">
            <p
              className={`!text-warning ${title({
                size: "xl",
              })}`}
            >
              Main Office
            </p>
          </CardHeader>
          <CardBody
            className={` gap-2 items-center `}
          >
            <p               className={`!text-default-800 hover:!text-warning ${paragraph({
                size: "md",
              })}`}>{siteConfig.address}</p>
            <Link
              className={`!text-default-800 hover:!text-warning ${paragraph({
                size: "md",
              })}`}
              as={NextLink} href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </Link>
            <Link
              className={`!text-default-800 hover:!text-warning ${paragraph({
                size: "md",
              })}`}
              as={NextLink}
              href={`tel:${siteConfig.mobile}`}
            >
              {siteConfig.mobile}
            </Link>
            <Link
              className={`!text-default-800 hover:!text-warning ${paragraph({
                size: "md",
              })}`}
              as={NextLink}
              href={`tel:${siteConfig.telephone}`}
            >
              {siteConfig.telephone}
            </Link>
          </CardBody>
          <CardFooter>
            <div className="flex flex-row justify-center gap-2 w-full">
              {siteConfig.links.instagram ? (
                <Link
                  isExternal
                  href={siteConfig.links.instagram}
                  aria-label="instagram"
                >
                  <InstagramIcon
                    className="text-default-800 hover:text-warning transition-all"
                    size={50}
                  />
                </Link>
              ) : null}
              {siteConfig.links.facebook ? (
                <Link
                  isExternal
                  href={siteConfig.links.facebook}
                  aria-label="facebook"
                >
                  <FacebookIcon
                    className="text-default-800 hover:text-warning transition-all"
                    size={50}
                  />
                </Link>
              ) : null}
              {siteConfig.links.twitter ? (
                <Link
                  isExternal
                  href={siteConfig.links.twitter}
                  aria-label="twitter"
                >
                  <TwitterIcon
                    className="text-default-800 hover:text-warning transition-all"
                    size={50}
                  />
                </Link>
              ) : null}
              {siteConfig.links.linkedin ? (
                <Link
                  isExternal
                  href={siteConfig.links.linkedin}
                  aria-label="LinkedIn"
                  className=""
                >
                  <LinkedInIcon
                    className="text-default-800  hover:text-warning transition-all"
                    size={50}
                  />
                </Link>
              ) : null}
            </div>
          </CardFooter>
        </Card>
        <Card className="col-span-3 md:col-span-1  border border-warning/30 bg-warning/5 dark:bg-warning/5"
          radius="none"
          isBlurred
          shadow="none"
        >
          <CardHeader>
            <p
              className={`!text-warning ${title({
                size: "xl",
              })}`}
            >
              Be a Primera
            </p>
          </CardHeader>
          <CardBody>
            Do you have what it takes to be a Primera? Apply now and join our
            team!
          </CardBody>
          <CardFooter>
            <Button
              size="lg"
              className="font-bold w-full"
              color="warning"
              variant="solid"
              radius="none"
              as={NextLink}
              href="/application"
            >
              Apply
            </Button>
          </CardFooter>
        </Card>
      </div>

      <h2
        className={`!font-bold text-warning text-center flex items-center justify-center ${title(
          { size: "xxxl" }
        )}`}
      >
        Our Branches
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32 mb-14 sm:mb-16 md:mb-24 lg:mb-28 xl:mb-32">
        {contacts.map((contact) => (
          <div className="flex flex-col gap-2" key={contact.address}>
            <p
              className={`!text-warning ${title({
                size: "md",
              })}`}
            >
              {contact.name}
            </p>
            <p className="text-default-500 hover:text-warning">
              {contact.address}
            </p>
            <Link
              className="text-default-500 hover:text-warning"
              as={NextLink}
              href={`mailto:${contact.email}`}
            >
              {contact.email}
            </Link>
            <Link
              className="text-default-500 hover:text-warning"
              as={NextLink}
              href={`tel:${contact.mobile}`}
            >
              {contact.mobile}
            </Link>
            <Link
              className="text-default-500 hover:text-warning"
              as={NextLink}
              href={`tel:${contact.telephone}`}
            >
              {contact.telephone}
            </Link>
            {contact.socialMedia ? (
              <SocialMediaLink
                socialMediaLinks={contact.socialMedia}
                classNameIcon={"hover:text-warning"}
              />
            ) : null}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export { AddressSocialMediaLinks };
