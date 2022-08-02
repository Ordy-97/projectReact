import logo from '../assets/logo.png';
import Banner from './Banner';
import Cart from './Cart';
import QuestionForm from './QuestionForm'
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import '../styles/layout.css';
import React, { useState, useEffect } from 'react';


function App() {
  const refernce = localStorage.getItem('carts')
  const [cart, updateCart] = useState(refernce ? JSON.parse(refernce) :[])
  const [show, setShow] = useState(true)
  const tittle = "La maison jungle"
  
	useEffect(() => {
		localStorage.setItem('carts', JSON.stringify(cart))
	}, [cart])


  return (
  <div>
    <Banner>
      <img className ='lmj-logo ' src ={logo} alt='La maison jungle'/>
      <h1 className= 'lmj-tittle '>{tittle}</h1>
    </Banner> 
    <div className='lmj-layout-inner'>
      <Cart cart={cart} updateCart={updateCart} /> 
      <ShoppingList cart={cart} updateCart={updateCart} />
    </div>
    <QuestionForm />
    <button onClick={() => setShow(false)}> cacher !</button>
    {show && <Footer cart={cart} />}
    {/* <Footer cart={cart} /> */}
  </div>
  );
}

export default App;
