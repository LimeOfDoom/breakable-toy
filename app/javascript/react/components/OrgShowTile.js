import React from 'react'
import { Link } from 'react-router-dom'

const OrgShowTile = props => {

  return(
    <div>
      <div>
        <h2 className="names-big">{props.organization.name}</h2>
      </div>
    </div>
  )
}

export default OrgShowTile
