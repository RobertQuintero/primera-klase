// testimonials.tsx

import { TestimonialCard } from '@/components/Cards/testimonialCard';
import { Testimonials } from '@/types/testimonialsType';
import React from 'react'

type testimonialsProps = {
    aboutTestimonials: Testimonials[];
}

const AboutTestimonials = ({aboutTestimonials}:testimonialsProps) => {
  return (
    <React.Fragment>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 break-inside-avoid h-auto">
              {aboutTestimonials.map((testimonial) => (
                  <div className='break-inside-avoid h-auto'>
                  <TestimonialCard testimonial={testimonial}/>
                  </div>
              ))}
          </div>
    </React.Fragment>
  )
}

export { AboutTestimonials};