import React from 'react'
import { useState, useEffect } from 'react';
import { Home } from './componentes/Home';
import { Login } from './componentes/Login';
import "./css/css.css"
import firebaseApp from './credenciales';
import {getAuth, onAuthStateChanged} from "firebase/auth"

const auth = getAuth(firebaseApp);

function App() {
  
  
  const [user, setUser] = useState(false)
  
  onAuthStateChanged(auth, (usuarioFirebase) => {

    if(usuarioFirebase) {
      // codigo ara sesion iniciada
      setUser(usuarioFirebase)
    } else {
      // codigo en caso de que no haya sesion iniciada
      setUser(null)
    }
  })
  
  
  return <>{user ? <Home/> : <Login />} </>
}

export default App;
