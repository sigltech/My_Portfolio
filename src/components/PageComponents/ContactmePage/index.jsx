import React from 'react'

export default function ContactmePage() {

    const handleClickToCopy = () => {
        // display the copied message
        const emailCopied = document.querySelector('#email-copied-msg')
        emailCopied.classList.add('show')

        // copy the email address
        const email = document.getElementById('email')
        console.log(email.textContent)
        navigator.clipboard.writeText(email.textContent)

        // hide the copied message after 2 seconds
        setTimeout(() => {
            emailCopied.classList.remove('show')
        }, 3000)
    }

    return (
    <div className='contactmePage-container'>
        <div className="left-block">
            <div className='contactmePage-content'>
                <h1 className='contactmePage-title' id='contact-header'>Contact Me</h1>
                <div className='contactdetails-div'>
                <h2 className='contactmePage-subtitle'>Email</h2>
                <p className='contactmePage-email'>
                    <a id='email' href='mailto:dummyemail@test.com'>dummyemail@test.com</a>
                </p>
                <p  onClick={handleClickToCopy} id='click-to-copy'>Click email to open in mail client <br /> or Click here to copy to clipboard!</p>
                <div className="clipboard-msg">
                    <p className='copied-msg' id='email-copied-msg' style={{display:'none'}}>Email copied to clipboard!</p>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}
