// testimonials.tsx

import { SuccessStoriesCard } from '@/components/Cards/successStoriesCard';
import { SuccessStories } from '@/types/successStoriesType';
import React from 'react'

type successStoriesListProps = {
    successStories: SuccessStories[];
}

const SuccessStoriesList = ({successStories}:successStoriesListProps) => {
  return (
    <React.Fragment>
          <div className="max-w-7xl mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32">
              {successStories.map((successStory) => (
                  <SuccessStoriesCard successStories={successStory}/>
              ))}
          </div>
    </React.Fragment>
  )
}

export { SuccessStoriesList};