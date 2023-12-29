"use client";

import { SocialMediaLink } from "@/components/links/socialMediaLink";
import { paragraph } from "@/components/primitives";
import { TalentsType } from "@/types/talentsType.";

import { Image} from "@nextui-org/react";




type talentSlugProps = {
  params: { slug: string };
  talent: TalentsType;
};


const TalentSlug = ({ talent, params }: talentSlugProps) => {
  const info = [
    { label: "Gender", value: talent.gender },
    { label: "Nationality", value: talent.nationality },
    { label: "Height", value: talent.height },
    { label: "Weight", value: talent.weight },
    { label: "Hair_Color", value: talent.hairColor },
    { label: "Eye_Color", value: talent.eyeColor },
    { label: "Bust", value: talent.bust },
    { label: "Waist", value: talent.waist },
    { label: "Hips", value: talent.hips },
    { label: "Shoe_Size", value: talent.shoeSize },
    { label: "Dress_Size", value: talent.dressSize },
    { label: "Pants_Size", value: talent.pantsSize },
    { label: "Tattoos", value: talent.tattoos ? "Yes" : "No"  },
    { label: "Piercings", value: talent.piercings ? "Yes" : "No"  },
  ];
    return (
<article >

         <Image
                  src={talent.portfolioImages[0].image}
                  alt={talent.fullName}
                  radius="sm"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain !object-center"
                />
                {info.map((item, index) =>
                    item.value ? (
                      <p
                        key={index}
                        className={`before:text-default-500 before:font-normal before:text-sm before:content-['${
                          item.label
                        }__:__'] font-semibold empty:hidden ${paragraph({
                          size: "sm",
                        })}`}
                      >
                        {item.value}
                      </p>
                    ) : null
                  )}

         {talent.socialMedia ? (
            <SocialMediaLink socialMediaLinks={talent.socialMedia} />
          ) : null}
</article>
);
};

export {TalentSlug};