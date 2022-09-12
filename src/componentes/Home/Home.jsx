import React from 'react'
import '../Home/home.css'
import firebaseApp from '../../credenciales'
import {getAuth,signOut} from "firebase/auth"
import userImg from '../../assets/img/user.png'

const auth = getAuth(firebaseApp)

export const Home = () => {
  return (
    <div className='div-login'>      
      <img src={userImg} className='login-img'/>
      <div className='login-text'>
        <p className='p-hello'> Hola de nou!   </p>
        <button  className='p-hello' onClick={() => signOut(auth)}> | Tancar sessió</button>
      </div>
      
    </div>
  )
}
