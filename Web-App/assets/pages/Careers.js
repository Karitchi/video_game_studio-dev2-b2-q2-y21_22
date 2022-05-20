import React from 'react'
import './style/PageFormat.css'
import Carousel_career from '../components/Caroussel'
import Presentation_img from "../components/Presentation_img";
import Presentation_career from "../components/Presentation_career";
import $ from "jquery"

let arr = [];
let arr2 = [];
jsonParser();

function Careers(props){
    return (
        <div className='content'>
            <Presentation_img />
            <Presentation_career />
            <Carousel_career dataJobs={arr} dataCompany={{arr2}}/>
        </div>
    )
}

export default Careers

function jsonParser(){
    $.getJSON('/api/jobs', data=>{
        let myData = JSON.parse(data);
        for (let i of myData) {
            arr.push(i);
        }
    })
    $.getJSON('/api/company_data', data=>{
        let myData = JSON.parse(data);
        for (let i of myData) {
            arr2.push(i);
        }
    })
}
