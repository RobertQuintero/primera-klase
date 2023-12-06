// testimonials.tsx
import { TestimonialCard } from '@/app/testimonials/components/testimonialCard';
import { Testimonials } from '@/types/testimonialsType';
import React from 'react'

type testimonialsProps = {
    aboutTestimonials: Testimonials[];
}

const AboutTestimonials = ({aboutTestimonials}:testimonialsProps) => {
  return (
    <React.Fragment>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
              {aboutTestimonials.map((testimonial) => (
                  <TestimonialCard testimonial={testimonial}/>
              ))}
          </div>
    </React.Fragment>
  )
}

export { AboutTestimonials};