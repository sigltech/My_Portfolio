import React from 'react'
import { Email, GitHub, LinkedIn } from '@mui/icons-material';

export default function ContactmePage() {

    return (
    <div className='contactmePage-container'>
        <h1 
            className='contact-header'
            id='contactme'>
                Contact Me
        </h1>
        <div className='contactme-content'>
            <div className="contactme-links">
                <a className='contactIcon-container' href='mailto:richardoskar00@gmail.com'>
                    <Email
                        sx={{ 
                            fontSize: 50 }} />
                </a>
                <a className='contactIcon-container contact-icons' href='https://www.github.com/sigltech'>
                    <GitHub
                        sx={{ 
                            fontSize: 50 }} />
                </a>
                <a className='contactIcon-container' href='https://www.linkedin.com/in/richardsigl/'>
                    <LinkedIn
                        sx={{ 
                            fontSize: 50 }} />
                </a>
            </div>
        </div>
    </div>
    )
}
