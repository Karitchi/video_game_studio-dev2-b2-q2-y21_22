/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import './styles/app.css';

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import About from "./pages/About"
import Games from "./pages/Games"
import Careers from "./pages/Careers"
import Forums from "./pages/Forums"
import Contact from "./pages/Contact"

import PageNotFound from "./pages/PageNotFound";

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={pageDisplay(<About />)} exact={true}/>
            <Route path="/games" element={pageDisplay(<Games />)} exact={true}/>
            <Route path="/careers" element={pageDisplay(<Careers />)} exact={true}/>
            <Route path="/forums" element={pageDisplay(<Forums />)} exact={true}/>
            <Route path="/contact" element={pageDisplay(<Contact />)} exact={true}/>
            {/* 404 route */}
            <Route path="*" element={<PageNotFound />} exact={true}/>
        </Routes>
    </Router>,
    document.getElementById('root')
);

function pageDisplay(page) {
    return <div>
        <Nav />
        {page}
        <Footer />
    </div>
}