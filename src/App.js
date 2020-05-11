import React from 'react';
import List from './List/List';


function App(props){
  
  let list = props.store.lists.map((val, index) => {

      return(
        <List 
          id = {index}
          header = {val.header}
          cardIds = {val.cardIds}
          allCards = {props.store.allCards}
          />
      );


  });

  console.log(list);

  return (
      <div className="App">

        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>

        <div className="App-list">
          {list}; 
        </div>

        </div>
    );

}

export default App;
