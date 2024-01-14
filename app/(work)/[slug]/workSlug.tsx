"use client";

import { paragraph, title } from "@/components/primitives";
import { AgeComponent } from "@/components/time/age";
import { CreatedAt } from "@/components/time/createdAt";
import { DateComponent } from "@/components/time/date";
import {
  ReadingTime,
  extractTextFromBlocks,
} from "@/components/time/readingTime";
import { WorksType } from "@/types/worksType";
import { DocumentArrowDownIcon } from "@heroicons/react/24/solid";

import { BreadcrumbItem, Breadcrumbs, Button, Chip, Divider, Image, Modal, ModalBody, ModalContent, Tooltip, useDisclosure } from "@nextui-org/react";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Zoom } from "swiper/modules";
import "swiper/css/bundle";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { RichTextComponents } from "@/components/portableText/portableTextComponents";
import { PortableText } from "@portabletext/react";
import SocialMediaShareWork from "@/components/links/socialMediaShareWork";

type workSlugProps = {
  params: { slug: string };
  work: WorksType;
};

const WorkSlug = ({ work, params }: workSlugProps) => {

  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const navigationPrevRefMini = React.useRef(null);
  const navigationNextRefMini = React.useRef(null);

  const swiperRef = useRef<any>(null);
  const swiperRefMini = useRef<any>(null);

  return (
    <article className="w-full h-full ">
      <div className="flex flex-col  gap-4 sm:gap-6 md:gap-8 w-full  max-w-4xl mx-auto">
          <Breadcrumbs >
          <BreadcrumbItem >
            <Link  href="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link  href="/">Works</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            {work.title}
          </BreadcrumbItem>
        </Breadcrumbs>
        <figure className="flex flex-col ">
        <Image
          src={work.portfolioImages[0].image}
          alt={work.portfolioImages[0].title}
          radius="none"
          width={1920}
          height={1920}
          className="w-full max-w-5xl aspect-video object-cover object-center "
        />
          <figcaption className=" self-end  rounded-sm w-fit   px-2 text-default-500 text-xs  md:text-sm empty:hidden">
            {work.portfolioImages[0].title}
          </figcaption>
        </figure>
        <div className=" w-full flex flex-col gap-2">
          <h1 className={`capitalize !font-bold ${title({ size: "xxl" })}`}>
            {work.title}
          </h1>

          <div className="flex flex-row items-center w-full gap-2">
            <DateComponent Date={work.date} />
            <ReadingTime
              size="sm"
              text={extractTextFromBlocks(work.body)}
              averageWordsPerMinute={200}
              className={` ${paragraph({ size: "xs" })}`}
            />
            <SocialMediaShareWork classNameShare="ml-auto" socialMediaShareWork={work} />
          </div>

          <p
            className={`col-span-8 mt-4 md:mt-6 pb-2 !font-bold ${title({
              size: "lg",
            })}`}
          >
            Services
          </p>
          {work.services && work.services.length > 0 ? (
            <ul className="flex flex-wrap gap-3  py-2">
              {work.services.map((service) => (
                <li key={service.title}>
                  <Chip variant="dot" size="lg" radius="none" color="warning">
                    {service.title}
                  </Chip>
                </li>
              ))}
            </ul>
          ) : null}

          <p className={`my-6 !font-normal ${paragraph({ size: "md" })}`}>
            {work.description}
          </p>
        </div>
      </div>
      {work.body ? (
        <PortableText value={work.body} components={RichTextComponents} />
      ) : null}


      {work.portfolioImages.length > 1 ? (
      <div className="w-full mx-auto max-w-4xl  ">
        <Swiper
          zoom={true}
          pagination={{
            clickable: true,
          }}
          spaceBetween={10}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs, Zoom]}
          className="mySwiper2 !mb-4 !relative"
        >
          {work.portfolioImages.slice(1).map((image) => (
            <SwiperSlide key={image.title}>
              <div className="swiper-zoom-container h-full ">
                <Image
                  src={image.image}
                  alt={work.title}
                  width={1920}
                  height={1080}
                  radius="none"
                  className="w-full bg-default-100 aspect-video object-contain "
                />
              </div>
            </SwiperSlide>
          ))}

          {/* hide the navigation buttons when there's no next or previous slide available, you can use the isBeginning and isEnd properties of the Swiper instance. */}
          {swiperRef.current?.isBeginning ? null : (
            <Button
              isIconOnly
              variant="flat"
              color="warning"
              radius="none"
              size="lg"
              className="absolute inset-y-[50%] left-0 z-50"
              onClick={() => swiperRef.current?.slidePrev()}
              isDisabled={swiperRef.current?.isBeginning}
            >
              <ChevronLeftIcon className="w-full text-war" />
            </Button>
          )}
          {swiperRef.current?.isEnd ? null : (
            <Button
              isIconOnly
              variant="flat"
              color="warning"
              radius="none"
              size="lg"
              className="absolute inset-y-[50%] right-0 z-50"
              onClick={() => swiperRef.current?.slideNext()}
              isDisabled={swiperRef.current?.isEnd}
            >
              <ChevronRightIcon className="w-full" />
            </Button>
          )}

        </Swiper>
        {/* Swiper for thumbnails */}
        <Swiper
          onSwiper={(swiper) => setThumbsSwiper(() => swiper)}
          breakpoints={{
            300: {
              slidesPerView: 3,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          freeMode={true}
          navigation={{
            prevEl: navigationPrevRefMini.current,
            nextEl: navigationNextRefMini.current,
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onBeforeInit={(swiper) => {
            swiperRefMini.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);

          }}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper   drop-shadow-sm !relative"
        >
          {work.portfolioImages.slice(1).map((image) => (
            <SwiperSlide key={image.title}>
              <Image
                src={image.image} // Replace with your image URL
                alt={image.title}
                width={500}
                height={500}
                radius="none"
                className="aspect-video object-cover md:object-cover "
              />
            </SwiperSlide>
          ))}
          {/* hide the navigation buttons when there's no next or previous slide available, you can use the isBeginning and isEnd properties of the Swiper instance. */}

         {swiperRefMini.current?.isBeginning ? null : (
          <Button
            isIconOnly
            variant="light"
            color="warning"
            radius="none"
            className="absolute h-full top-0 left-0 z-50"
            onClick={() => swiperRefMini.current?.slidePrev()}// Add optional chaining here
          >
            <ChevronLeftIcon className="w-4 h-4 md:w-6 md:h-6" />
          </Button>
          )}

          {swiperRefMini.current?.isEnd ? null : (
          <Button
            isIconOnly
            variant="light"
            color="warning"
            radius="none"
            className="absolute h-full top-0 right-0 z-50"
            onClick={() => swiperRefMini.current?.slideNext()} // Add optional chaining here
          >
            <ChevronRightIcon className="w-4 h-4 md:w-6 md:h-6" />
          </Button>
          )}
        </Swiper>
      </div>
      ) : null}
    </article>
  );
};

export { WorkSlug };
