// faqs component
import { aboutType } from '@/types/aboutType';
import { faqsType } from '@/types/faqsType';
import React from 'react'

type faqsProps = {
    faqs: faqsType[];
}

const Mission = ({faqs}:faqsProps) => {
  return (
    <div>
        {faqs.map((faq) => (
            <div key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
            </div>
        ))}
    </div>
  )
}

export { Mission};