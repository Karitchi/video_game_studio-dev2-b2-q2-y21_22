import React from 'react'
import style from './style/PageFormat.css'
import TextBox from "../components/TextBox";

const Games = () => {
    return (
        <div className='content'>
            <TextBox arr={arr}/>
        </div>
    )
}

const arr = [
    {name: 'title', content: 'Title'},
    {name: 'sub-title', content: 'Sub-title'},
    {name: 'text', content: 'Vivamus nec sapien varius, pretium tortor eget, vestibulum purus. Donec scelerisque ' +
            'ut tortor et egestas. Fusce id porttitor velit. Suspendisse accumsan, velit sed pellentesque varius,' +
            ' est enim suscipit lectus, quis varius ipsum erat ut nulla. Ut eu tincidunt enim, et aliquam mauris.' +
            ' Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed' +
            ' rutrum arcu pellentesque suscipit convallis.'},
    {name: 'sub-title', content: 'Sub-title'},
    {name: 'text', content: 'Vivamus nec sapien varius, pretium tortor eget, vestibulum purus. Donec scelerisque ' +
            'ut tortor et egestas. Fusce id porttitor velit. Suspendisse accumsan, velit sed pellentesque varius,' +
            ' est enim suscipit lectus, quis varius ipsum erat ut nulla. Ut eu tincidunt enim, et aliquam mauris.' +
            ' Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed' +
            ' rutrum arcu pellentesque suscipit convallis.'}
]

export default Games