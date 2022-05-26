import React, {useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './style/Admin_jobs.css'
import Card_admin from "./Card_admin";
import $ from "jquery";
import Carousel from "react-bootstrap/Carousel";
import Card from "./Card";

const array1 = [];
const array4 = [];

function Admin_jobs(props) {
    useEffect(()=>{jsonParser()},[])
    const [listJobs, setListJobs] = useState([])
    const [listCompany, setListCompany] = useState([])
    let temp = []

    useEffect(()=>{
        $.getJSON('/api/jobs', data=>{
            let myData = JSON.parse(data);
            setListJobs(myData)
            for (let i of myData) {
                array1.push(i);
            }

            })
        },[])

    useEffect(() =>{
        for (let i=0; i<listJobs.length; i++) {
            temp.push(<Card_admin key={`${listJobs[i].job_title} - ${i}`} title={listJobs[i].job_title} location={listJobs[i].location} skills={listJobs[i].skills_and_experience} contact='email' description={listJobs[i].job_description} tasks={listJobs[i].tasks}/>)
            console.log(typeof (temp))
        }
        setListCompany(temp)
    },[listJobs])




    return (
        <div className='content_admin_jobs'>
            <h2>Careers:</h2>
            <div className="gallery">
                {listCompany}
            </div>
        </div>
    )
}

export default Admin_jobs

function jsonParser(){

    $.getJSON('/api/company_data', data=>{
        let myData = JSON.parse(data);
        for (let i of myData) {
            array4.push(i);
        }
    })
}