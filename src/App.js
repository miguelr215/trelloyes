import React from 'react';
import List from './List.js';
import './App.css';

function App(props) {
  console.log(props.store);

  const listMap = props.store.lists.map(function(list){
    return (
      <List 
        key={list.id}
        header={list.header} 
        cards={list.cardIds.map(id => props.store.allCards[id])} 
        />
  )});

  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {listMap}
      </div>
    </main>
  );
};

export default App;
