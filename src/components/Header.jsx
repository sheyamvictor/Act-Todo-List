import React from 'react'
import { useLocation } from 'react-router-dom'

function Header() {
  const data= useLocation()
  return (
    <div>
<h1 className='text-3xl font-medium'>Hello {data.state.username}!</h1>
<p>I Help You Manage Your Activities :)</p>

    </div>
  )
}

export default Header