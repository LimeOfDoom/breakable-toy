import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import RepShowTile from './RepShowTile'

const RepShowContainer = props => {
  const [errors, setErrors] = useState(null)
  const [representative, setRepresentative] = useState({})

  const repId = props.match.params.id
  const orgId = representative.organization_id

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
    <div className="gimme-space">
      <div className="callout">
        {errors}
        <RepShowTile
          representative={representative}
        />
      </div>
      <div className="bottom-bar">
        <p>
          <Link to={`/organizations/${orgId}`}><strong>Back to the Non-Profit</strong></Link> or
          <Link to='/organizations'><strong> Back all the Non-Profits</strong></Link> or
          <Link to='/users'><strong> See the Volunteers</strong></Link>
        </p>
      </div>
    </div>
  )
}

export default RepShowContainer
