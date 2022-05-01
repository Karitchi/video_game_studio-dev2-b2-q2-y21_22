import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import './styles/app.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";
import Games from "./pages/Games";
import Careers from "./pages/Careers";
import Forums from "./pages/Forums";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import SelectedGame from "./pages/SelectedGame";
import './styles/responsive.css';
import $ from 'jquery';

const arrGames = [
    {
        name: 'Hollow Knight',
        id: 0,
        type: 'game',
        coverImg: 'https://picsum.photos/300/200',
        url: 'hollowknight',
        page: [
            {
                component: 'text_box',
                elements: [
                    {name: 'title',  text: 'About Hollow Knight'},
                    {name: 'text', text: 'Vivamus nec sapien varius, pretium tortor eget, vestibulum purus. Donec scelerisque ut tortor et egestas. Fusce id porttitor velit. Suspendisse accumsan, velit sed pellentesque varius, est enim suscipit lectus, quis varius ipsum erat ut nulla. Ut eu tincidunt enim, et aliquam mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed rutrum arcu pellentesque suscipit convallis.'}
                ]
            },
            {
                component: 'image_gallery',
                elements: [
                    'https://picsum.photos/300/200',
                    'https://picsum.photos/300/200',
                    'https://picsum.photos/300/200',
                    'https://picsum.photos/300/200',
                    'https://picsum.photos/300/200'
                ]
            }
        ]
    },
    {
        name: 'testle',
        id: 1,
        type: 'game',
        coverImg: 'https://picsum.photos/300/200',
        url: 'testle',
        page: [
            {
                component: 'text_box',
                elements: [
                    {name: 'title',  text: 'About Hollow Knight'},
                    {name: 'text', text: 'Vivamus nec sapien varius, pretium tortor eget, vestibulum purus. Donec scelerisque ut tortor et egestas. Fusce id porttitor velit. Suspendisse accumsan, velit sed pellentesque varius, est enim suscipit lectus, quis varius ipsum erat ut nulla. Ut eu tincidunt enim, et aliquam mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed rutrum arcu pellentesque suscipit convallis.'}
                ]
            },
            {
                component: 'image_gallery',
                elements: [
                    'https://picsum.photos/300/200',
                    'https://picsum.photos/300/200',
                    'https://picsum.photos/300/200',
                    'https://picsum.photos/300/200',
                    'https://picsum.photos/300/200'
                ]
            }
        ]

    }
]
const arrProjects = [
    {
        name: 'Dead Cells',
        id: 0,
        coverImg: 'https://picsum.photos/300/200',
        url: 'deadcells',
        page: [
            {
                component: 'text_box',
                elements: [
                    {name: 'title',  text: 'About Hollow Knight'},
                    {name: 'text', text: 'Vivamus nec sapien varius, pretium tortor eget, vestibulum purus. Donec scelerisque ut tortor et egestas. Fusce id porttitor velit. Suspendisse accumsan, velit sed pellentesque varius, est enim suscipit lectus, quis varius ipsum erat ut nulla. Ut eu tincidunt enim, et aliquam mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed rutrum arcu pellentesque suscipit convallis.'}
                ]
            },
            {
                component: 'image_gallery',
                elements: [
                    'https://picsum.photos/300/200',
                    'https://picsum.photos/300/200',
                    'https://picsum.photos/300/200',
                    'https://picsum.photos/300/200',
                    'https://picsum.photos/300/200'
                ]
            }
        ]
    }
]

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={pageDisplay(<About />)} exact={true}/>
            <Route path="/games" element={pageDisplay(<Games />)} exact={true}/>
            {arrGames.map(route=>
                <React.Fragment key={route.id}>
                    <Route
                        path={'games/'+route.url}
                        key={route.id}
                        element={pageDisplay(<SelectedGame />)}
                        exact={true}
                    />
                    <Route
                        path={'forums/'+route.url}
                        key={route.id}
                        element={pageDisplay(<SelectedGame />)}
                        exact={true}
                    />
                </React.Fragment>
            )}
            {arrProjects.map(route=>
                <React.Fragment key={route.id}>
                    <Route
                        path={'projects/'+route.url}
                        key={route.id}
                        element={pageDisplay(<SelectedGame />)}
                        exact={true}
                    />
                    <Route
                        path={'forums/'+route.url}
                        key={'forum' + route.id}
                        element={pageDisplay(<SelectedGame />)}
                        exact={true}
                    />
                </React.Fragment>
            )}
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
