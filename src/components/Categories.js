import  '../styles/categories.css';
import { plantList } from '../Datas/plantList';

function Categories({activeCategory, setActiveCategory}) {
    const categories = plantList.reduce(
        (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category) ,
        []
    )
  return (

        <div className='lmj-categories' >
            
            <select 
                value={activeCategory} 
                onChange={(e) => {setActiveCategory(e.target.value)}}
                className='lmj-categories-select'
            >
                {categories.map((cat, index) => 
                    <option key={`${cat}-${index}`} value={cat}>{cat}</option>
                )}
                <option value=''>---</option>
            </select>
            <input type="button" onClick={() => {setActiveCategory('')}} value="réinitialiser" />
      </div>
  )
}

export default Categories
