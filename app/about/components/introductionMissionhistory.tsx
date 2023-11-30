import { aboutType } from '@/types/aboutType';
import React from 'react'

type introductionMissionHistoryProps = {
    introductionMissionHistory: aboutType;
}

const IntroductionMissionHistory = ({introductionMissionHistory}:introductionMissionHistoryProps) => {
  return (
    <div>
    {introductionMissionHistory.introduction}
        <br/>
    {introductionMissionHistory.mission}
        <br/>
    {introductionMissionHistory.history}
    </div>
  )
}

export { IntroductionMissionHistory};