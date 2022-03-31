import React from 'react'
import logo from './img/logo.png'
import style from './style/Nav.css'
import {Link} from 'react-router-dom';
import {useWindowSize, useWindowWidth, useWindowHeight} from '@react-hook/window-size';

const Nav = () => {

  return (
    <nav>
      <img className='logo'/>
      <ul>
        <li>
            <Link className={"nav-link"} to={"/"}> About </Link>
        </li>
        <li>
            <Link className={"nav-link"} to={"/games"}> Games </Link>
        </li>
        <li>
            <Link className={"nav-link"} to={"/careers"}> Careers </Link>
        </li>
        <li>
            <Link className={"nav-link"} to={"/forums"}> Forums </Link>
        </li>
        <li>
            <Link className={"nav-link"} to={"/contact"}> Contact </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Nav

function test(){
    console.log(useWindowWidth())
}