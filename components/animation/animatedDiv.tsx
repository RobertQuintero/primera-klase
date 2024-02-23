"use client";
import React from "react";
import { motion, useAnimation, useInView, useScroll,useTransform  } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: string;
  directionPlusY?: string;
  directionNegativeY?: string;
  randomPosition?: boolean;
  randomLeft?: number;
  randomTop?: number;
};

// animation that will make the div left and right using x axis
const AnimatedDivLeftRightUpDown = ({ children, delay, direction ,className}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
      <motion.div ref={ref} className={` ${className}`}
        variants={{
          hidden: {
            opacity: 0,
            x: direction === "right" ? 100 : direction == "left" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
          },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
          },
        }}
        initial="hidden"
        animate={controls}
        transition={{
          duration: 1.5,
          type: "tween",
          delay: delay,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
  );
};


// animation that will make the div show up
const AnimatedShow = ({ children, delay, className, randomPosition,randomLeft,randomTop }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Convert the delay received from 1 to 0.3 instead of 1 to 1.3
  const adjustedDelay = delay ? delay * 0.3 : 0;

  // Generate random left and top values using transformX and transformY to avoid layout shift use useTransform by framer-motion to animate the values and make it optional
// Generate random left and top values using useTransform
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          scale: 0,
        },
        visible: {
          opacity: 1,
          scale: 1,
          x: randomLeft,
          y: randomTop,
          transition: {
            duration: 0.3,
            delay: adjustedDelay,
            ease: [0, 0.71, 0.2, 1.01],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};




export { AnimatedDivLeftRightUpDown,AnimatedShow};
  // const decimalDelay = parseFloat(`0.${delay}`);


// const getRandomPositionLeftTop = () => {
//     // Generate random left and top values
//     // Random value right  between 1 and 100 and 800 and 600

//     const randomNumber = Math.random();
//     let left;
//     let top;
//     if (randomNumber < 0.5) {
//       // Random value between 1 and 100
//       left = Math.floor(Math.random() * 200) + 50;
//     } else {
//       // Random value between 800 and 600
//       left = Math.floor(Math.random() * 1000) + 900;
//     }

//     if (randomNumber < 0.5) {
//       // Random value between 1 and 100
//       top = Math.floor(Math.random() * 100) + 1;
//     } else {
//       // Random value between 800 and 600
//       top = Math.floor(Math.random() * 950) + 800;
//     }

//     // const top = Math.floor(Math.random() * 600) + 1; // Random value between 1 and 100
//         return {
//         left: `${left}%`,
//         top: `${top}%`,
//         };
// };