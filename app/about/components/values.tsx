
import { Values } from '@/types/aboutType';
import { Image } from '@nextui-org/react';
import React from 'react'

type aboutValuesProps = {
    aboutValues: Values[];
}

const AboutValues = ({aboutValues = [] }: aboutValuesProps) => {
  return (
    <div>
        {aboutValues.map((values) => (
            <div key={values.title}>
                <Image src={values.image} width={200} height={200} />
                <h3>{values.title}</h3>
                <p>{values.description}</p>
            </div>
        ))}
    </div>
  )
};

export { AboutValues};
