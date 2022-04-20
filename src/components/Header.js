import React from 'react'
import './header.css'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';

const Header = () => {
  return (
      //BEM <<<<
    <div className='header'>
    <IconButton><PersonIcon className="header_icon" fontSize="large"/></IconButton>
    <img className="header_logo" src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" alt="tinder logo"/>
    <IconButton><ForumIcon className="header_icon" fontSize="large"/></IconButton>
    </div>
  )
}

export default Header