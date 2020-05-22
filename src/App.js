import React from 'react';
import List from './List/List';
import STORE from './STORE';


class App extends React.Component{
    constructor(props){
      super(props);
      this.state = { 
        store: STORE 
      }
   }

   deleteCard = (val) => {
   //STORE.lists[listKey].cardIds.splice(index, 1);
  const newList = this.state.store.lists.map(obj => {
    obj.cardIds = obj.cardIds.filter(x => x !== val)
      return obj;
  })
  console.log(newList)
    
    this.setState({ store: {
      ...this.state.store,
      lists: newList
     }})
  }

  generateCard = (listId) => {
    const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);

   const newCard = {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  
    const newList = this.state.store.lists.map(obj => {
      if(obj.id === listId){
        obj.cardIds = [...obj.cardIds, id]
      }
      return obj;
    })

    const newAllCards = {
      ...this.state.store.allCards, 
      [id]: newCard
    }
    this.setState({ store: {
      lists: newList,
      allCards: newAllCards
    }});
  }

List() {
  return this.state.store.lists.map((val, index) => {
    return <List   
      id = {val.id}
      header = {val.header}
      cardIds = {val.cardIds}
      allCards = {this.state.store.allCards}
      deleteCard = {this.deleteCard}
      generateCard = {this.generateCard}
    />
   })
}

  render(){
    console.log(this.state)
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
