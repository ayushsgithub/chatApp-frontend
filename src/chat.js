import React, {useState} from 'react'
import "./chat.css"
import { Avatar, IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import LogoutIcon from '@mui/icons-material/Logout';
import MicIcon from '@mui/icons-material/Mic';
import axios from "./axios"

const Chat = ( { messages } ) => {

  const [input, setInput] = useState("")
  const [rcv, setRcv] = useState(true)
  const d = new Date();
  let text = d.toLocaleString();

  const sendMessage = async (e) => {
    e.preventDefault()
    await axios.post("/messages/new", {
      message: input,
      name: "User",
      timestamp: text,
      received: rcv,
    })
    setInput("")
  }

  function changeChat(){
    alert(`chat changed to ${rcv ? "White" : "Green"}`)
    setRcv(!rcv)
  }
  
  return (
    <div className='chat'>
        <div className="chat-header">
            <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB5adlG1TVBM1tY6wRFfInFiIN1aQh2UL8HQ&usqp=CAU'/>
            <div className="chat-headerInfo">
                <h3>Apex Legends</h3>
                <p>Online</p>
                </div>

                <div className="chat-headerRight">
                <IconButton>
                <LogoutIcon />
                </IconButton>
                <IconButton>
                <AttachFileOutlinedIcon />
                </IconButton>
                <IconButton>
                <MoreVertIcon onClick={changeChat} />
                </IconButton>
                </div>
            
        </div>

        <div className='chat-body'>
          {messages.map((message) => { return(
            <p className={`chat-message ${message.received && "chat-receiver"}`} > 
            <span className='chat-name'>{message.name}</span>
            {message.message} 
            <span className='chat-timestamp'>{message.timestamp}</span>
          </p>
          )
          })}
        </div>

        <div className="chat-footer">
          <InsertEmoticonIcon />
          <form >
            <input type="text" placeholder='Type a message' value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={sendMessage} type='submit'>Send a message</button>
          </form>
          <MicIcon />
        </div>

    </div>
  )
}

export default Chat