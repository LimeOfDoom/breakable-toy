import React from 'react'
import { Link } from 'react-router-dom'

const OrgIndexTile = props => {
  const name = props.organization.name

  return(
    <div className="boxout">
      <h3 className="names-big">
        <Link to={`/organizations/${props.organization.id}`}>{name}</Link>
      </h3>
    </div>
  )
}

export default OrgIndexTile
