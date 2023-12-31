// testimonial.tsx component
import { paragraph, title } from '@/components/primitives'
import { SuccessStories } from '@/types/successStoriesType'
import { Avatar, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import React from 'react'
import { DateComponent } from '../time/date'


type successStoriesProps = {
    successStories: SuccessStories,
}

const SuccessStoriesCard = ({successStories}:successStoriesProps ) => {
  return (
    <Card className='max-w-lg p-3  border' radius="none" isBlurred shadow="none" >
        <CardHeader>
            <Avatar src={successStories.image} className='w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 mr-4' />
            <div className='flex flex-col'>
                <p className={title({size:"md"})}>{successStories.name}</p>
                <div className='flex flex-wrap'>
                    <p className={`after:text-default-600 after:mx-2 after:content-['at'] empty:hidden ${paragraph({size:"sm"})}`}>{successStories.profession}</p>
                    <p className={paragraph({size:"sm"})}>{successStories.companyOrAffiliation}</p>
                </div>
            </div>
        </CardHeader>
        <CardBody>
            <p className={paragraph({size:"sm"})}>{successStories.successStory}</p>
            <ul className='list-inside mt-4'>
                {successStories.achievements.map((achievement) => (
                    <li className='flex flex-col'>
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