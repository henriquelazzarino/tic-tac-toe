import { useContext, useEffect, useState } from "react";
import { BoardContext } from "../context/BoardContext";
import "./Game.css"

const Game = () => {
  const { board, setBoard } = useContext(BoardContext);
  const [isX, setIsX] = useState(true);
  const [winner, setWinner] = useState(null);

  const atualizarBoard = (i, j) => {
    const copyBoard = [...board.map(row => [...row])];
    copyBoard[i][j] = isX ? 1 : -1;
    setBoard(copyBoard);
    setIsX(!isX);
  }

  const checkWinner = () => {
    const linesToCheck = [
      // Rows
      board[0],
      board[1],
      board[2],
      // Columns
      [board[0][0], board[1][0], board[2][0]],
      [board[0][1], board[1][1], board[2][1]],
      [board[0][2], board[1][2], board[2][2]],
      // Diagonals
      [board[0][0], board[1][1], board[2][2]],
      [board[0][2], board[1][1], board[2][0]]
    ];

    for (const line of linesToCheck) {
      if (line.every(cell => cell === line[0] && cell !== 0)) {
        return line[0];
      }
    }

    return null;
  };

  useEffect(()=>{
    setWinner(checkWinner())
  }, [board])

  useEffect(()=>{
    if (winner!=null) {
      console.log(winner)
    }
  }, [winner])
  
  return (
      <div className="board">
        {board.map((row, i) => (
          row.map((value, j) => (
            <div className="cell" onClick={() => atualizarBoard(i, j)}>
              {value==1? "X":value==-1?"O":null}
            </div>
          )
        )))}
      </div>
  );
};

export default Game;
