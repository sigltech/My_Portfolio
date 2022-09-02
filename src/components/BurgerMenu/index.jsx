import React from 'react'

export default function BurgerMenu({ menuOpen, setMenuOpen }) {

    const handleLinkClick = () => {
        setMenuOpen(!menuOpen)
        const burgerLines = document.querySelector('.burger-container')
        burgerLines.classList.remove('burger-open')
    }
    
    if(menuOpen) {
        return (
            <div className='sidebar'>
                <main id="page-wrap">
                    <a onClick={handleLinkClick} id="home" className="menu-item" href="#richardsigl">Home</a>
                    <a onClick={handleLinkClick} id="about" className="menu-item" href="#aboutmyjourney">About</a>
                    <a onClick={handleLinkClick} id="projects" className="menu-item" href="#mycodingprojects">Projects</a>
                    <a onClick={handleLinkClick} id="contact" className="menu-item" href="#contactme">Contact</a>
                </main>
            </div>
        )
    } else {
        return null
    }
}
