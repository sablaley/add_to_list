import React, { useState } from 'react';

import './App.css';
import List from './component/List';
import AddToList from './component/AddToList';

export interface Istate {
  people: {
    name: string
    age: number
    img: string
    note?: string
  }[]
}
function App() {
  // const [people, setPeople] = useState<{name:string,age:number,url:string,note:string}[]>([])
  const [people, setPeople] = useState<Istate["people"]>([
    {
      name: "LeBron James",
      age: 35,
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team",
    },
    {
      name: "Kobe Bryant",
      age: 42,
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2549.png"
    }
  ])
  people.map(person => person.age)
  return (
    <div className="App">
      <h3>People invited to my Party</h3>
      <List people={people} />
      <AddToList setPeople={setPeople} people={people}/>
    </div>
  )
}

export default App;