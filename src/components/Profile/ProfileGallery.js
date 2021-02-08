import React from 'react'
import '../../styles/Profile/ProfileGallery.css';
import Image from './Image';
import { useStateValue } from '../../Reducers/StateProvider';
function ProfileGallery() {
    const [{myPost}, dispatch] = useStateValue();
    return (
        <div className="profilegallery">
            {myPost.length && myPost.map((datas) =>{
               return <Image image={datas.photo}/>
            })}
            
        </div>
    )
}

export default ProfileGallery
