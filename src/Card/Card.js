import React from 'react';

function Card(props){
    return(
    <div className="Card" id={props.id}>
        <button type="button">delete</button>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
    </div>
    );
}

export default Card;