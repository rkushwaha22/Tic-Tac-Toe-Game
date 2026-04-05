import React, { useState } from 'react';
import './Board.css';

export default function Board() {
    const initialBoard = Array(9).fill(null);
    const [board, setBoard] = useState(initialBoard);
    const [isXTurn, setIsXTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    const checkWinner = (currentBoard) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let [a, b, c] of lines) {
            if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
                return currentBoard[a];
            }
        }

        if (currentBoard.every(cell => cell !== null)) {
            return 'Draw';
        }
        return null;
    };

    const handleClick = (index) => {
        // Stop if cell is already filled or there's a winner
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = isXTurn ? 'X' : 'O';
        setBoard(newBoard);

        const winResult = checkWinner(newBoard);
        if (winResult) {
            setWinner(winResult);
        } else {
            // Turn tabhi change karein jab game chal rha ho
            setIsXTurn(!isXTurn);
        }
    };

    const resetGame = () => {
        setBoard(initialBoard);
        setIsXTurn(true);
        setWinner(null);
    };

    return (
        <div className='game'>
            <h1>Tic Tac Toe Game</h1>

            <div className='board'>
                {board.map((cell, index) => (
                    /* Cell par X ya O ke hisaab se class dena styling mein help karega */
                    <div className={`cell ${cell}`} key={index} onClick={() => handleClick(index)}>
                        {cell}
                    </div>
                ))}
            </div>

            <div className='info'>
                {winner ? (
                    <p className="status-text">
                        {winner === 'Draw' ? (
                            "It's a Draw! 🤝"
                        ) : (
                            <>
                                Winner: <span>{winner}</span> 🏆
                            </>
                        )}
                    </p>
                ) : (
                    <p className="status-text">Next Turn: {isXTurn ? 'X' : 'O'}</p>
                )}

                <button className='btn btn-success btn-lg' onClick={resetGame}>
                    Restart
                </button>
            </div>
        </div>
    );
}