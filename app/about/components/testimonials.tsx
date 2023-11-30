// testimonials.tsx
import { Testimonials } from '@/types/testimonials';
import { Image } from '@nextui-org/react';
import React from 'react'

type testimonialsProps = {
    aboutTestimonials: Testimonials[];
}

const AboutTestimonials = ({aboutTestimonials}:testimonialsProps) => {
  return (
    <div>
    {aboutTestimonials.map((testimonial) => (
        <div key={testimonial.name}>

            <Image src={testimonial.image} alt={testimonial.name} width={200} height={200}  />
            <p>{testimonial.name}</p>
            <p>{testimonial.companyOrAffiliation}</p>
            <p>{testimonial.profession}</p>
            <p>{testimonial.testimonial}</p>
            <p>{testimonial.date}</p>
        </div>
    ))}

    </div>
  )
}

export { AboutTestimonials};