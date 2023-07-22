import { Avatar } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './post.css'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import CommentIcon from '@mui/icons-material/Comment';
import { useSelector} from 'react-redux/es/hooks/useSelector';
import { selectUser } from './features/Userslice';
const Post = ({description,message}) => {
  const user =useSelector(selectUser)
  return (
    <div className='posts'>
        <div className='post_header'>
        <div className='post_header_left'>
               <Avatar
               src={user.photorl}
               />
               <div className='post_profile'>
                <h3>{user.displayName} </h3>
                <p>{description}</p>
                    </div> 
                </div>
       <MoreVertIcon/>
        </div>
        <div className='post_body'>
            <p>{message}</p>
        </div>
        <div className='post_footer'>
            <div className='post-footer_option'>
            <ThumbUpAltIcon />
<span>like</span>
            </div>
            <div className='post-footer_option'>
            <CommentIcon />
<span>comment</span>
            </div><div className='post-footer_option'>
            <ShareIcon />
<span>share</span>
            </div><div className='post-footer_option'>
            <SendIcon />
<span>send</span>
            </div>
        </div>
    </div>
  )
}

export default Post