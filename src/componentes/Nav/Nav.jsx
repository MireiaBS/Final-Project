import React from 'react'
import '../Nav/nav.css'
import { Home } from '../Home/Home'
import { Login } from '../Login/Login'
import firebaseApp from '../../credenciales'
import {getAuth,signOut} from "firebase/auth"
import logo from '../../assets/img/logo.png'
import insta from '../../assets/img/instagram.png'
import facebook from '../../assets/img/facebook.png'

export const Nav = ( {user}) => {
  return (<div className='container'>
        <div className='div-content'>
            <img src={logo}  className='logo'/>
            <div className='div-redes'> {user ? <Home/> : <Login/> }</div>       
        </div>
        <div className='parent'>
          <div className='div1'>
            <p>Inici</p>
          </div>
          <div className='div2'>
            <p>Qui som</p>
          </div>
          <div className='div3'>
            <p>Espectacles</p>
          </div>
          <div className='div4'> 
            <p>Contacte amb nosaltres </p>                         
          </div>
          <div className='div5'>
            <a href='https://instagram.com/vaquetes_guinardo?igshid=YmMyMTA2M2Y='><img className='redes' src={insta} height='30' width='30' /></a>
            <a href='https://www.facebook.com/vaquetesdelguinardo'><img className='redes' src={facebook} height='30' width='30'/> </a>    
          </div>
        </div>
    </div>
  )
}
