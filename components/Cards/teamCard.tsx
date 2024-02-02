import { teamsType } from "@/types/teamsType";
import {Image } from "@nextui-org/react";
import { SocialMediaLink } from "../links/socialMediaLink";
import { paragraph, title } from "../primitives";

type TeamCardProps = {
    team: teamsType;
    className?: string
}


const TeamCard = ({ team, className }: TeamCardProps) => {
    return (
        <div className={` ${className}`}>
                      <div
            key={team.name}
            className="relative max-w-sm group overflow-hidden"
          >
            <Image src={team.image} alt={team.name} radius="none" />
            <div className="flex flex-col  px-4 py-1">
              <p
                className={`!font-semibold text-center capitalize text-warning ${title(
                  { size: "lg" }
                )}`}
              >
                {team.name}
              </p>
              <p
                className={`text-center uppercase font-semibold text-warning-300 ${paragraph(
                  { size: "md" }
                )}`}
              >
                {team.position}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center absolute z-10 top-[30rem] group-hover:top-0 h-full w-full bg-warning-50/10 animate duration-1000 group-hover:duration-1000 ease-in-out group-hover:ease-in-out  ">
              {team.socialMedia ? (
                <SocialMediaLink
                  socialMediaLinks={team.socialMedia}
                  classNameIcon={"text-warning-400"}
                />
              ) : null}
              <blockquote
                className={`italic empty:hidden !text-warning-50  ${paragraph({
                  size: "md",
                })} `}
              >
                {team.quote}
              </blockquote>
            </div>
          </div>
        </div>
    );
}

export { TeamCard };