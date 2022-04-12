import React from 'react'
import styled from 'styled-components'
import Contact from '../components/style/Contact.css'
import Toggle from '../components/style/Toggle.css'


const Form = () => {
    return (
        <div className='div-container'>
            <div>
                <div className='div-child toggle-button'>
                    <input type='checkbox' id='toggle' class='toggleCheckbox' value='report' />
                    <label for='toggle' className='toggleContainer'>
                        <div>Report Bug</div> 
                        <div>General Form</div>
                    </label>
                </div>

                <div className='div-child formular'>
                    <form>
                        <label for="fname">Name</label><br></br>
                        <input name='Name' className='name' type="text" id="fname" required='true' ></input><br></br>
                        <label for="fmail">Email*</label><br></br>
                        <input name='Mail' className='mail' type="email" id="fmail" required='true' ></input><br></br>
                        <label>Game*</label><br></br>
                        <select name='Game' className='game'>
                            <option value='game1'>Game1</option>
                            <option value='game2'>Game2</option>
                            <option value='game3'>Game3</option>
                        </select><br></br>
                        <label>Category*</label><br></br>
                        <select name='Categ' className='category'><br></br>
                            <option value='categ1'>Categ1</option>
                            <option value='categ2'>Categ2</option>
                            <option value='categ3'>Categ3</option>
                        </select><br></br>
                        <label>Description</label>
                        <textarea name='Msg' className='description' cols='5' rows='5' placeholder='Write your message here...'></textarea>
                        <button type='submit'>Submit</button>
                    </form>
            </div>
 
            </div>
            <div className='div-child media'>
                <strong>Connect with us on Social Media</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <p>Connect on Facebook</p>
                <p>Connect on Twitter</p>
                <p>Connect on Steam</p>
            </div>
        </div>
        
    )
}



export default Form