import React from 'react'
import { Link } from 'react-router-dom'

const VolunteerShowTile = props => {
  const name = `${props.volunteer.first_name} ${props.volunteer.last_name}`

  return(
    <div className="boxout">
      <h2 className="names-big">{name}</h2>
    </div>
  )
}

export default VolunteerShowTile
