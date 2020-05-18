import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import VolunteerShowTile from './VolunteerShowTile'
import MessageForm from './MessageForm'
import MessageTile from './MessageTile'

const VolunteerShowContainer = props => {
  const [errors, setErrors] = useState(null)
  const [redirect, setRedirect] = useState(false)
  const [volunteer, setVolunteer] = useState({
    id: "",
    email: "",
    first_name: "",
    last_name: "",
    organization: "",
    role: "",
    created_at: "",
    updated_at: ""
  })
  const [messages, setMessages] = useState()

  const volunteerId = props.match.params.id
  let messageList = []
  let messageForm = ""

  useEffect(()=> {
    getUser()
  }, [])

  const getUser = () => {
    fetch(`/api/v1/users/${volunteerId}`, {
      credentials: "same-origin"
    })
    .then(response =>{
      if(response.ok) {
        return response
      } else {
        if(response.status === 404){
          setRedirect(true)
        } else {
          let errorMessage = `${response.status} (${response.statusText})`
          let error = new Error(errorMessage)
          throw(error)
        }
      }
    })
    .then(response => response.json())
    .then(parsedVolunteer => {
      setVolunteer(parsedVolunteer.user.user)
      setMessages(parsedVolunteer.messages)
    })
    .catch(error => console.error(`Error in fetch: ${errorMessage}`))
  }

  if (messages != null) {
    messageList = messages.map(message => {
      return (
        <MessageTile
          key={message.id}
          body={message.body}
          senderId={message.sender_id}
          currentUserId={volunteerId}
        />
      )
    })
  }

  if (messages != null) {
    messageForm = <MessageForm
    conversationId={messages[0].conversation_id}
    getUser={getUser}
    />
  }

  if(redirect) {
   return <Redirect to={`/users/${volunteerId}`} />
  }

  return (
    <div>
      <div className="gimme-space">
        <div className="callout">
          <div>
            {errors}
            <VolunteerShowTile
            volunteer={volunteer}
            id={volunteerId}
            />
          </div>
          <div className="message-outline">
            {messageList}
          </div>
          <div>
            {messageForm}
          </div>
        </div>
      </div>
        <div className="bottom-bar">
          <p>
            <Link to='/users'><strong>Back to all the Volunteers</strong></Link> or
            <Link to='/organizations'><strong> See the Non-Profits</strong></Link>
          </p>
      </div>
    </div>
  )
}

export default VolunteerShowContainer
