import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import OrgShowTile from './OrgShowTile'
import RepIndexTile from './RepIndexTile'

const OrgShowContainer = props => {
  const [errors, setErrors] = useState(null)
  const [redirect, setRedirect] = useState(false)
  const [organization, setOrganization] = useState({})
  const [representatives, setRepresentatives] = useState([])

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
      setRepresentatives(parsedOrganization.organization.users)
    })
    .catch(error => console.error(`Error in fetch: ${errorMessage}`))
  }, [])

  const repList = representatives.map(representative => {
    return(
      <RepIndexTile
        key={representative.id}
        orgId={organizationId}
        representative={representative}
      />
    )
  })

  return (
    <div>
      <div className="callout">
        <div>
          {errors}
          <OrgShowTile
          organization={organization}
          id={organizationId}
          />
          <h4 className="names-big">
            Representatives
          </h4>
        </div>
      <div className="callout">
        {repList}
      </div>
    </div>
      <div className="bottom-bar">
        <p>
          <Link to='/organizations'><strong>Back to all Non-Profits</strong></Link> or
          <Link to='/users'><strong> See the Volunteers</strong></Link>
        </p>
      </div>
    </div>
  )
}

export default OrgShowContainer
