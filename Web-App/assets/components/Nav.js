import React from 'react';
import Logo from '../../src/img/icons/logo-nav.svg';
import NavExpand from '../../src/img/icons/menu-open-icon.svg';
import NavColapse from '../../src/img/icons/menu-close-icon.svg';
import style from './style/Nav.css';
import {Link} from 'react-router-dom';
import $ from 'jquery'


//to avoid toggle-nav menu staying open after resizing
$(window).resize(()=>{
    console.log()
    if($(window).width() > 600){
        $('#toggle-menu').hide();
    }
});

const Nav = () => {

  return (
      <header className="nav-bar" id="nav-bar-id">
          <nav className="nav-content">
              <img className='logo' src={Logo} alt="" draggable="false"/>
              {navComponents('default-nav')}
              <button className="menu-button" onClick={toggleNav}>
                  <img src={NavExpand} id="button-state" className="menu-button-image" alt=""/>
              </button>
          </nav>
          <div className="toggle-menu" id="toggle-menu">
              {navComponents('toggle-menu-components')}
          </div>
      </header>
  )
}
export default Nav

function navComponents(name){
    return (
        <ul className={name}>
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
    )
}

function toggleNav(){
    $('#toggle-menu').slideToggle();
}