import React, { useState } from 'react'

const App = () => {

  //state for the 3x3 game board(9 cells)
  const [board,setBoard] = useState(Array(9).fill(null));
  console.log(board);

  //is it player turn
 const [isPlayerTurn, setIsPlayerTurn] = useState(true);

 //who won ("x" , "o" or "draw")
  const [winner, setWinner] = useState(null);

  //score tracking
  const [score, setScore] = useState({x: 0, o: 0, draw: 0});

  return (
    <div><h1 class="text-3xl font-bold underline">
    Hello world!
  </h1></div>
  )
}

export default App