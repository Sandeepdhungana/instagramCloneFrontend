import React from 'react'

import '../../styles/Profile/Image.css'


function UImage({image}) {
    return (
        <div className="image">
            <img src={image} alt=""/>
        </div>
    )
}

export default UImage
