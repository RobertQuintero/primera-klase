import { teamsType } from '@/types/teamsType';
import React from 'react'

type teamsProps = {
    teams: teamsType[];
}

const Teams = ({teams}:teamsProps) => {
  return (
    <div>
      {teams.map((team) => (
          <div key={team.name}>
              <img src={team.image} alt={team.name} />
              <h3>{team.name}</h3>
              <h4>{team.position}</h4>
              <p>{team.quote}</p>
          </div>
      ))}
    </div>
  )
}

export { Teams};