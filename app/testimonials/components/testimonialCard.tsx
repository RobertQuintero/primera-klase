// testimonial.tsx component
import { paragraph, title } from '@/components/primitives'
import { Testimonials } from '@/types/testimonialsType'
import { Avatar, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import React from 'react'


type testimonialProps = {
    testimonial: Testimonials,
}

const TestimonialCard = ({testimonial}:testimonialProps ) => {
  return (
    <Card className='max-w-sm'>
        <CardHeader>
            <Avatar src={testimonial.image} className='w-10 h-10 md:w-12 md:h-12 2xl:w-14 2xl:h-14' />
            <div className='flex flex-col'>
                <p className={paragraph({size:"md"})}>{testimonial.name}</p>
                <div className='flex flex-wrap'>
                    <p className={paragraph({size:"sm"})}>{testimonial.profession}</p>
                    <p className={paragraph({size:"sm"})}>{testimonial.companyOrAffiliation}</p>
                </div>

            </div>
        </CardHeader>
        <CardBody>
            <p>{testimonial.testimonial}</p>
        </CardBody>
        <CardFooter>
            <p>{testimonial.date}</p>
        </CardFooter>
    </Card>
  )
}

export {TestimonialCard};