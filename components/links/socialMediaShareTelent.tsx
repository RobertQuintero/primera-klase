"use client";
import { ShareIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import {
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
  PinterestIcon,
  PinterestShareButton,
  LinkedinShareButton,
  RedditShareButton,
  LinkedinIcon,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailIcon,
  EmailShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "next-share";
import { paragraph, title } from "../primitives";
import { siteConfig } from "@/config/site";
import { TalentsType } from "@/types/talentsType.";

type socialMediaTalentShareProps = {
  socialShareTalent: TalentsType;
  className?: string;
  size?: string;
};

export default function SocialMediaShare({
  socialShareTalent,
  className,
  size = "w-8 h-8 sm:h-8 sm:h-8 xl:h-10 xl:w-10 rounded-lg",
}: socialMediaTalentShareProps) {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="flat" isIconOnly aria-label="Share it">
          <ShareIcon color="primary" className="w-6 h-6" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-2">
        <div className="flex flex-wrap gap-2 ">
          <div className="flex flex-col self-start ">
            <p className={` ${title({ size: "sm" })}`}>Share this </p>
            <p className={` ${paragraph({ size: "xs" })}`}>to your friends</p>
          </div>
          <RedditShareButton
            url={`${siteConfig.url}/talents/${String(socialShareTalent.slug)}`}
            title={socialShareTalent.fullName}
            className={className}
          >
            <RedditIcon className={size} />
          </RedditShareButton>
          <LinkedinShareButton
            aria-label="Share on LinkedIn"
            url={`${siteConfig.url}/talents/${String(socialShareTalent.slug)}`}
            title={socialShareTalent.fullName}
            className={className}
          >
            <LinkedinIcon className={size} />
          </LinkedinShareButton>

          <FacebookShareButton
            aria-label="Share on Facebook"
            url={`${siteConfig.url}/talents/${String(socialShareTalent.slug)}`}
            quote={socialShareTalent.fullName}
            hashtag={socialShareTalent.modelingPreferences
              .map((tag: any) => tag.title)
              .join(", ")}
            className={className}
          >
            <FacebookIcon className={size} />
          </FacebookShareButton>
          <FacebookMessengerShareButton
            aria-label="Share on Facebook Messenger"
            url={`${siteConfig.url}/talents/${String(socialShareTalent.slug)}`}
            appId="1071787503955957"
            className={className}
          >
            <FacebookMessengerIcon className={size} />
          </FacebookMessengerShareButton>

          <TwitterShareButton
            aria-label="Share on Twitter"
            url={`${siteConfig.url}/talents/${String(socialShareTalent.slug)}`}
            title={socialShareTalent.fullName}
            hashtags={socialShareTalent.modelingPreferences.map((tag: any) => tag.title)}
            className={className}
          >
            <TwitterIcon className={size} />
          </TwitterShareButton>
          <PinterestShareButton
            aria-label="Share on Pinterest"
            url={`${siteConfig.url}/talents/${String(socialShareTalent.slug)}`}
            media={socialShareTalent.portfolioImages[0].image}
            description={socialShareTalent.fullName}
          >
            <PinterestIcon className={size} />
          </PinterestShareButton>
          <WhatsappShareButton
            aria-label="Share on Whatsapp"
            url={`${siteConfig.url}/talents/${String(socialShareTalent.slug)}`}
            title={socialShareTalent.fullName}
          >
            <WhatsappIcon className={size} />
          </WhatsappShareButton>

          <EmailShareButton
            aria-label="Share on Email"
            url={`${siteConfig.url}/talents/${String(socialShareTalent.slug)}`}
            subject={socialShareTalent.fullName}
            body={socialShareTalent.portfolioImages[0].image}
            className={className}
          >
            <EmailIcon className={size} />
          </EmailShareButton>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export { SocialMediaShare };
