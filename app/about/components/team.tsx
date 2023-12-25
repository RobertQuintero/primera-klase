"use client";
import { teamsType } from '@/types/teamsType';
import React from 'react'
import {Image} from "@nextui-org/react";
import { paragraph } from '@/components/primitives';
import { SocialMediaLink } from '@/components/links/socialMediaLink';
type teamsProps = {
    teams: teamsType[];
}

const Teams = ({teams}:teamsProps) => {
  return (
    <div className='max-w-7xl mx-auto  grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32'>
      {teams.map((team) => (
          <div key={team.name} className='relative max-w-sm group'>
                <Image src={team.image} alt={team.name} classNames={{

                img: "rounded-b-none rounded-t-xl ",
              }}/>
                <div className='flex flex-col  bg-default/10 rounded-b-xl px-4 py-1'>
                  <p className={`!font-semibold ${paragraph({size:"lg"})}`}>{team.name}</p>
                  <p className={paragraph({size:"md"})}>{team.position}</p>
                </div>
                <div className='flex flex-col items-center justify-center absolute z-10 top-0 h-full w-full bg-background/50 animate duration-1000 group-hover:duration-1000 ease-in-out group-hover:ease-in-out animate-appearance-out group-hover:animate-appearance-in '>
                  {team.socialMedia ? (
                  <SocialMediaLink socialMediaLinks={team.socialMedia} />
                  ) : null}
                <blockquote className={`italic empty:hidden text-default-800 ${paragraph({size:"md"})} `}>{team.quote}</blockquote>
              </div>
          </div>
      ))}
    </div>
  )
}

export { Teams};