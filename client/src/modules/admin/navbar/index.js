import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdSettings } from 'react-icons/md';
import { Navbar } from './style';

const Index = () => {

    return (
        <Navbar>
            <div className='navbar_right'>
                <div className="navbar_right_input-field">
                    <input type='text' placeholder='Search' />
                    <BiSearch />
                </div>
            </div>
            <div className='navbar_left'>
                <div className='navbar_left_icons'>
                    <IoMdNotificationsOutline />
                    <MdSettings />
                    <img src="https://avatars0.githubusercontent.com/u/527052?s=460&u=f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8&v=3" alt="avatar" />
                </div>
            </div>
        </Navbar>
    )
}

export default Index