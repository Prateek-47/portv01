import React from 'react'
import './index.scss';
import { Link } from 'react-router-dom';
import logoS from '../../assets/images/logo-s.png'

const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to="/">
            <img src={logoS} alt='logo'></img>
        </Link>
    </div>
  )
}

export default Sidebar