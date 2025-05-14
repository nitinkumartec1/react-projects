import React from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
  return (
    <div>Followers :{data.followers}
      <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/nitinkumartec1')
    return response.json()
}
