import React from 'react'
import Contact from '../components/style/Contact.css'
import ToggleFormat from '../components/style/ToggleFormat.css'
import $, { data } from "jquery";


const Form = () => {

    return (
        <div className='div-container'>
            <div className="form-container">
                <div className='div-child toggle-button'>
                    <input type='checkbox' id='toggle' className='toggleCheckbox' value='report' />
                    <label htmlFor='toggle' className='toggleContainer'>
                        <div>Report Bug</div>
                        <div>General Form</div>
                    </label>
                </div>

                <div className='div-child formular'>
                    <form method='post' action=''>
                        <label htmlFor="fname">Name</label>
                        <input name='Name' className='name' type="text" id="fname" required='true' >

                        </input>
                        <label htmlFor="fmail">Email*</label>
                        <input name='Mail' className='mail' type="email" id="fmail" required='true' >

                        </input>
                        <label>Game*</label>
                        <select name='Game' className='game'>
                            <option value='game1'>Game1</option>
                            <option value='game2'>Game2</option>
                            <option value='game3'>Game3</option>
                        </select>
                        <label>Category*</label>
                        <select name='Categ' className='category'>
                            <option value='categ1'>Categ1</option>
                            <option value='categ2'>Categ2</option>
                            <option value='categ3'>Categ3</option>
                        </select>
                        <label>Description</label>
                        <textarea name='Msg' className='description' cols='5' rows='5' placeholder='Write your message here...'>

                        </textarea>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>

            
            <div className='div-child media' id='socialMedia'>
                <big>Connect with us on social media.</big> <br></br><br></br>

                <p>Vivamus nec sapien varius, pretium tortor eget, vestibulum purus. Donec scelerisque ut tortor et egestas. Fusce id porttitor velit. </p><br></br>
                
                <ul>
                    <li> <a href='https://www.facebook.com/Silva-Gaming-111870081521113'>Connect with us on Facebook</a></li>
                    <li><a href='https://www.facebook.com/Silva-Gaming-111870081521113'>Connect with us on Twitter</a></li>
                    <li><a href='https://www.facebook.com/Silva-Gaming-111870081521113'>Connect with us on Steam</a></li>
                </ul><br></br>
                <p>If you'd like to mail us something, here's our PO BOX: </p> <br></br>
                <ul>
                    <li> Silva Gaming </li>
                    <li> {datele.address.street}  {datele.address.no} </li>
                    
                    <li> {datele.address.city} </li>
                </ul>
                

            </div>
        </div>

    )
}



export default Form


var dataRAW;
var datele;

$.ajax({
    async: false,
    url: "http://127.0.0.1:8000/api/company_data",
    dataType: "json",
    success: function getsJson (data){
        dataRAW = JSON.parse(data);
        datele = dataRAW[0]
    }
})
    