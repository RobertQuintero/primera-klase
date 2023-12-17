// projectLinks.tsx component
import React from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";


import {
  Button,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  cn,
} from "@nextui-org/react";
import { socialMediaType } from "@/types/socialMediaType";
import { FacebookIcon, InstagramIcon, PinterestIcon, TwitterIcon,LinkedInIcon, TiktokIcon, YoutubeIcon } from "../icons";

type SocialMediaLinkProps = {
  socialMediaLinks: socialMediaType[];
  className?: string;
  classNames?: any;
  props?: any;
  size?: "sm" | "md" | "lg";
  iconSize?: string;
};

const projectTypeIcons = {
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  Pinterest: PinterestIcon,
  Tiktok: TiktokIcon,
  YoutubeIcon: YoutubeIcon,
  Website: GlobeAltIcon,
};

const SocialMediaLink = ({
  socialMediaLinks,
  size,
  props,
  iconSize,
  classNames,
  className,
}: SocialMediaLinkProps) => {

  return (
    <div
      className={cn(
        "flex flex-wrap gap-0 md:gap-2 w-fit  items-center",
        className
      )}
      {...props}
    >

        {socialMediaLinks.map((socialMediaLink) => {
        const projectType =
          socialMediaLink.linkType as keyof typeof projectTypeIcons; //
        const Icon = projectTypeIcons[projectType];
        return (

              <Button key={socialMediaLink.linkType} as={Link} href={socialMediaLink.url} target={socialMediaLink.url} isIconOnly radius="full" variant="light" size={size} aria-label={socialMediaLink.linkType}>
                {Icon && <Icon className="w-6 h-6  md:w-8 md:h-8 " />}
              </Button>

        );
      })}
    </div>
  );
};

export { SocialMediaLink };
