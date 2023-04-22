import React from 'react';
import './Home.css';
import Product from '../component/Productcard';

function Home() {
  return (
    <div className='Home'>
        {/* <div id='background-img'>
        <img src="https://static.wixstatic.com/media/84770f_b32075e939b14f7092a85d76c43c33f9~mv2.png/v1/fill/w_1349,h_165,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_b32075e939b14f7092a85d76c43c33f9~mv2.png" alt="background_img"  fetchpriority="high"/> */}
          <div className='hashtag'>
            <h1>"Your Healthy product in a Safe Hands"</h1>
            <h3>Care About Your Health With Sathya Foods Product</h3>
          {/* </div> */}
        </div>
        <div className='new-product-main'>
          <label><h1>New Product</h1></label>
          <div className='new-product-1'>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
          </div>
          <div className='new-product-2'>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
          </div>
        </div>
    </div>
  )
}

export default Home