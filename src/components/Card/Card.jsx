import React from 'react';
import './Card.scss';

function Card(props) {
    return (
        <div className='card'>
        <a href={props.article.short_URL} target="_window">
        <img src={props.article.post_thumbnail.URL} alt={props.name}></img>
        <p>
        {props.article.title}
        </p>
        
        </a>
    </div>
    )
}

export default Card
