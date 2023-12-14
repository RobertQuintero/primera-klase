// testimonials.tsx

import { SuccessStoriesCard } from '@/components/Cards/successStoriesCard';
import { SuccessStories } from '@/types/successStoriesType';
import React from 'react'

type aboutSuccessStoriesProps = {
    aboutSuccessStories: SuccessStories[];
}

const AboutSuccessStories = ({aboutSuccessStories}:aboutSuccessStoriesProps) => {
  return (
    <React.Fragment>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 ">
              {aboutSuccessStories.map((successStory) => (
                  <SuccessStoriesCard successStories={successStory}/>
              ))}
          </div>
    </React.Fragment>
  )
}

export { AboutSuccessStories};