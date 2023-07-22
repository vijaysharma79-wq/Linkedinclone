import React, { useEffect, useState } from 'react'
import './main.css'
import { Avatar, colors } from '@mui/material'
import PhotoIcon from '@mui/icons-material/Photo';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArticleIcon from '@mui/icons-material/Article';
import TodayIcon from '@mui/icons-material/Today';
import Post from './Post';
import { db } from './Firebase';
import firebase from "firebase/compat/app"
import { useSelector} from 'react-redux/es/hooks/useSelector';
import { selectUser } from './features/Userslice';


// import  "firebase/compat/firestore"

const Feed = () => {
  const user=useSelector(selectUser)
  const [input,setinput]=useState();
  const [posts,setPost]=useState([]);

  const submitpost=(e)=>{
e.preventDefault()
db.collection("posts").add({
  name:"vijay sharma",
  description:"i am ract developer",
  message:input,
  phhotourl:"",
  timestamp:firebase.firestore.FieldValue.serverTimestamp(),
});
setinput('')
}

useEffect(()=>{
db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
setPost(snapshot.docs.map((doc)=>{
  return  {id:doc.id,
  data:doc.data()}
}))
})
},[])
  return (
    <div className='main_feed'>
    <div className='feed'>
<div className='feed_input'>
    
  <Avatar
  src={user.photorl }
  />
  <form onSubmit={submitpost}>
<input type='text' placeholder='start a post' value={input||""} onChange={e=>setinput(e.target.value)}></input>
<input type='submit'></input>
</form>
</div>
<div className='feed_options'>
  <div className='option'>
<PhotoIcon style={{color:"#70b5f9"}}/>
<span>photo</span>
  </div>
  <div className='option'>
<YouTubeIcon style={{color:"#e7a33e"}}/>
<span>video</span>
  </div> <div className='option'>
    <TodayIcon style={{color:"#e7a33e"}}/>
<span>Event</span>
  </div> <div className='option'>
<ArticleIcon style={{color:"#fc9295"}}/>

<span>write article</span>
  </div>
</div>
    </div>
    {
      posts.map(({id,data:{name,description,message,phhotourl}})=>{
      return  <Post key={id} name={name} description={description} message={message} phhotourl={phhotourl}></Post>

      })
    }
    
    

    </div>
  )
}

export default Feed;