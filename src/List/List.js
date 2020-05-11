import React from 'react';
import Card from '../Card/Card';


function List(props){


    let cards = props.cardIds.map((val, index) => {

        return (
            <Card 
                id = {index}
                title = {props.allCards[val].title}
                content = {props.allCards[val].content}
            />
        )    
    });


    return (
        <section className="List" key = {props.id}>
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            {cards}
        </section>

    )
        
}

export default List;