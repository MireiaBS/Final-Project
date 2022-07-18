import React from 'react'
import firebaseApp from '../credenciales'
import {getAuth,signOut} from "firebase/auth"

const auth = getAuth(firebaseApp)

export const Home = () => {
  return (
    <>
    <div>Home</div>
    <button onClick={() => signOut(auth)}> Cerrar sesion</button>
    </>
  )
}
