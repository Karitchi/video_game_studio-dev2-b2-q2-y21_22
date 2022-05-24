import React from 'react'


const AdminGameCategory = (props) => {

    const cat = props.cat;

    console.log(props, name);
    if (cat == "games") {

        return (
            <div className='game_buttons'>
                <button className='modify adminButton'>Modify</button> <button className='delete adminButton'>Delete</button>
            </div>
        )
    }


    if (cat == "upcoming") {
        return (
            <div className='game_buttons'>
                <button className='released adminButton'>Released</button> <button className='modify adminButton'>Modify</button> <button className='delete adminButton'>Delete</button>
            </div>
        )
    }


    if (cat == "featured") {
        return (
            <div className='game_buttons'>
                <button className='delete adminButton'>Delete</button>
            </div>
        )
    }

}



export default AdminGameCategory