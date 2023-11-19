"use client";
import { Button, Divider, Link } from "@nextui-org/react";
import React from "react";
import { siteConfig } from "@/config/site";

import NextLink from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import { paragraph, title } from "./primitives";
export const Footer = () => {
  return (
    <React.Fragment>
      <Divider />
      <footer className="container mx-auto max-w-7xl px-4 sm:px-8 py-12 ">
        <div className="flex flex-col  md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col gap-4 order-1">
          <Link href="/" aria-label="Home">

          </Link>
        </div>

        <div className="flex flex-col items-center gap-4 max-w-xs md:max-w-sm order-2">
          <h3
            className={` ${title({
              size: "xl",
            })}`}
          >
            Get in Touch
          </h3>
          <p
            className={`!text-default-500 !font-normal !text-center ${paragraph(
              {
                size: "md",
              }
            )}`}
          >
           {siteConfig.footerText}
          </p>
           <p className={`!font-normal !text-default-500 !text-center ${title({
              size: "sm",
            })}`}>Created by <Link as={NextLink} href="/about" >Robert Quintero</Link></p>
          <Button variant="bordered" size="md" radius="full" as={NextLink}  href={siteConfig.navItems[4].href}>
            Say Hello🤚
          </Button>

        </div>

        <div className="flex flex-row gap-4 order-3">
          <div className="flex flex-col gap-2 w-20 ">

          </div>
          <div className="flex flex-col gap-2">
            <NextLink
              target="_blank"
              href={siteConfig.links.instagram}
              aria-label="instagram"
            >
              <FaceFrownIcon className="text-default-500" />
            </NextLink>
          </div>
        </div>
        </div>
      </footer>

    </React.Fragment>
  );
};
