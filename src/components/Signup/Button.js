import React from 'react'
import '../../styles/Login/Button.css'

function Button({buttonName, color,margintop,marginbottom, action}) {
    return (
        <div  className="button">
            <button type='submit' style={{background:color,
            marginTop:margintop,
            marginBottom:marginbottom
            }} onClick={() => action()}>{buttonName}</button>
        </div>
    )
}

export default Button
