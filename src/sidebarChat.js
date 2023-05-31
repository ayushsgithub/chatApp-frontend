import React from 'react'
import "./sidebarChat.css"
import {Avatar} from '@mui/material';

const sidebarChat = ({roomName, lastMessage, profilePic}) => {
  return (
    <div className='sidebarChat'>
        <Avatar src={profilePic} />
        <div className="sidebarChat-info">
            <h2>{roomName}</h2>
            <p>{lastMessage}</p>
        </div>
    </div>
  )
}

export default sidebarChat