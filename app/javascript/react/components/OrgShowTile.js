import React from 'react'
import { Link } from 'react-router-dom'

const OrgShowTile = props => {

  return(
    <div>
      <h2>{props.organization.name}</h2>
    </div>
  )
}

export default OrgShowTile
