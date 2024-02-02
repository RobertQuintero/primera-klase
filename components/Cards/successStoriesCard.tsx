// testimonial.tsx component
import { paragraph, title } from '@/components/primitives'
import { SuccessStories } from '@/types/successStoriesType'
import { Avatar, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import React from 'react'
import { DateComponent } from '../time/date'


type successStoriesProps = {
    successStories: SuccessStories,
    className?: string
}

const SuccessStoriesCard = ({successStories,className}:successStoriesProps ) => {
  return (
    <Card className={`p-3  border border-warning/30 bg-warning/5 dark:bg-warning/5 ${className}`} isPressable radius="none" isBlurred shadow="none" >
        <CardHeader>
            <Avatar src={successStories.image} className='w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 mr-4' />
            <div className='flex flex-col'>
                <p className={title({size:"md"})}>{successStories.name}</p>
                <div className='flex flex-wrap'>
                    <p className={`after:text-default-600 after:mx-2 after:content-['at'] empty:hidden ${paragraph({size:"xs"})}`}>{successStories.profession}</p>
                    <p className={paragraph({size:"xs"})}>{successStories.companyOrAffiliation}</p>
                </div>
            </div>
        </CardHeader>
        <CardBody>
            <p className={paragraph({size:"sm"})}>{successStories.successStory}</p>
            <ul className='list-inside mt-4'>
                {successStories.achievements.map((achievement) => (
                    <li key={achievement.title} className='flex flex-col'>
                        <div className='flex flex-row'>
                            <p className={paragraph({size:"xs"})}>{achievement.title}</p>
                            <p className={paragraph({size:"xs"})}>{achievement.date}</p>
                        </div>
                        <blockquote className={paragraph({size:"xs"})}>{achievement.description}</blockquote>
                    </li>
                ))}
            </ul>
        </CardBody>
        <CardFooter className='flex-row-reverse'>
             <DateComponent className={paragraph({size:"xs"})} Date={successStories.date}/>
        </CardFooter>
    </Card>
  )
}

export {SuccessStoriesCard};