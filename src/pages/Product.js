import React from 'react';
import Products from '../component/Productcard';
import './product.css';

function Product() {
  return (
    <div className='product-main'>
      <div className='product_tab'>
        <label>Select Your Favourite product</label>
        <div className='rows'>
          <Products/>
          <Products/>
          <Products/>
          <Products/>
        </div>
        <div className='rows'>
          <Products/>
          <Products/>
          <Products/>
          <Products/>
        </div>
        <div className='rows'>
          <Products/>
          <Products/>
          <Products/>
          <Products/>
        </div>
        <div className='rows'>
          <Products/>
          <Products/>
          <Products/>
          <Products/>
        </div>
      </div>
    </div>
    )
}

export default Product