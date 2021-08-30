import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List'

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string  // optional
  }[]
}

function App() {
  const [ people, setPeople ] = useState<IState["people"]>([
    {
      name: 'Kerry', 
      url: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg', 
      age: 20, 
      note: 'awesome'
    }
  ]); 

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
