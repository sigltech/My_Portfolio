import React from 'react'
import profileImg from '../../assets/images/headshot-no-bckgrnd.svg'

export default function BlogInfoCard() {
    return (
        <div className='blog-info-card'>
            <div className="profile-photo">
                <div className="image-container">
                    <img src={profileImg} alt="..." />
                </div>
            </div>
            <div className='blog-info-card-content'>
                <h1>Richard</h1>
                <p>Hi, I'm Richard. I'm a software engineer and I love to build things. I'm currently working on a few projects, and I'm always looking for new opportunities to learn and grow. I'm passionate about technology and I love to learn new things. I'm currently working on a few projects, and I'm always looking for new opportunities to learn and grow. I'm passionate about technology and I love to learn new things.</p>
            </div>
        </div>
    )
}
