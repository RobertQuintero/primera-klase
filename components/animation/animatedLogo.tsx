import { cn } from "@nextui-org/react";
import { motion } from "framer-motion";
import { type } from "os";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.7;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const slowDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.9;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};
type LogoProps = {
    className?: string;
    props?:any;
    url?: string;
    };

const AnimatedLogo = ({url, className, ...props }: LogoProps) => {
  return (

    <div
      className={cn(
        " ",
        className
      )}
      {...props}
    >
      <motion.svg
        className="w-full h-full stroke-default-500 stroke-[3.7rem] relative"
        width="1000"
        height="1000"
        viewBox="0 -20 1000 1300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M886.5 895L661 552.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={draw}
        />
        <motion.path
          d="M716 998.5L445 588L967.5 211.5H307"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={draw}
        />
        <motion.path
          d="M305.5 112H887"
        //   stroke="red"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={draw}
        />
        <motion.path
          d="M577.5 608.5L857 1030"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={draw}
        />
        <motion.path
          d="M11 276.5V796.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={draw}
        />
        <motion.path
          d="M112.369 146.5L111 926.499"
          className="stroke-primary "
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={slowDraw}
        />
        <motion.path
          d="M212.369 1062V11H794.369"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={draw}
        />
      </motion.svg>

    </div>
  );
}

export { AnimatedLogo };
