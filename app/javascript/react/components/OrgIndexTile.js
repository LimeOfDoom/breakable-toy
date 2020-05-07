import React from 'react'
import { Link } from 'react-router-dom'

const OrgIndexTile = props => {
  const name = props.organization.name

  return(
    <div>
      <h3>
        <Link to={`/organizations/${props.organization.id}`}>{name}</Link>
      </h3>
    </div>
  )
}

export default OrgIndexTile