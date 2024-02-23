import React from 'react'
import './index.scss';
import { Link } from 'react-router-dom';
import logoS from '../../assets/images/Plogotransparent.png'
import logosubtitle from '../../assets/images/logo_sub.png';


const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to="/">
            <img src={logoS} alt='logo'></img>
            <img src ={logosubtitle} alt='logoname'></img>
        </Link>
    </div>
  )
}

export default Sidebar