import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/Change_data.css'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button"
import $ from "jquery";


function Change_data() {

    return (
        <div className='content_admin_jobs'>
            <h2>Change data:</h2>
            <Form className="wrapper">
                <Form.Group className="cDataLinks" controlId="links">
                    <Form.Label>Links:</Form.Label>
                    <Form.Control placeholder={usableDataCompany.links.facebook} />
                    <Form.Control placeholder={usableDataCompany.links.twitter} />
                    <Form.Control placeholder={usableDataCompany.links.steam} />
                </Form.Group>

                <Form.Group className="cDataAddress" controlId="address">
                    <Form.Label>Address:</Form.Label>
                    <Form.Control placeholder={usableDataCompany.address.street} />
                    <Form.Control placeholder={usableDataCompany.address.no} />
                    <Form.Control placeholder={usableDataCompany.address.city} />
                    <Form.Control placeholder={usableDataCompany.address.postal_code} />
                </Form.Group>

                <Form.Group className="cDataEmail" controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder={usableDataCompany.company_email} />
                </Form.Group>

                <Button className="cDataButton" variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Change_data
var dataCompany;
var usableDataCompany;

$.ajax({
    async: false,
    url: "/api/company_data",
    dataType: "json",
    success: function getsJson (data){
        dataCompany = JSON.parse(data);
        usableDataCompany = dataCompany[0]
    }
})