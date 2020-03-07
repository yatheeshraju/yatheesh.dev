import React from 'react';
import './Card.scss';

function Card(props) {
    return (
        <div className='card'>
            <div className='banner'>{JSON.parse(props.article.banner[0]).data}</div>
            <div className='title'>{props.article.title}</div>
        </div>
    )
}

export default Card
