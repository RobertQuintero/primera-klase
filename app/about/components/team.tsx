"use client";
import { teamsType } from '@/types/teamsType';
import React from 'react'
import {Image} from "@nextui-org/react";

type teamsProps = {
    teams: teamsType[];
}

const Teams = ({teams}:teamsProps) => {
  return (
    <div>
      {teams.map((team) => (
          <div className='grid'>
              <Image src={team.image} alt={team.name} />
              <p>{team.name}</p>
              <h4>{team.position}</h4>
              <blockquote>{team.quote}</blockquote>
          </div>
      ))}
    </div>
  )
}

export { Teams};