import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import VolunteerShowTile from './VolunteerShowTile'

const VolunteerShowContainer = props => {
  const [errors, setErrors] = useState(null)
  const [redirect, setRedirect] = useState(false)
  const [volunteer, setVolunteer] = useState({})

  const volunteerId = props.match.params.id

  useEffect(()=> {
    fetch(`/api/v1/users/${volunteerId}`, {
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
    .then(parsedVolunteer => {
      setVolunteer(parsedVolunteer.user)
    })
    .catch(error => console.error(`Error in fetch: ${errorMessage}`))
  }, [])

  return (
    <div>
      {errors}
      <VolunteerShowTile
        volunteer={volunteer}
        id={volunteerId}
      />
    </div>
  )
}

export default VolunteerShowContainer
