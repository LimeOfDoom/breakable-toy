import React from 'react'

const MessageTile = props => {
  
  let messageClass = "cell small-6 message"
    if (props.senderId === props.currentUserId){
      messageClass += " text-right"
    }

    return (
      <div className="cell small-6">
        <p className={messageClass}>{props.body}</p>
      </div>
    )
  }

export default MessageTile
