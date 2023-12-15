
import { Values } from '@/types/aboutType';
import { Card, CardFooter, CardHeader, Image } from '@nextui-org/react';
import React from 'react'

type aboutValuesProps = {
    aboutValues: Values[];
}

const AboutValues = ({aboutValues = [] }: aboutValuesProps) => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {aboutValues.map((values) => (
            <Card shadow="none" isBlurred>
              <CardHeader className="">
                <Image src={values.image} width={200} height={200} />
                <h3>{values.title}</h3>
              </CardHeader>
              <CardFooter>
                <p>{values.description}</p>
              </CardFooter>
            </Card>
        ))}
    </div>
  )
};

export { AboutValues};
