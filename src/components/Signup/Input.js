import React from 'react'
import '../../styles/Login/Input.css'


function Input({placeHolderName, inputType,setAccount, values}) {
    return (
        <div className='input'>
            <input type={inputType} placeholder={placeHolderName} onChange={(e) => {
                setAccount(e.target.value)
                // setAccount("")
            }} value ={values}/>
        </div>
        
    )
}

export default Input
