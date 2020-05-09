import React from 'react';
import List from './List/List';


function App(props){
  return (
      <div className="App">

        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>

        <div className="App-list">
          <List store = {props}/>
        </div>

        </div>
    );
}

export default App;
