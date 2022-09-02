import React from 'react'

export default function BurgerMenu({ menuOpen, setMenuOpen }) {

    const handleLinkClick = (e) => {
        setMenuOpen(!menuOpen)
    }
    
    if(menuOpen) {
        return (
            <div className='sidebar'>
                <main id="page-wrap">
                    <a onClick={handleLinkClick} id="home" className="menu-item" href="/">Home</a>
                    <a onClick={handleLinkClick} id="about" className="menu-item" href="#about-header">About</a>
                    <a onClick={handleLinkClick} id="contact" className="menu-item" href="#contact-header">Contact</a>
                </main>
            </div>
        )
    } else {
        return null
    }
}
