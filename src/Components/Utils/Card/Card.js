import React from 'react'

import "./Card.css"

function Card(props) {
    return (
        <div className="card_container">
            <h1>{props.name}</h1>
            <img className="card_image" src={props.img}></img>
            <h3>{props.type}</h3>
        </div>
    )
}

export default Card
