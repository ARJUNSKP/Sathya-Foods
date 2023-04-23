import React from 'react';
import './footer.css';
import { BsInstagram } from 'react-icons/bs';
import { CiFacebook } from 'react-icons/ci';
import { FiTwitter } from 'react-icons/fi';

function Footer() {
  return (
    <div className='footer-body'>
        <div className='customer-scrvise'>
          <h4>Customer Scrvise</h4><br/>
          <h5>1234567891</h5>
        </div>
        <div className='shoping'>
          <h4>Shop</h4>
          <h4>Shipping & Return</h4>
          <h4>Contact</h4>
        </div>
        <div className='social-media'>
          <div className='social-img'>
            <BsInstagram/>
            <CiFacebook/>
            <FiTwitter/>
          </div>
          <span class="color_11 wixui-rich-text__text">@2035 by Casies. Powered and secured by <u><b>Fotis</b></u></span>
        </div>
    </div>
  )
}

export default Footer