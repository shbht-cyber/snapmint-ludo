import React, { useState } from 'react';
import Ludo from './Ludo';

const App = () => {
  const [dice , setDice] = useState(0)

  function handleDiceRoll () {
    const num = Math.floor(Math.random() * 6 + 1);
    setDice(num)
  }
  return <div style={{
    textAlign: 'center'
  }}>
    <h1>Dice value : {dice}</h1>
    <button onClick={handleDiceRoll}>Roll</button>
    <Ludo num={dice}/>
  </div>
}

export default App;