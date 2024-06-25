import React from 'react'
import './NavbarStyles.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
        <nav>
            <Link to='/'>WorkoutBuddy</Link>
            <div className='menu'>
                <Link to='/signup'>SignUp</Link>
                <Link to='/login'>Login</Link>
            </div>
        </nav>
   </>
  )
}

export default Navbar