import React from 'react'
import style from './style/Loading.css'
import LoadingImage from '../../src/img/icons/loading.png'

const Loading = () => {
    return (
        <div className="loading-container">
            <img className="loading-image" src={LoadingImage} alt="" />
        </div>
    )
}
export default Loading