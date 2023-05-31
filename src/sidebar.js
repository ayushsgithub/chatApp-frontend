import React from 'react'
import "./sidebar.css"
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar, IconButton } from '@mui/material';
import SidebarChat from './sidebarChat';


const sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-header">
            <Avatar src='https://cdn-icons-png.flaticon.com/512/3380/3380934.png'/>
            <div className="sidebar-headerRight">
                <IconButton>
                <DonutLargeIcon />
                </IconButton>
                <IconButton>
                <ChatIcon />
                </IconButton>
                <IconButton>
                <MoreVertIcon />
                </IconButton>
                
            </div>
        </div>

        <div className="sidebar-search">
            <div className="sidebar-searchContainer">
                <SearchOutlinedIcon />
                <input type="text" placeholder='Search Or Start New Chat' />
            </div>
        </div>

        <div className="sidebar-chats">
            <SidebarChat roomName="Valorant" lastMessage="Don't worry guys,they say I'm a prodigy! 🚀" profilePic={"https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/valwide_2560x1440-99f1632f76e12ddc17d4245a74f29fc5"}/>
            <SidebarChat roomName="Call Of Duty" lastMessage="Revenge is like a ghost....⚔
" profilePic={"https://cdn.oneesports.gg/cdn-data/2022/11/COD_Warzone_2.jpg"}/>
            <SidebarChat roomName="PUBG" lastMessage="Wake me when you need me" profilePic={"https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduRJpDeZG0Hnb0yjf2nWqO7VaGKL10-G5UIygxED-WNOc3pg"}/>
            
            
        </div>
    </div>
  )
}

export default sidebar