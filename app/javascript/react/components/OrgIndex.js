import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import OrgIndexTile from './OrgIndexTile'

const OrgIndex = props => {
  const [errors, setErrors] = useState(null)
  const [organizations, setOrganizations] = useState([])

  useEffect(()=> {
    fetch('/api/v1/organizations', {
      credentials: "same-origin"
    })
    .then(response => {
      if(response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
        error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(parsedOrganizations => {
      setOrganizations(parsedOrganizations.organizations)
    })
    .catch(error => console.error(`Error in fetch: ${errorMessage}`))
  }, [])


  const organizationsList = organizations.map(organization => {
    return (
      <OrgIndexTile
        key={organization.id}
        organization={organization}
      />
    )
  })

 return (
   <div className="gimme-space">
    <div className="callout">
      {errors}
      {organizationsList}
    </div>
    <div className="bottom-bar">
      <Link to='/users'><strong>See the Volunteers</strong></Link>
    </div>
  </div>
  )
}

export default OrgIndex
