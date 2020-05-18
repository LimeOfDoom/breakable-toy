import React, { useState } from "react"

const MessageForm = props => {
  const defaultForm = {body: ""}
  const [formFields, setFormFields] = useState(defaultForm)

  const handleChange = event => {
    setFormFields({
      ...formFields,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    fetch(`/api/v1/conversations/${props.conversationId}/reply`, {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(formFields),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if(response.ok) {
        props.getUser()
        setFormFields(defaultForm)
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
        let error = new Error(errorMessage)
        throw(error)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="body" className="names-small">Add to the Conversation</label>
        <textarea className="callout-field" id="body" name="body" onChange={handleChange} value={formFields.body} />
      </div>

      <div className="form-actions">
        <input type="submit" value="Submit" className="message-button" />
      </div>
    </form>
  )
}

export default MessageForm
