import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, SocialsMenu, LoadingPage } from '../components'
import './style.css'

export default function Layout({menuOpen, setMenuOpen}) {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (

    !loading ? 
    <>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <SocialsMenu />
        <Outlet />
    </>
    : <LoadingPage />

  )
}
