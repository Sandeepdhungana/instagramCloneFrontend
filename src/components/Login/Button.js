import React from 'react'
import '../../styles/Login/Button.css'

function Button({buttonName, color,takethis}) {
    return (
        <div  className="button">
            <button onClick={() => {takethis()}} style={{background:color}}>{buttonName}</button>
        </div>
    )
}

export default Button
