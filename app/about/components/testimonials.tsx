// testimonials.tsx
import { TestimonialCard } from '@/app/testimonials/components/testimonialCard';
import { Testimonials } from '@/types/testimonialsType';
import React from 'react'

type testimonialsProps = {
    aboutTestimonials: Testimonials[];
}

const AboutTestimonials = ({aboutTestimonials}:testimonialsProps) => {
  return (
    <div>
    {aboutTestimonials.map((testimonial) => (
        <TestimonialCard testimonial={testimonial} />
    ))}

    </div>
  )
}

export { AboutTestimonials};