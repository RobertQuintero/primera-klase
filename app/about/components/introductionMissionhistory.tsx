import { paragraph } from '@/components/primitives';
import { aboutType } from '@/types/aboutType';
import React from 'react'

type introductionMissionHistoryProps = {
    introductionMissionHistory: aboutType;
}

const IntroductionMissionHistory = ({introductionMissionHistory}:introductionMissionHistoryProps) => {
  return (
    <div className='flex flex-col'>
      <div className='place-self-end max-w-3xl py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32'>
        <p className={paragraph({size:"xl"})}>{introductionMissionHistory.introduction}</p>
      </div>
      <div className='max-w-xl py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32'>
      <p className={paragraph({size:"lg"})}>{introductionMissionHistory.mission}</p>
      </div>
      <div className='py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32'>
       <p className={paragraph({size:"lg"})}>{introductionMissionHistory.history}</p>
      </div>
    </div>
  )
}

export { IntroductionMissionHistory};