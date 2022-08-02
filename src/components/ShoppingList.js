import { useState } from 'react';
import Categories from './Categories';
import { plantList } from '../Datas/plantList';
import '../styles/shoppingList.css'

import PlantItem from "./PlantItem";
function ShoppingList({cart, updateCart}) {

    // const categories = [...new Set(plantList.map(cat => cat.category))] 
    const [activeCategory, setActiveCategory] = useState('')

    function addToCart(name, price) {
		// localStorage.setItem('carts', JSON.stringify(cart))
		
		const currentPlantAdded = cart.find((plant) => plant.name === name) //la methode Find, qui permet de trouver la plante(element de Cart) dont le nom correspond à name
		if (currentPlantAdded) {
			const cartFilteredCurrentPlant = cart.filter( //retourne un tableau sans l'element dont plant.name = name
				(plant) => plant.name !== name
			)
			updateCart([...cartFilteredCurrentPlant, { name, price, amount: currentPlantAdded.amount + 1 }])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='lmj-shopping-list'>
            <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            <ul className='lmj-plant-list'>
				{plantList.map(({name, cover, light, water, id, price, category}) => 
                    !activeCategory || activeCategory === category ? (
					
                        <div key={id}>
                            <PlantItem name={name} cover={cover} light={light} water={water} id={id} price={price}/>
                            <button style={{marginLeft : 35, marginBottom : 25}} onClick={() => addToCart(name, price)}>Ajouter</button>
                        </div>
                       /*  {plant.isSpecialOffer? <div className ='lmj-sales'>SOLDES</div> : null} */
                    //autre méthode: "{plant.isBestSale && plant.category === "classique" && <span>🔥</span>}"
				) : null
                )}
			</ul> 
		</div>
	)

}

export default ShoppingList;