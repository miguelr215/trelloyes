import React from 'react';
import List from './List.js';

function App(props) {
  console.log(props.store);
  
  const listMap = props.store.lists.map(function(list){
  return <List header={list.header} cards={/*list.cardIds or allCards*/} />
  });
  
  

  return (
    <main className='App'>
      <h1>Trelloyes!</h1>
      <div className='App-list'></div>
      {listMap}
    </main>
  );
}

export default App;
