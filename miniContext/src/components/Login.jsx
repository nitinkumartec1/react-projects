import React ,{useState} from 'react'
import { useContext } from 'react'
import UserContext from '../context/userContext'

function Login() {
    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <h2>login</h2>
      <input
       type="text" 
       placeholder='username'
       value={username}
       onChange={(e)=>{
        setUsername(e.target.value)
        className= ""
       }}/>
       {" "}
       <input
        type="text"
        placeholder='password'
        value={password}
        onChange={(e)=>{
            setPassword(e.target.value)
        }} />
        <button  onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login
