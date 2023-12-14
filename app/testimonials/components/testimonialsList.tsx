// testimonials.tsx
import { TestimonialCard } from '@/components/Cards/testimonialCard';
import { Testimonials } from '@/types/testimonialsType';
import React from 'react'

type testimonialsProps = {
    testimonialsList: Testimonials[];
}

const TestimonialsList = ({testimonialsList}:testimonialsProps) => {
  return (
    <React.Fragment>
      <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full h-full ">
                {testimonialsList.map((testimonial) => (
                    <TestimonialCard testimonial={testimonial} />
                ))}
          </div>
      </div>
    </React.Fragment>
  )
}

export { TestimonialsList};