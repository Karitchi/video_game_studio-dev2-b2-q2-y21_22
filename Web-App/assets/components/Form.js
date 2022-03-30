import React from 'react'
import styled from 'styled-components'
import Contact from '../components/style/Contact.css'


const Form = () => {
    return (
        <div>
            <form className='formular'>
                <label for="fname">Name*</label><br></br>
                <input type="text" id="fname" required='true' ></input><br></br>
                <label for="fmail">Email*</label><br></br>
                <input type="text" id="fmail" required='true' ></input><br></br>
                <label>Game*</label><br></br>
                <select id='games'>
                    <option value='game1'>Game1</option>
                    <option value='game2'>Game2</option>
                    <option value='game3'>Game3</option>
                </select><br></br>
                <label>Category*</label><br></br>
                <select id='category'><br></br>
                    <option value='categ1'>Categ1</option>
                    <option value='categ2'>Categ2</option>
                    <option value='categ3'>Categ3</option>
                </select><br></br>
                <textarea placeholder='Description...'></textarea>
            </form>
        </div>
    )
}



export default Form