import React from 'react'
import sun from '../assets/sun.svg'
import water from '../assets/water.svg'
// function CareScale({scaleValue}) {
//     // console.log(props)
//      console.log(scaleValue)
//     // const scaleValue = props.scaleValue
//     const range = [1, 2, 3]

//   return (
//         range.map((rangeElemnt) => (
//                  scaleValue >= rangeElemnt ? <span key={rangeElemnt.toString()}>☀️</span> : null 
//             )
//         )

//         // <div>{scaleValue}☀️</div>
//   )
// }
function CareScale ({scaleValue, careType}){
  const range = [1, 2, 3]
  const scaleType = careType === 'light' ? (<img src={sun} alt="Quantity of lightning" />) : (<img src={water} alt="Quantity of water" />) ;
   return(
    <div>
          {range.map((rangeElemnt) => scaleValue >= rangeElemnt ? <span key={rangeElemnt.toString()}>{scaleType}</span> : null)}
    </div>
  )
  
}

export default CareScale
