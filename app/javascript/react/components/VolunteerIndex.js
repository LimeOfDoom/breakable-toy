import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import VolunteerIndexTile from './VolunteerIndexTile'

const VolunteerIndex = props => {
  const [volunteers, setVolunteers] = useState([])

  useEffect(()=> {
    fetch('/api/v1/users', {
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
    .then(parsedVolunteers => {
      setVolunteers(parsedVolunteers.users)
    })
    .catch(error => console.error(`Error in fetch: ${errorMessage}`))
  }, [])


  const volunteersList = volunteers.map(volunteer => {
    if (volunteer.role == "volunteer") {
      return (
        <VolunteerIndexTile
          key={volunteer.id}
          volunteer={volunteer}
        />
      )
    }
  })

 return (
    <div>
      {volunteersList}
    </div>
  )
}

export default VolunteerIndex
