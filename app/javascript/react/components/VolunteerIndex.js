import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import VolunteerIndexTile from './VolunteerIndexTile'

const VolunteerIndex = props => {
  const [errors, setErrors] = useState(null)
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
    if (volunteer.role.toLowerCase() == "volunteer") {
      return (
        <VolunteerIndexTile
          key={volunteer.id}
          volunteer={volunteer}
        />
      )
    }
  })

 return (
   <div className="gimme-space">
    <div className="callout">
      <div>
        {errors}
        {volunteersList}
      </div>
    </div>
    <div className="bottom-bar">
      <Link to='/organizations'><strong>See the Non-Profits</strong></Link>
    </div>
  </div>
  )
}

export default VolunteerIndex
