import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { MdSettings } from 'react-icons/md'
import './style.css'

const Navbar = () => {

    return (
        <nav className='Navbar'>
            <div className='Navbar-right'>
                <div className="input-field">
                    <input type='text' placeholder='Search' />
                    <BiSearch style={{ position: 'relative', right: '2rem', fontSize: '1.3rem' }} />
                </div>
            </div>
            <div className='Navbar-left'>
                <div className='navbar-item'>
                    <IoMdNotificationsOutline />
                    <MdSettings />
                    <img src="https://avatars0.githubusercontent.com/u/527052?s=460&u=f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8&v=3" alt="avatar" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar