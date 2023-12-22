

import { AnimatedDivLeftRightUpDown, AnimatedShow } from '@/components/animation/animatedDiv';
import { paragraph, title } from '@/components/primitives';
import { Services } from '@/types/aboutType';
import { Card, CardFooter, CardHeader, Image } from '@nextui-org/react';
import React from 'react'

type aboutServicesProps = {
    aboutServices: Services[],
}

const AboutServices = ({aboutServices}: aboutServicesProps) => {
  return (
    <div className='max-w-7xl mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32'>

        {aboutServices.map((services, index) => (
          <AnimatedDivLeftRightUpDown key={services.title} direction="right" delay={index} className="w-full h-full">
            <Card shadow="none" isBlurred>
              <CardHeader className="gap-2 md:gap-4">
                <Image src={services.image} alt={services.title} width={100} height={100} className="rounded-full w-20 h-20"/>
                <p className={title({size:"xl"})}>{services.title}</p>
              </CardHeader>
              <CardFooter>
                <p className={paragraph({size:"lg"})}>{services.description}</p>
              </CardFooter>
            </Card>
          </AnimatedDivLeftRightUpDown>
        ))}
    </div>
  )
};

export { AboutServices};
