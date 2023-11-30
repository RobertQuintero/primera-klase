

import { Services } from '@/types/aboutType';
import { Image } from '@nextui-org/react';
import React from 'react'

type aboutServicesProps = {
    aboutServices: Services[],
}

const AboutServices = ({aboutServices}: aboutServicesProps) => {
  return (
    <div>
        {aboutServices.map((services) => (
            <div key={services.title}>
                <Image src={services.image} width={200} height={200} />
                <h3>{services.title}</h3>
                <p>{services.description}</p>
            </div>
        ))}
    </div>
  )
};

export { AboutServices};
