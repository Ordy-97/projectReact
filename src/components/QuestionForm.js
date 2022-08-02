import React, { useState } from 'react'

// function QuestionForm() {
//   return (
//         <form onSubmit={handleSubmit}>
//             <input type='text' name='my_input' defaultValue='Tapez votre texte' />
//             <button type='submit'>Entrer</button>
//         </form>
//   )
// }
// function handleSubmit(e) {
//     e.preventDefault()
//     alert(e.target['my_input'].value)
// }

function QuestionForm() {
    const [inputValue, setInputValue] =useState('Poser votre question ici !')
  return (
      <form >
        <textarea
          value = {inputValue}
          onChange ={(e) => checkValue(e.target.value)}
        />
        <button type='submit' onClick={() => alert(inputValue)}>ENTRER</button>
      </form>
  )
  function checkValue(value) {
    if (!value.includes('f')) {
        setInputValue(value)
    }
}
  
}



export default QuestionForm
