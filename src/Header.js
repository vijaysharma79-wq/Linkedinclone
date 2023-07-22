import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Headeroption from './Headeroption';
import { useSelector} from 'react-redux/es/hooks/useSelector';

import {Avatar} from "@mui/material"
import { selectUser } from './features/Userslice';
const Header = () => {
  const user =useSelector(selectUser)
  console.log(user)
  return (
    <div className='header'>
    <div className='header_left'>
        <div className='header_logo'>
<img src='images/001-linkedin.png'></img>
        </div>
        <div className='header_search'>
            <SearchIcon/>
            <input type='text'></input>
        </div>
    </div>
    <div className='header_right'>
        <Headeroption Icon={HomeIcon} title={"Home"}/>
        <Headeroption Icon={PeopleAltIcon} title={"MyNetwork"}/>
        <Headeroption Icon={BusinessCenterIcon} title={"Jobs"}/>
        <Headeroption Icon={MessageIcon} title={"Messaging"}/>
        <Headeroption Icon={NotificationsIcon} title={"Notification"}/>
        <Headeroption Avatar={Avatar} title={user.displayName}/>


    </div>
    </div>
  )
}

export default Header