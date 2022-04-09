import React from 'react'
import ReactDOM from 'react-dom';

import style from './style/TextBox.css'

const TextBox = (props) => {
    return (
        <div className="text-box">
            {props.textBoxContent.map((i, index) => fillContent(i.name, i.content, index))}
        </div>
    )
}

export default TextBox

function fillContent(name, content, index){
    switch (true){
        case name === 'title':
            return (
                <h1 className={name} key={index}> {content} </h1>
            )
        case name === 'sub-title':
            return (
                <h2 className={name} key={index}> {content} </h2>
            )
        case name === 'text':
            return (
                <p className={name} key={index}> {content} </p>
            )
        case name === 'list':
            return (
                <ul className={name} key={index}>
                    {content.map((i, inx) => <li key={inx}>{i}</li>)}
                </ul>
            )
    }
}