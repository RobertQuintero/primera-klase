
"use client";

import { TalentsType } from "@/types/talentsType.";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Button, ScrollShadow,Image } from "@nextui-org/react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import React, { useState } from "react";


type AnimatedCarouselTalentProps = {
    talent: TalentsType;
    startIndex: number;
};

const AnimatedCarouselTalent = ({ talent,startIndex}:AnimatedCarouselTalentProps) => {
    const [index, setIndex] = useState(startIndex);

    return (
        <React.Fragment>
                <MotionConfig
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            >
              <AnimatePresence>
                <div className="flex justify-center items-center">
                  <motion.img
                    key={talent.portfolioImages[index].image}
                    src={talent.portfolioImages[index].image}
                    alt={talent.fullName}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    width={800}
                    height={800}
                    className="mx-auto max-h-[80vh] object-contain"
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
                  >
                    <ChevronRightIcon className="h-6 w-6 text-background" />
                  </Button>
                )}
              </AnimatePresence>
              <ScrollShadow
                className="max-w-7xl inset-x-0 bottom-6 flex justify-center overflow-hidden "
                hideScrollBar
                orientation="horizontal"
                offset={100}
              >
                <motion.div
                  initial={false}
                  animate={{ width: `${100 / talent.portfolioImages.length}%` }}
                  className="flex h-14 md:h-20 ml-2"
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
                          opacity: 1,
                          aspectRatio: 1,
                        },
                        inactive: {
                          opacity: 0.3,
                          aspectRatio: 1,
                        },
                      }}
                      className={` ${
                        i === index ? "bg-default/50" : "bg-default/30"
                      }`}
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
                </motion.div>
              </ScrollShadow>
            </MotionConfig>
        </React.Fragment>
    );
}




export { AnimatedCarouselTalent };
