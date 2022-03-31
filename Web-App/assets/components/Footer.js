import React from 'react'
import style from './style/Footer.css'

const Footer = () => {
  return (
    <footer>
        <img className='logo'/>
        <div>
            <ul>
                <li>
                    <a href="">
                        <img alt="" className='social_media_icon'/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img alt="" className='social_media_icon'/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img alt="" className='social_media_icon'/>
                    </a>
                </li>
            </ul>
            <p className='copyright'>© All Rights Reserved Silva Gaming Studio 2022</p>
        </div>
    </footer>
  )
}

export default Footer