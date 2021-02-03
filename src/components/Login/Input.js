import React from 'react'
import '../../styles/Login/Input.css'


function Input({placeHolderName, inputType}) {
    return (
        <div className='input'>
            <input type={inputType} placeholder={placeHolderName}/>
        </div>
        
    )
}

export default Input
