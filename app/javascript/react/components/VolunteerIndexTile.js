import React from 'react'
import { Link } from 'react-router-dom'

const VolunteerIndexTile = props => {
  const name = `${props.volunteer.first_name} ${props.volunteer.last_name}`

  return(
    <div className="boxout">
      <h3 className="names-big">
        <Link to={`/users/${props.volunteer.id}`}>{name}</Link>
      </h3>
    </div>
  )
}

export default VolunteerIndexTile
