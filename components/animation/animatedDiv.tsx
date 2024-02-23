"use client";
import React from "react";
import { motion, motionValue, useAnimation, useInView, useMotionValue, useScroll,useTransform  } from "framer-motion";
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





export { AnimatedDivLeftRightUpDown };
