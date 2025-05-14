import { useState } from 'react'
 
 
import './App.css'
import Login from './components/login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
 

  return (
    <UserContextProvider>
       <Login/>
       <div>profile</div>
       <Profile/>
    </UserContextProvider>
  )
}

export default App
