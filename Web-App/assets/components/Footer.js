import React from 'react'
import style from './style/Footer.css'

const Footer = () => {
  return (
    <footer>
        <img class='logo'/>
        <div>
            <ul>
                <li>
                    <a href="">
                        <img alt="" class='social_media_icon'/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img alt="" class='social_media_icon'/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img alt="" class='social_media_icon'/>
                    </a>
                </li>
            </ul>
            <p class='copyright'>© All Rights Reserved Silva Gaming Studio 2022</p>
        </div>
    </footer>
  )
}

export default Footer