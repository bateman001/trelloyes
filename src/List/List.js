import React from 'react';
import Card from '../Card/Card';


class List extends React.Component{
      

    Cards(){ 
        console.log(this.props.allCards)
      return  this.props.cardIds.map((val, index) => {
        return (
            <Card 
                val = {val}
                id = {index}
                title = {this.props.allCards[val].title}
                content = {this.props.allCards[val].content}
                deleteCard = {this.props.deleteCard}
            />
        );
    })
}

    render(){
        return (
            <section className="List" key = {this.props.id}>
                <header className="List-header">
                    <h2>{this.props.header}</h2>
                    <button type='button' onClick={() => this.props.generateCard(this.props.id)}>Add Random Card</button>
                </header>
                {this.Cards()}
            </section>

         )
    }
        
}

export default List;