

import { paragraph, title } from '@/components/primitives';
import { Services } from '@/types/aboutType';
import { Card, CardFooter, CardHeader, Image } from '@nextui-org/react';
import React from 'react'

type aboutServicesProps = {
    aboutServices: Services[],
}

const AboutServices = ({aboutServices}: aboutServicesProps) => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {aboutServices.map((services) => (
          <Card shadow="none" isBlurred >
            <CardHeader className="">
              <Image src={services.image} alt={services.title} width={100} height={100} className="rounded-full w-16 h-16"/>
              <p className={title({size:"lg"})}>{services.title}</p>
            </CardHeader>
            <CardFooter>
              <p className={paragraph({size:"md"})}>{services.description}</p>
            </CardFooter>
          </Card>
        ))}
    </div>
  )
};

export { AboutServices};
