import "./App.css";
import Sidebar from "./sidebar";
import Chat from "./chat";
import { useEffect, useState } from "react";
import Pusher from "pusher-js"
import axios from "./axios"

function App() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get("/messages/sync")
      .then((response) => setMessages(response.data))
  }, [])

  useEffect(() => {
    const pusher = new Pusher('b8255243c6e1dc4858f6', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])

  console.log(messages)

  return (
    <div className="app">
    <div className="app-body">
      <Sidebar />
      <Chat messages={messages}/>
    </div>
  </div> 
  
    
  );
}

export default App;





