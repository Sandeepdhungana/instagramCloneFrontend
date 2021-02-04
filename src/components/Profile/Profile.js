import React from 'react'
import '../../styles/Profile/Profile.css'
import ProfileGallery from './ProfileGallery'
import ProfileTop from './ProfileTop'

function Profile() {
    return (
        <div className="profile">
            <ProfileTop />
            <ProfileGallery />
        </div>
    )
}

export default Profile
