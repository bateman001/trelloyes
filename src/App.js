import React from 'react';
import List from './List/List';
import STORE from './STORE';


class App extends React.Component{
    constructor(props){
      super(props);
      this.state = { 
        store: STORE 
      }

      this.deleteCard = this.deleteCard.bind(this);
      this.generateCard = this.generateCard.bind(this);
   }

  deleteCard(val){
   //STORE.lists[listKey].cardIds.splice(index, 1);
  STORE.lists.map(obj => {
   return obj.cardIds.splice(val, 1)
  })
    
  //  console.log(newSTORE)
    this.setState({ store: STORE })
    console.log(this.state)
  }

  generateCard(listKey){
    const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);

   const newCard = {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  

    STORE.lists[listKey].cardIds.push(id);
    STORE.allCards[`${id}`] = newCard;
    this.setState({ STORE });

  }

List() {
  return STORE.lists.map((val, index) => {
    return <List   
      id = {index}
      header = {val.header}
      cardIds = {val.cardIds}
      allCards = {STORE.allCards}
      deleteCard = {this.deleteCard}
      generateCard = {this.generateCard}
    />
   })
}

  render(){
    return (
        <div className="App">

          <header className="App-header">
            <h1>Trelloyes!</h1>
          </header>

          <div className="App-list">
            {this.List()}
          </div>

          </div>
       )
  }

}

export default App;
