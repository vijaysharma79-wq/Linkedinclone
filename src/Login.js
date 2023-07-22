import React, { useState } from 'react'
import './login.css'
import { auth } from './Firebase'
import { useDispatch } from 'react-redux'
import { loginuser } from './features/Userslice'



const Login = () => {
const dispatch=useDispatch()

  const[signup,setSignup]=useState(false)
  const[name,setName]=useState("")
  const[photourl,setPhotourl]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const register=(e)=>{
  e.preventDefault()
  if(!name){
    return alert("name is required")
  }
  if(!photourl){
    return alert("photo is required")
  }  if(!email){
    return alert("mail is required")
  }  if(!password){
    return alert("password is required")
  }
  auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
    userAuth.user.updateProfile({
      displayName:name,
      photoURL:photourl
    }).then(()=>{
      dispatch(loginuser({
        email:userAuth.user.email,
        uid:userAuth.user.uid,
        photourl:photourl,
        displayName:name
      }))
    })
  }).catch(error=>console.log(error))
  setName("")
  setPhotourl("")
  setEmail("")
  setPassword("")
}
const signIn=(e)=>{
  e.preventDefault()
  if(!email){
    return alert("mail is required")
  }  if(!password){
    return alert("password is required")
  }
  auth.signInWithEmailAndPassword(email,password).then(({user})=>{
    console.log(user)
    dispatch(loginuser({
      email:user.email,
      uid:user.uid,
      photourl:photourl,
      displayName:user.displayName
    }))
  }).catch(error=>alert(error))
}

  return (
    <>
    

    <div className='login_screen'>
      <img src='https://content.linkedin.com/content/dam/brand/site/img/logo/logo-hero.png'></img>
    {
      signup===true?(<form onSubmit={register}>
        <input type='text' placeholder='full name' value={name} onChange={e=>setName(e.target.value)}></input>
        <input type='text' placeholder='profile picture url' value={photourl} onChange={e=>setPhotourl(e.target.value)}></input>
        <input type='email' placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}></input>
        <input type='password' placeholder='password' value={password} onChange={e=>setPassword(e.target.value)}></input>
        <input type='submit'  value="signup"></input>
    
    <h4>Alreat a remember?<span onClick={e=>setSignup(false)}>Login here</span></h4>
    </form>):(<form onSubmit={signIn}>
    <input type='email' placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}></input>
    <input type='password' placeholder='password' value={password} onChange={e=>setPassword(e.target.value)} ></input>
    <input type='submit'  value="sign in"></input>

<h4>not a member?<span onClick={e=>setSignup(true)}>resgister here here</span></h4>
</form>)
    }

      


    </div>
    </>
  )
}

export default Login