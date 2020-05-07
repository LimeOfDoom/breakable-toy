import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import OrgIndexTile from './OrgIndexTile'

const OrgIndex = props => {
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
      setOrganizations(parsedOrganizations)
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
    <div>
      {organizationsList}
    </div>
  )
}

export default OrgIndex
