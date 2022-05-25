import React, {useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './style/Admin_jobs.css'
import Card_admin from "./Card_admin";
import $ from "jquery";

const array1 = [];
const array2 = [];

function Admin_jobs(props) {
    useEffect(()=>{jsonParser()},[])
    const [listJobs, setListJobs] = useState([])
    const [listCompany, setListCompany] = useState([])
    const [alacon, setAlacon] = useState('lul')
    let temp = ''

    useEffect(()=>{
        $.getJSON('/api/jobs', data=>{
            let myData = JSON.parse(data);
            for (let i of myData) {
                array1.push(i);
            }
            for (let i=0; i<array1.length; i++) {
                temp = temp +("<Card_admin title={listJobs["+i+"].job_title} location={listJobs["+i+"].location} skills={listJobs["+i+"].skills_and_experience} contact={'email'} description={listJobs["+i+"].job_description}tasks={listJobs["+i+"].job_description}/>")
                // console.log(array1[i])
                // console.log(temp)
                // console.log(i.location)

            }

            // setAlacon(temp)
            },[])
        })



    return (
        <div className='content_admin_jobs'>
            <h2>Careers:</h2>
            <div className="gallery">
                {/*{setListJobs(array1)}*/}
                {/*{temp}*/}
                {/*{alacon}*/}
            </div>
        </div>
    )
}

export default Admin_jobs

function jsonParser(){

    $.getJSON('/api/company_data', data=>{
        let myData = JSON.parse(data);
        for (let i of myData) {
            array2.push(i);
        }
    })
}