import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import OrgShowTile from './OrgShowTile'

const OrgShowContainer = props => {
  const [errors, setErrors] = useState(null)
  const [redirect, setRedirect] = useState(false)
  const [organization, setOrganization] = useState({})

  const organizationId = props.match.params.id

  useEffect(()=> {
    fetch(`/api/v1/organizations/${organizationId}`, {
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
    .then(parsedOrganization => {
      setOrganization(parsedOrganization.organization)
    })
    .catch(error => console.error(`Error in fetch: ${errorMessage}`))
  }, [])

  return (
    <div>
      {errors}
      <OrgShowTile
        organization={organization}
        id={organizationId}
      />
    </div>
  )
}

export default OrgShowContainer
