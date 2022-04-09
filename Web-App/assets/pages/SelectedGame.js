import React from 'react'
import style from './style/SelectedGame.css'
import ImageGallery from "../components/ImageGallery";
import SingleImage from "../components/SingleImage";
import TextBox from "../components/TextBox";

const SelectedGame = (props) => {
    return (
        <div className='content'>
            <TextBox textBoxContent={arr}/>
            <ImageGallery />
        </div>

    )
}
export default SelectedGame

const arr = [
    {name: 'sub-title', content: 'Sub-title'},
    {name: 'text', content: 'Vivamus nec sapien varius, pretium tortor eget, vestibulum purus. Donec scelerisque ' +
            'ut tortor et egestas. Fusce id porttitor velit. Suspendisse accumsan, velit sed pellentesque varius,' +
            ' est enim suscipit lectus, quis varius ipsum erat ut nulla. Ut eu tincidunt enim, et aliquam mauris.' +
            ' Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed' +
            ' rutrum arcu pellentesque suscipit convallis.'},
]