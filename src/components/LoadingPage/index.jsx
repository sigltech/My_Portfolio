import React from 'react'
import RingLoader from "react-spinners/RingLoader";

export default function LoadingPage() {
  return (
    <div 
        style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
        <RingLoader
        color='white'/>
    </div>
  )
}
