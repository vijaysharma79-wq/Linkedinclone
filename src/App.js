import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import { loginuser, logoutuser, selectUser } from './features/Userslice';
import { useSelector} from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux'

import { useEffect } from 'react';
import { auth } from './Firebase';
import Rsidebar from './Rsidebar';
function App() {

const user=useSelector(selectUser)
const dispatch=useDispatch()
useEffect(()=>{
auth.onAuthStateChanged((userAuth)=>{
if(userAuth){
  dispatch(loginuser({
    email:userAuth.email,
    uid:userAuth.uid,
    photorl:userAuth.photoURL,
    displayName:userAuth.displayName
  }))
}
else{
  dispatch(logoutuser())
}
})
},[])

  return (
    <>
    {
      !user?(<Login/>):(
        <div className='app_wrapper'>
        <Header/>
    <div className='app_body'>
      <Sidebar/>
      <Feed/>
      <Rsidebar/>
    </div>
      </div>
      )
    }

    </>
  );
}

export default App;
