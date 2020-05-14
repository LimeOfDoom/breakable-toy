import React from 'react'

const RepShowTile = props => {
  const name = `${props.representative.first_name} ${props.representative.last_name}`

  return(
    <div className="boxout">
      <h2 className="names-big">{name}</h2>
    </div>
  )
}

export default RepShowTile
