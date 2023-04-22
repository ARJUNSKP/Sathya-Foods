import React from 'react';
import Choco from '../asset/new_product/choco.jpg';
import './Productcard.css';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/esm/CardImg';

function Product() {
  return (
    <div className='new-product'>
      <Card className='card-main' style={{ width: '18rem'}}>
        <CardImg orientation="top" src={Choco}/>
        <h2>Product name</h2>
        <h4> Some quick example text to build on the card title and make up the bulk of the card's content.</h4>
        <button>Perchase</button>      
      </Card>
    </div>
  )
}

export default Product