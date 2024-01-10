// Note: Portable text components
"use client";
import { Image } from "@nextui-org/image";
import { urlForImage } from "@/sanity/lib/image";

import React, { useEffect, useMemo, useRef } from "react";
import { Accordion, AccordionItem, Button, Divider, Link, Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import {
  ExclamationTriangleIcon,
  HashtagIcon,
  LightBulbIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { paragraph, title } from "../primitives";
import { useDisclosure } from "@nextui-org/react";


type Props = {
  value: any;
};
// revalidate;
const ImageComponent = ({ value }: Props) => {
  const builder = urlForImage(value.asset);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <React.Fragment>
      <figure
        onClick={onOpen}
        className="flex flex-col items-center justify-center my-2 sm:my-4 2xl:my-5 cursor-pointer"
      >
        <Image
          radius="none"
          src={builder.image(value).url()}
          alt={value.alt || " "}
          className=" object-cover aspect-video"
          width={800} // Add width
          height={700}  // Add height
        />
        <figcaption className="self-end    w-fit px-2 text-default-500 text-xs md:text-sm empty:hidden">
          {value.alt}
        </figcaption>
      </figure>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" classNames={{ base: "max-w-7xl  ", body: "m-auto p-4", header: "border-b-[1px] border-default" }}>
        <ModalContent>
          {(onClose) => (
            <React.Fragment>
              <ModalHeader className="flex flex-col gap-1">{value.alt}</ModalHeader>
              <ModalBody>
                <Image
                  radius="none"
                  src={builder.image(value).url()}
                  alt={value.alt || " "}
                  className="w-full h-full object-center m-auto"
                  width={1920} // Add width
                  height={1080}  // Add height
                />
              </ModalBody>
            </React.Fragment>
          )}
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

const RichTextComponents = {

  types: {
    image: ImageComponent,
  },
  list: {
    bullet: ({ children }: any) => (
      <ul
        className={`list-disc list-inside px-1 md:px-2 xl:px-3 my-4 sm:my-6  ${paragraph(
          {
            size: "md",
          }
        )}`}
      >
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol
        className={`list-decimal list-inside px-1 md:px-2 xl:px-3 my-4 sm:my-6  ${paragraph(
          {
            size: "md",
          }
        )}`}
      >
        {children}
      </ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => {
      // Extract the text from the children array and join it
      const headingText = children.join("");

      // Convert the heading text to lowercase and replace spaces with hyphens
      const anchor = headingText.toLowerCase().replace(/\s+/g, "-");

      return (
        <Link
          color="foreground"
          href={`#${anchor}`}
          id={anchor}
          className="flex flex-wrap items-baseline group relative  "
        >
          <h2
            className={`capitalize !font-bold !text-default-800 ${title({
              size: "v2xl",
            })}`}
          >
            {children}
          </h2>
          <HashtagIcon className="w-5 h-5 md:w-6 md:h-6 text-default-500 duration-700 group-hover:duration-700 ease-in-out group-hover:ease-in-out animate-appearance-out group-hover:animate-appearance-in" />
        </Link>
      );
    },
    h3: ({ children }: any) => {
      const headingText = children.join("");

      // Convert the heading text to lowercase and replace spaces with hyphens
      const anchorSub = headingText.toLowerCase().replace(/\s+/g, "-");

      return (
        <Link href={`#${anchorSub}`} id={anchorSub} color="foreground" className="flex flex-wrap items-baseline group relative  ">
          <h3
            className={`capitalize !font-bold !text-default-800 ${title({
              size: "lg",
            })}`}
          >
            {children}
          </h3>
          <HashtagIcon className="w-4 h-4 md:w-5 md:h-5  text-default-500 duration-700 group-hover:duration-700 ease-in-out group-hover:ease-in-out animate-appearance-out group-hover:animate-appearance-in" />
        </Link>
      );
    },

    h4: ({ children }: any) => (
      <h4
        className={`!font-bold capitalize  ${title({
          size: "lg",
        })}`}
      >
        {children}
      </h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-lg font-bold">{children}</h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="text-base font-bold">{children}</h6>
    ),
    normal: ({ children }: any) => (
      <p className={`my-4  ${paragraph({ size: "md" })}`}>{children}</p>
    ),
    spacer: ({ children }: any) => (
      <div className="my-8 md:my-10" >
            <Divider className="w-1/4 h-[2px] mx-auto"/> {children}
      </div>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="relative p-3 sm:p-4 my-4 sm:my-6  border-l-2 sm:border-l-3 2xl:border-l-4 border-default     bg-default/10 empty:hidden">
        <p
          className={` ${paragraph({ size: "md" })}`}
        >
          {children}
        </p>
      </blockquote>
    ),
    blockquoteTip: ({ children }: any) => (
      <blockquote className="relative p-3 sm:p-4 pt-10 sm:pt-12 my-4 sm:my-6  border-l-2 sm:border-l-3 2xl:border-l-4 border-success    bg-success-50/30 empty:hidden">
        <span
          className={`absolute top-3 left-3 flex items-center gap-2 text-success !font-medium ${paragraph(
            { size: "lg" }
          )}`}
        >
          <LightBulbIcon className="w-5 h-5 2xl:w-6 2xl:h-6" />
          Tip
        </span>
        <p
          className={`dark:text-success text-success   ${paragraph(
            {
              size: "md",
            }
          )}`}
        >
          {children}
        </p>
      </blockquote>
    ),

    blockquoteWarning: ({ children }: any) => (
      <blockquote className="relative p-3 sm:p-4 pt-10 sm:pt-12 my-4 sm:my-6  border-l-2 sm:border-l-3 2xl:border-l-4 border-warning    bg-warning-50/30 empty:hidden">
        <span
          className={`absolute top-3 left-3 flex items-center gap-2 text-warning !font-medium ${paragraph(
            { size: "lg" }
          )}`}
        >
          <ExclamationTriangleIcon className=" w-5 h-5 2xl:w-6 2xl:h-6" />
          Caution
        </span>
        <p
          className={`dark:text-warning text-warning  ${paragraph({
            size: "md",
          })}`}
        >
          {children}
        </p>
      </blockquote>
    ),
    blockquoteConclusion: ({ children }: any) => (
      <blockquote className="relative p-3 sm:p-4 my-4 sm:my-6 border-l-2 sm:border-l-3 2xl:border-l-4 border-primary    bg-primary-50/30 empty:hidden">
        <p
          className={`dark:text-primary text-primary  ${paragraph({
            size: "md",
          })}`}
        >
          {children}
        </p>
      </blockquote>
    ),
  },
  marks: {
    link: ({ value, children }: any) => {
      return (
        <Link
          showAnchorIcon
          isExternal
          isBlock
          href={value.href}
          target={value.target}
          color="primary"
          className={`p-1 !text-primary ${paragraph({
            size: "md",
          })}`}
        >
          {children}
        </Link>
      );
    },

    highlightD: ({ children }: any) => (
      <span
        className={`p-0 xl:py-[0.1rem] px-0.5   !bg-default !text-default-900 text-center h-fit ${paragraph(
          {
            size: "md",
          }
        )}`}
      >
        {children}
      </span>
    ),
    highlightP: ({ children }: any) => (
      <span
        className={`p-0 xl:py-[0.1rem] px-0.5   bg-primary/10 !text-primary text-center h-fit ${paragraph(
          {
            size: "md",
          }
        )}`}
      >
        {children}
      </span>
    ),
    highlightS: ({ children }: any) => (
      <span
        className={`p-0 xl:py-[0.1rem] px-0.5   bg-secondary/10 !text-secondary  text-center h-fit ${paragraph(
          {
            size: "md",
          }
        )}`}
      >
        {children}
      </span>
    ),
    highlightSs: ({ children }: any) => (
      <span
        className={`p-0 xl:py-[0.1rem] px-0.5   bg-success/10 !text-success  text-center h-fit ${paragraph(
          {
            size: "md",
          }
        )}`}
      >
        {children}
      </span>
    ),
    highlightW: ({ children }: any) => (
      <span
        className={`p-0 xl:py-[0.1rem] px-0.5   bg-warning/10 !text-warning  text-center h-fit ${paragraph(
          {
            size: "md",
          }
        )}`}
      >
        {children}
      </span>
    ),
    highlightDr: ({ children }: any) => (
      <span
        className={`p-0 xl:py-[0.1rem] px-0.5   bg-danger/10 !text-danger text-center h-fit ${paragraph(
          {
            size: "md",
          }
        )}`}
      >
        {children}
      </span>
    ),
    small: ({ children }: any) => (
      <small
        className={` ${paragraph({
          size: "xs",
        })}`}
      >
        {children}
      </small>
    ),
    strong: ({ children }: any) => (
      <strong
        className={` !font-bold !text-inherit ${paragraph({
          size: "md",
        })}`}
      >
        {children}
      </strong>
    ),
  },
};

const TableOfContents = ({ content }: { content: any }) => {
  const hasH2Headings = content.some(
    (item: any) => item._type === "block" && item.style === "h2"
  );

  // Use the useMemo hook to initialize the TOC items array
  const tocItems: JSX.Element[] = useMemo(() => [], []);

  // Initialize a ref to store the current main heading
  const currentMainHeading = useRef<string | null>(null);

  // Use the useEffect hook to update the TOC items when the content changes
  useEffect(() => {
    // Clear the TOC items array before updating it
    tocItems.length = 0;

    content.forEach((item: any) => {
      if (item._type === "block") {
        if (item.style === "h2") {
          currentMainHeading.current = item.children[0].text || "";
          tocItems.push(
            <li
              key={currentMainHeading.current}
              className="sm:my-2 my-0 flex items-start w-fit empty:hidden"
            >
              <InformationCircleIcon className="h-2 w-2 sm:w-3 sm:h-3 mr-2 sm:mr-4 my-2 text-default" />
              <Link
                color="foreground"
                className={`!flex items-center flex-row  group !font-semibold ${title(
                  {
                    size: "lg",
                  }
                )}`}
                showAnchorIcon
                anchorIcon={
                  <LinkIcon className="w-4 h-4 md:w-5 md:h-5 ml-2 text-default-500 duration-700 group-hover:duration-700 ease-in-out group-hover:ease-in-out animate-appearance-out group-hover:animate-appearance-in" />
                }
                href={
                  currentMainHeading.current
                    ? `#${currentMainHeading.current
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`
                    : ""
                }
              >
                {currentMainHeading.current}
              </Link>
            </li>
          );
        } else if (item.style === "h3" && currentMainHeading.current) {
          const subheading = item.children[0].text || "";
          tocItems.push(
            <li
              key={`${currentMainHeading.current}-${subheading}`}
              className={`ml-2 flex items-center w-fit empty:hidden"`}
            >
              <Link
                color="foreground"
                className={`!flex items-center flex-row group !font-semibold ${title({
                  size: "md",
                })}`}
                showAnchorIcon
                anchorIcon={
                  <LinkIcon className="w-3 h-3 md:w-4 md:h-4 ml-2 text-default-500 duration-700 group-hover:duration-700 ease-in-out group-hover:ease-in-out animate-appearance-out group-hover:animate-appearance-in" />
                }
                href={
                  subheading
                    ? `#${subheading.toLowerCase().replace(/\s+/g, "-")}`
                    : ""
                }
              >
                <InformationCircleIcon className="h-2 w-2 sm:w-3 sm:h-3 mx-2  text-default" />
                {subheading}
              </Link>
            </li>
          );
        }
      }
    });
  }, [content, tocItems]);

  if (!hasH2Headings) {
    return null;
  }

  return (
    <React.Fragment>
      <Accordion variant="light" className="w-full my-4 px-0" >
        <AccordionItem
          title={
            <span
              className={`!font-bold py-0 !text-default-800 ${title({ size: "xl" })}`}
            >
              Table of contents{" "}
            </span>
          }
          key="TableContent"
          aria-label="TableContent"
          classNames={{ content: "p-0" }}
          indicator={<LinkIcon className="w-6 h-6" />}
        >
          <ul className={`w-full pb-4 sm:px-4 empty:hidden`}>{tocItems}</ul>
        </AccordionItem>
      </Accordion>
    </React.Fragment>
  );
};

export { RichTextComponents, TableOfContents };
