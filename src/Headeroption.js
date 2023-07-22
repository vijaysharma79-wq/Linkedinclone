import { Avatar } from '@mui/material'
import React from 'react'
import './header.css'
import { useSelector} from 'react-redux/es/hooks/useSelector';

import firebase from "firebase/compat/app"
import { selectUser } from './features/Userslice';

const Headeroption = ({Icon,title,
    Avatar}) => {
      const user=useSelector(selectUser)
  return (
    <div>
        <div className='header_options'>
            {Icon&&<Icon></Icon>}
            {Avatar&&<Avatar src={user.photorl} onClick={e=>firebase.auth().signOut()}  />
            }
            <span>{title}</span>
        </div>
    </div>
  )
}

export default Headeroption