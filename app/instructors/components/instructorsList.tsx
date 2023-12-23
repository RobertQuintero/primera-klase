"use client";
import React from 'react'
import {Button, Image, Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import { paragraph } from '@/components/primitives';
import { SocialMediaLink } from '@/components/links/socialMediaLink';
import { instructorsType } from '@/types/instructorsType';
import { UserIcon } from '@heroicons/react/24/outline';

type instructorsListProps = {
    instructors: instructorsType[];
}

const InstructorsList = ({instructors}:instructorsListProps) => {
  return (
    <div className='max-w-7xl mx-auto  grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32'>
      {instructors.map((instructor) => (
        <Popover placement="right">
            <PopoverTrigger>
                   <div className='w-full h-full max-w-lg'>
                    <Image src={instructor.portfolioImages[1].image} alt={instructor.fullName} width={300} height={300} className="rounded-lg w-32 h-full" />
                  </div>
            </PopoverTrigger>
            <PopoverContent>
                <div className="px-1 py-2">
                  <p> {instructor.fullName} </p>
                  <p>{instructor.gender}</p>




                  <div className="flex flex-col">
                      {instructor.socialMedia ? (
                      <SocialMediaLink socialMediaLinks={instructor.socialMedia} />
                      ) : null}
                  </div>
                </div>

            </PopoverContent>
        </Popover>
      ))}
    </div>
  )
}

export { InstructorsList};