"use client";

import { SocialMediaLink } from "@/components/links/socialMediaLink";
import { SocialMediaShareTalent } from "@/components/links/socialMediaShareTelent";
import { paragraph, title } from "@/components/primitives";
import { AgeComponent } from "@/components/time/age";
import { DateComponent } from "@/components/time/date";
import { TalentsType } from "@/types/talentsType.";
import { DocumentArrowDownIcon } from "@heroicons/react/24/solid";

import { Button, Chip, Divider, Image, Link, Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";
import React from "react";

type workSlugProps = {
  params: { slug: string };
  talent: TalentsType;
};

const WorkSlug = ({ talent, params }: workSlugProps) => {

    return (
    <React.Fragment>
    </React.Fragment>
    );
};

export { WorkSlug };
