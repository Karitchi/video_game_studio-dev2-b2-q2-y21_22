import React, {useState} from 'react'
import style from './style/PageFormat.css'
import $ from 'jquery'
import Cookies from "core-js/internals/task";
import Login from "./Login";
import About from "./About";

const Admin = () => {
    const [token, setToken] = useState(false);

    if(!token){
        return <Login setToken={setToken} />
    }
    else if (token){
        return (
            <div className='adminContainer'>
                <h1>pppp</h1>
            </div>
        )
    }

}

export default Admin
