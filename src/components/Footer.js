import { useState, useEffect } from 'react'
import '../styles/footer.css'

function Footer({cart}) {
	const [inputValue, setInputValue] = useState('')

    useEffect(()=> {
        return () => console.log('Cette alerte s affiche quand le footer est rétiré du DOM')
    }, [cart])

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>
                Laissez-nous votre mail : <input type='text'  onBlur={(e) => Verification(e.target.value) } /> <br />
                value = {inputValue}
            </div>
		</footer>
	)
    function Verification(value){
        if(!value.includes('@')){
            alert(`Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.`)
        } else {
            setInputValue(value)
        }
    }
}

export default Footer