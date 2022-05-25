import React, { useState } from 'react'
import style from './style/PageFormat.css'
import Nav from "../components/Nav";
import Featured from "../components/AdminFeaturedGames";
import Games from "../components/AdminGames";
import Upcoming from "../components/AdminUpcoming";
import Change_data from "../components/Change_data";
import Admin_jobs from "../components/Admin_jobs";
import $ from "jquery";

let array1 = [];
let array2 = [];
jsonParser();

const Admin = () => {

    return (
        <div>
            <div className='adminContainer'>
                <Nav />
                <Games />
                <Featured />
                <Upcoming />
                <Admin_jobs dataJobs={array1} dataCompany={array2}/>
                <Change_data />
            </div>
        </div>

    )
}

export default Admin

function jsonParser(){
    $.getJSON('/api/jobs', data=>{
        let myData = JSON.parse(data);
        for (let i of myData) {
            array1.push(i);
        }
    })
    $.getJSON('/api/company_data', data=>{
        let myData = JSON.parse(data);
        for (let i of myData) {
            array2.push(i);
        }
    })
}