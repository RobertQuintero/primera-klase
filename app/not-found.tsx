"use client";
import { paragraph, title } from "@/components/primitives";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen relative">
      <h1 className="font-bold absolute text-center text-default-900/5 text-[10rem] sm:text-[14rem] lg:text-[18rem] xl:text-[20rem]">
        404
      </h1>
      <div className="flex flex-col items-center">
        <span
          className={`!font-extrabold !text-center ${title({
            size: "xxl",
          })}`}
        >
          Page Not Found.
        </span>
        <span
          className={`!font-bold !text-center ${paragraph({
            size: "lg",
          })}`}
        >
          The page you are looking for does not exist.
        </span>
      </div>
      <div className="flex flex-row items-center justify-center w-full mt-4">
        {/* // Link to the blog route */}
        <Button as={Link} href="/" radius="none" color="warning" variant="solid" className="font-semibold">
          return to home
        </Button>
        {/* // Refresh the page */}
        <Button
          className="ml-4 font-semibold"
          radius="none"
          color="warning"
          variant="bordered"
          onClick={() => window.location.reload()}
        >
          refresh
        </Button>
      </div>
    </div>
  );
}
