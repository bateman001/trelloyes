import React from 'react';
import Card from '../Card/Card';

function List(props){

    console.log(props.store.store.lists);
    
    let cards = props.store.store.lists.map((card, index) => {
       /* if(card === props.store.lists[index].cardIds[index]){ */
            
        let cardId = card.cardIds;
        cardIds.map((id, index) =>{
            
        });

        /*return (
            <Card 
                key = {index}
                id = {props.store.store.allCards[cardId].id}
                title = {props.store.store.allCards[cardId].title}
                content = {props.store.store.allCards[cardId].content}
                />
        );*/
        
    });
    
    return(
        <section className="List">

        <div className="List-cards">
            {cards}
        </div>

        </section>
    )

}

export default List;