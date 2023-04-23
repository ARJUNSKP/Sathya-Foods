import React from 'react';
import Logo from '../asset/sf_logo.png';
import './Header.css';
import {Link} from "react-router-dom";


function Header() {
  return (
    <div >
        <header className='Header'>
            <nav className='nav-header'>
                <caption><b><h3>Sathya Food Product</h3></b></caption>
                {/* <img src={Logo} alt='sf-logo' style={{width:'140px',height:'100px'}}/> */}
                <div className='nav-content'>
                    <ul>
                        <Link to='/' id='Home'><li>Home</li></Link>
                        <Link to='/Product' id='Product'><li>Product</li></Link>
                        {/* <Link to='./About' id='About'><li>About</li></Link> */}
                        <Link to='./Contact' id='Contact'><li>Contact</li></Link>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Header