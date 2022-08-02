import React, { useState, useEffect } from 'react';
import '../styles/cart.css';

/*function Cart() {
    const monsteraPrice = 8
    const lierrePrice = 10
    const flowerPrice = 15
    const titre = 'Pannier'
    return(
      <div className = 'lmj-cart'>
          <h2>{titre}</h2>
        <ul>
            <li> Un monstera = {monsteraPrice} €</li>
            <li> Un lierre = {lierrePrice} €</li>
            <li> Un bouquet de fleur = {flowerPrice} €</li>
        </ul>
            Total : {monsteraPrice + lierrePrice + flowerPrice} €
      </div>
    )
}*/
function Cart({cart, updateCart,activeCategory, setActiveCategory}) {

  const [isOpen, setIsOpen] = useState(false)
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  )
  
  // useEffect(() => {
  //   alert(`J'aurai ${total}€ à payer 💸`)
  // }, [total, activeCategory])
  
  useEffect(() => {
      document.title = `LMJ: ${total}€ d'achats`
  }, [total])



  return isOpen ? (
      <div className='lmj-cart'>
          <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer</button>

          <h2>Panier</h2>

          {cart.map(({ name, price, amount }, index) => (//à defaut d'utiliser "name.toString()" comme key on peut utiliser "`${name}-${index}`"
              <div key={`${name}-${index}`}> 
                  {name} {price}€ x {amount}
              </div>
			    ))}

			<h3>Total : {total}€</h3>
			<button onClick={() => updateCart([])}>Vider le panier</button>
          
      </div>
  ) : (
    <div className='lmj-cart-closed'>
        <button
            className='lmj-cart-toggle-button'
            onClick={() => setIsOpen(true)}
        >
            Ouvrir le Panier
        </button>
    </div>
  )
}

export default Cart;