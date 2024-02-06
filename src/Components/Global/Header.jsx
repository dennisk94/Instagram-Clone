import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <nav className="nav">
            <Link to={'/'}>
                <h1 className="app-heading">
                    Instagram Clone
                </h1>
            </Link>
            <div className="navigation">
                <Link to={'/profile/:123'}>
                    Profile
                </Link>
            </div>
        </nav>
    </header>
  )
}

export default Header