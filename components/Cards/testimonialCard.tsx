// testimonial.tsx component
import { paragraph, title } from '@/components/primitives'
import { Testimonials } from '@/types/testimonialsType'
import { Avatar, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import React from 'react'
import { DateComponent } from '../time/date'


type testimonialProps = {
    testimonial: Testimonials,
}

const TestimonialCard = ({testimonial}:testimonialProps ) => {
  return (
    <Card className='max-w-sm p-3 border border-warning/30 bg-warning/5 dark:bg-warning-50/10' radius="none" isBlurred shadow="none" >
        <CardHeader>
            <Avatar src={testimonial.image} className='w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 mr-4' />
            <div className='flex flex-col'>
                <p className={title({size:"md"})}>{testimonial.name}</p>
                <div className='flex flex-wrap'>
                    <p className={`after:text-default-600 after:mx-2 after:content-['at'] empty:hidden ${paragraph({size:"xs"})}`}>{testimonial.profession}</p>
                    <p className={paragraph({size:"xs"})}>{testimonial.companyOrAffiliation}</p>
                </div>
            </div>
        </CardHeader>
        <CardBody>
            <blockquote className={paragraph({size:"sm"})}>{testimonial.testimonial}</blockquote>
        </CardBody>
        <CardFooter className='flex-row-reverse'>
                <DateComponent className={paragraph({size:"xs"})} Date={testimonial.date}/>
        </CardFooter>
    </Card>
  )
}

export {TestimonialCard};