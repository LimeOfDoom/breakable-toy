import React from 'react'
import { Link } from 'react-router-dom'

const VolunteerShowTile = props => {
  const name = `${props.volunteer.first_name} ${props.volunteer.last_name}`

  return(
    <div>
      <h2>{name}</h2>
    </div>
  )
}

export default VolunteerShowTile
