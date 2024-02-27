"use client";

import { TalentsType } from "@/types/talentsType.";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Button, ScrollShadow, Image } from "@nextui-org/react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useDragControls,
} from "framer-motion";
import React, { useState } from "react";

type AnimatedCarouselTalentProps = {
  talent: TalentsType;
  startIndex: number;
};

const AnimatedCarouselTalent = ({
  talent,
  startIndex,
}: AnimatedCarouselTalentProps) => {
  const [index, setIndex] = useState(startIndex);
  const dragControls = useDragControls();

  const handleSwipe = (event: any, info: any) => {
    if (info.offset.x > 50) {
      setIndex(Math.max(0, index - 1));
    } else if (info.offset.x < -50) {
      setIndex(Math.min(talent.portfolioImages.length - 1, index + 1));
    }
  };
  return (
    <React.Fragment>
      <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
        <AnimatePresence>
          <div className="flex justify-center items-center w-full h-fit overflow-hidden">
            <motion.img
              key={talent.portfolioImages[index].image}
              src={talent.portfolioImages[index].image}
              alt={talent.portfolioImages[index].title}
              aria-label={talent.portfolioImages[index].title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              width={800}
              height={800}
              className="mx-auto h-[80vh] aspect-auto object-contain"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              dragControls={dragControls}
              onDragEnd={handleSwipe}
            />
          </div>
        </AnimatePresence>

        <AnimatePresence initial={false}>
          {index > 0 && (
            <Button
              isIconOnly
              variant="flat"
              color="default"
              radius="none"
              size="md"
              className={`absolute inset-y-[45%] !z-50 left-0 bg-warning-500/50`}
              onClick={() => setIndex(index - 1)}
              aria-label="Previous Image"
            >
              <ChevronLeftIcon className="h-6 w-6 text-background" />
            </Button>
          )}
        </AnimatePresence>

        <AnimatePresence initial={false}>
          {index + 1 < talent.portfolioImages.length && (
            <Button
              isIconOnly
              variant="flat"
              color="default"
              radius="none"
              size="md"
              className={`absolute inset-y-[45%] !z-50 right-0 bg-warning-500/50`}
              onClick={() => setIndex(index + 1)}
              aria-label="Next Image"
            >
              <ChevronRightIcon className="h-6 w-6 text-background" />
            </Button>
          )}
        </AnimatePresence>
        <ScrollShadow
          className="grid grid-flow-col relative  max-w-7xl  "
          orientation="horizontal"
          hideScrollBar
        >
          {talent.portfolioImages.map((image, i) => (
            <motion.button
              key={image.image}
              onClick={() => setIndex(i)}
              whileHover={{ opacity: 1 }}
              initial={false}
              animate={i === index ? "active" : "inactive"}
              variants={{
                active: {
                  filter: "grayscale(0)",
                },
                inactive: {
                  filter: "grayscale(1)",
                },
              }}
              className="min-w-[14vh] min-h-[14vh] max-w-[20vh] max-h-[20vh]"
            >
              <Image
                width={200}
                height={200}
                radius="none"
                alt={talent.fullName}
                src={image.image}
                className="aspect-square object-cover"
              />
            </motion.button>
          ))}
        </ScrollShadow>
      </MotionConfig>
    </React.Fragment>
  );
};

export { AnimatedCarouselTalent };
