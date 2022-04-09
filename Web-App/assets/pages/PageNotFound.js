import React from 'react'
import style from './style/PageNotFound.css'
import image from '../../src/img/icons/error404.svg'
import {Link} from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className='PageNotFoundContent'>
            <div className='errorContainer'>
                <div className="errorMessageContainer">
                    <p className="title">GAME OVER</p>
                    <img src={image}/>
                    <p className="errorCode">404 ERROR</p>
                    <p className="errorDescription">PAGE NOT FOUND</p>
                </div>
                <p>Maybe return to the <Link className={"nav-link"} to={"/"}> home page </Link> ?</p>
            </div>
        </div>
    )
}

export default PageNotFound