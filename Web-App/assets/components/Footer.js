import React from 'react'
import style from './style/Footer.css'
import logo from '../../src/img/icons/logo.svg'
import facebook from '../../src/img/icons/facebook.png'
import twitter from '../../src/img/icons/twitter.png'
import steam from '../../src/img/icons/steam.png'

const Footer = () => {
  return (
    <footer className="footer-bar">
        <div className="footer-content">
            <img className='logo' alt="" src={logo} draggable="false"/>
            <div className="social-media-container">
                <ul>
                    <li>
                        <a href="">
                            <img alt="" src={facebook} className='social_media_icon' draggable="false"/>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img alt="" src={twitter} className='social_media_icon' draggable="false"/>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img alt="" src={steam} className='social_media_icon' draggable="false"/>
                        </a>
                    </li>
                </ul>

            </div>
            <p className='copyright'>© All Rights Reserved Silva Gaming Studio 2022</p>
        </div>
    </footer>
  )
}

export default Footer