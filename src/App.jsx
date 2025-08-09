import React, { useEffect, useState } from 'react'
import ScoreBoard from './components/ScoreBoard';
import GameBoard from './components/GameBoard';
import { getAIMoveFromOpenRouter } from './utilis/aiOpenRouter';
import { checkWinner } from './utilis/winner';

const App = () => {

  //state for the 3x3 game board(9 cells)
  const [board, setBoard] = useState(Array(9).fill(null));


  //is it player turn
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);

  //who won ("x" , "o" or "draw")
  const [winner, setWinner] = useState(null);

  //score tracking
  const [score, setScore] = useState({ X: 0, O: 0 });

  //when a player clicks a square

  const handleClick = (i) => {
    if (!isPlayerTurn || board[i] || winner) return;

    const newBoard = [...board];
    newBoard[i] = "X";
    setBoard(newBoard);
    setIsPlayerTurn(false);


  }

  useEffect(() => {
    if (winner) return; // prevent double scoring

    //check if someone has won 

    const result = checkWinner(board);

    if (result?.winner) {
      setWinner(result.winner);
    
    if (result.winner === "X" || result.winner === "O") {
      
      setScore(prevScore => ({
        ...prevScore,
        [result.winner]: prevScore[result.winner] + 1
      }));
    }
    return;
  }

// if it's AI's turn and game not over 
    if (!isPlayerTurn) {
      const aiTurn = async () => {
        const Move = await getAIMoveFromOpenRouter(board);
       if (Move >= 0 && Move <= 8 && board[Move] === null) {
        const newBoard = [...board];
        newBoard[Move] = "O";
        setBoard(newBoard);
        setIsPlayerTurn(true);
      }
    }
    const timeout = setTimeout(aiTurn, 600);
    return () => clearTimeout(timeout);
  }
  }, [board, isPlayerTurn, winner]);

  //Restart the game
   const restartGame = () => {
         setBoard(Array(9).fill(null));
         setWinner(null);
         setIsPlayerTurn(true);
      }

  return (
    <div className='min-h-screen bg-[#0F172A] text-white  flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold mb-4 '>Tic Tac Toe</h1>
      <ScoreBoard score={score} />
      <GameBoard board={board} handleClick={handleClick} />

      {winner && (
        <div className='text-2xl font-bold mt-4'>
          {winner === "Draw" ? "It's a draw!" : `${winner} wins!`}
          <button className='ml-4 mt-2 px-4 py-2 bg-blue-500 text-white rounded' onClick={restartGame}>
            Play Again
          </button>
        </div>
      )}
    </div>

  )
}

export default App