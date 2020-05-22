import React from 'react';

function Card(props){

    return(
    <div className="Card" key = {props.id}>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <button type="button" onClick={() => {props.deleteCard(props.val)}}>delete</button>
    </div>
    );
}

export default Card;