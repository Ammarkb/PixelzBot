import React,{useState} from 'react';
import Board from './Board';
import calculateWinnner from '../helper';

const style = 
{
  width : '200px',
  margin : '20px auto'
};

const Game = () =>
{
    const [history,setHistory] = useState(Array(9).fill(null));
    const Winner = calculateWinnner(history);
    const [xisnext,Setxisnext] = useState(true);
    const xO = xisnext ? "X" : "O";

    const handleClick = (i) =>
    {
        const BoardCopy = [...history];
        if(Winner || BoardCopy[i])return;
        BoardCopy[i] = xO;
        setHistory(BoardCopy);
        Setxisnext(!xisnext);

    }
    return (
        <>
          <h1>React Tic Tac Toe - With Hooks</h1>
          <Board squares={history} onClick={handleClick}/>
          <div className="info-wrapper"  style={style}>
            <div>
            </div>
            <h3>{Winner ? "Winner: " + Winner : "Next Player: " + xO}</h3>
          </div>
        </>
      );
};

export default Game;