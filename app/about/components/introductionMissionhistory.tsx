import { AnimatedDivLeftRightUpDown, AnimatedShow } from '@/components/animation/animatedDiv';
import { paragraph, title } from '@/components/primitives';
import { aboutType } from '@/types/aboutType';
import React from 'react'

type introductionMissionHistoryProps = {
    introductionMissionHistory: aboutType;
}

const IntroductionMissionHistory = ({introductionMissionHistory}:introductionMissionHistoryProps) => {
  return (
    <div className='flex flex-col'>
      <div className='place-self-end max-w-sm md:max-w-lg xl:max-w-3xl py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32'>
        <AnimatedDivLeftRightUpDown direction='right'>
          <p className={paragraph({size:"xl"})}>{introductionMissionHistory.introduction}</p>
        </AnimatedDivLeftRightUpDown>
      </div>
      <div className='max-w-sm md:max-w-lg xl:max-w-3xl py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32'>
        <AnimatedDivLeftRightUpDown direction='left'>
          <p className={paragraph({size:"xl"})}>{introductionMissionHistory.mission}</p>
        </AnimatedDivLeftRightUpDown>
      </div>
      <div className='place-self-end max-w-sm md:max-w-lg xl:max-w-3xl  py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32'>
          <AnimatedDivLeftRightUpDown direction='right' >
            <h2 className='text-default-900/5 text-[10rem] sm:text-[14rem] lg:text-[18rem] xl:text-[20rem]'>History</h2>
          </AnimatedDivLeftRightUpDown>
          <AnimatedDivLeftRightUpDown direction='right' delay={1}>
            <p className={paragraph({size:"xl"})}>{introductionMissionHistory.history}</p>
          </AnimatedDivLeftRightUpDown>
      </div>
    </div>
  )
}

export { IntroductionMissionHistory};