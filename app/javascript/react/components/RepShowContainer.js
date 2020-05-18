import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import RepShowTile from './RepShowTile'

const RepShowContainer = props => {
  const [errors, setErrors] = useState(null)
  const [representative, setRepresentative] = useState({
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

  const repId = props.match.params.id
  const orgId = representative.organization_id
  let messageList = []
  let messageForm = ""

  uuseEffect(()=> {
    getUser()
  }, [])

  const getUser = () => {
    fetch(`/api/v1/users/${repId}`, {
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
    .then(parsedRepresentative => {
      setRepresentative(parsedRepresentative.user.user)
      setMessages(parsedRepresentative.messages)
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
          currentUserId={repId}
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
   return <Redirect to={`/users/${repId}`} />
  }

  return (
    <div>
      <div className="gimme-space">
        <div className="callout">
          <div>
            {errors}
            <RepShowTile
            representative={representative}
            id={repId}
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
          <Link to={`/organizations/${orgId}`}><strong>Back to the Non-Profit</strong></Link> or
          <Link to='/organizations'><strong> Back all the Non-Profits</strong></Link> or
          <Link to='/users'><strong> See the Volunteers</strong></Link>
        </p>
      </div>
    </div>
  )
}

export default RepShowContainer
