import React from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Header from './component/Header';
import Footer from './component/footer';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Product' element={<Product/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
