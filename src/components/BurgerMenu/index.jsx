import React, { useState } from 'react'

export default function BurgerMenu({ menuOpen, setMenuOpen }) {
    
    if(menuOpen) {
        return (
            <div className='sidebar'>
                <main id="page-wrap">
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                </main>
            </div>
        )
    } else {
        return null
    }
}
