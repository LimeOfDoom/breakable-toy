import React from 'react'
import { Link } from 'react-router-dom'

const RepIndexTile = props => {
  const name = `${props.representative.first_name} ${props.representative.last_name}`

  return(
    <div className="boxout">
      <h5 className="names-big">
        <Link to={`/organizations/${props.orgId}/users/${props.representative.id}`}>{name}</Link>
      </h5>
    </div>
  )
}

export default RepIndexTile
