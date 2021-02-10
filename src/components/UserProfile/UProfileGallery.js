/* eslint-disable no-unused-vars */
import React from 'react'
import '../../styles/Profile/ProfileGallery.css';
import UImage from './UImage';
import { useStateValue } from '../../Reducers/StateProvider';
function UProfileGallery() {
    const [{userpost}, dispatch] = useStateValue();
    return (
        <div className="profilegallery">
            {userpost?.map((datas) =>{
               return <UImage key={datas.photo} image={datas.photo}/>
            })}
            
        </div>
    )
}

export default UProfileGallery
