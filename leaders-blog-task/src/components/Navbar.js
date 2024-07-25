import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div style={{ background: 'lightgreen', padding: '20px' }}>
      <Link to='/home' className='menu_list'>Home</Link>
      <Link to='/about' className='menu_list'>About</Link>
      <Link to='/dfdfq' className='menu_list'>Page Not Found</Link>
    </div>
  )
}

export default Navbar