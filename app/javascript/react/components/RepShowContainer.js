import React, { useState, useEffect } from 'react'

import RepShowTile from './RepShowTile'

const RepShowContainer = props => {
  const [representative, setRepresentative] = useState({})
  const repId = props.match.params.id

  useEffect(()=> {
    fetch(`/api/v1/users/${repId}`, {
      credentials: "same-origin"
    })
    .then(response =>{
      if(response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
          error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(parsedRepresentative => {
      setRepresentative(parsedRepresentative.user)
    })
    .catch(error => console.error(`Error in fetch: ${errorMessage}`))
  }, [])

  return(
    <RepShowTile
      representative={representative}
    />
  )
}

export default RepShowContainer
