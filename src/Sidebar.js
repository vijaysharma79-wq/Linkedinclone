import React from 'react'
import './sidebar.css'
import { Avatar } from '@mui/material'
import { useSelector} from 'react-redux/es/hooks/useSelector';
import { selectUser } from './features/Userslice';


const Sidebar = () => {
  const user =useSelector(selectUser)

  return (
    <div className='sidebar'>
      <div className='sidebar_profile'>
        <img src='https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?size=626&ext=jpg&ga=GA1.2.1846853909.1676907667&semt=sph'></img>
        <div className='profile_details'>
          <Avatar 
          src={user.photorl}
          />
          <h4>{user.displayName}</h4>
          <p>web developer</p>
        </div>
        <div className='profile_stats'>
        <span> who viewed your profile</span>
        <span className='stat_number'> 20</span>
      </div>
      <div className='profile_stats'>
        <span> connnection <br/> <b>grow your network</b></span>
        <span className='stat_number'> 150</span>
        </div>
      </div>
      <div className='sidebar_recent'>
        <p>recent</p>
        <p className='hash'><span>#</span>branding</p>
        <p className='hash'><span>#</span>marketing</p>
        <p className='hash'><span>#</span>webdevelopment</p>
        <p className='hash'><span>#</span>react js</p>
        <p className='hash'><span>#</span>node js</p>


      </div>
    </div>
  )
}

export default Sidebar