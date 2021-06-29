import React from 'react'
import './style.css';

export const CardGif = ( { title, image_url } ) => {
    return (
        <div className="card">
            <img className="imgGif" src={ image_url } alt={ title } />
        </div>
    )
}