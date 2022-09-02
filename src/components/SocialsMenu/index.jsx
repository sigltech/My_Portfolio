import React from 'react'
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { pink } from '@mui/material/colors';

export default function SocialsMenu() {
  return (
    <div className='socials-menu'>
        <a href="mailto:richardoskar00@gmail.com">
            <Email/>
        </a>
        <a href="https://github.com/sigltech">
            <GitHub />
        </a>
        <a href="https://www.linkedin.com/in/richardsigl/">
            <LinkedIn />
        </a>
        <div className='socials-menu-line'></div>
    </div>
  )
}
