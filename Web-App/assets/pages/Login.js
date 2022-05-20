import React, {useEffect, useState} from 'react'
import style from './style/Login.css'
import UserIcon from '../../src/img/icons/user.png'
import LockIcon from '../../src/img/icons/lock.png'
import $ from 'jquery'
import Loading from "../components/Loading";

const Login = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState("");

    //create object containing cookies
    let cookies = document.cookie;
    let processArr = cookies.split(/; */);
    let cookiesArr = {};

    for (let i = 0; i < processArr.length; i++){
        let j = processArr[i].split('=');
        cookiesArr[j[0]] = j[1] !== 'false';
    }

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/logger_state")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setData(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
            .catch(error => {
                console.log(error)
            })
    },[])

    if (error) {
        console.log(error.message)
    }
    else if (!isLoaded){
        console.log("Loading ...")

        return (
            <Loading />
        )
    }
    else {


        /*if (json){
            props.setToken({ token: true });
        }*/

        return (
            <div className='login-container'>
                <form action="" className="login-form" method="post" >
                    <div className="input-container">
                        <label> <img className="user-icon" src={UserIcon} alt=""/> </label>
                        <input type="text" name="username" className="input-field" required/>
                    </div>
                    <div className="input-container">
                        <label> <img className="lock-icon" src={LockIcon} alt=""/> </label>
                        <input type="password" name="password" className="input-field" required/>
                    </div>
                    <p id="conError" className='error-text'
                       style={{display: cookiesArr['logingError'] ? 'block' : 'none' }} >
                        Wrong password or nonexistent user
                    </p>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        )
    }



}


export default Login