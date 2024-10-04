/* eslint-disable react/prop-types */
import { useState } from "react";

const Square = ({ value, handelClick }) => {
  return (
    <button
      onClick={handelClick}
      className="bg-white text-black font-bold m-1 h-12 w-12 border border-gray-400 text-xl "
    >
      {value}
    </button>
  );
};

const resultCalcFunc = (square) => {
  const winnerList = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winnerList.length; i++) {
    const [a, b, c] = winnerList[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
};

const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isXturn, setIsXturn] = useState(true);

  let win = resultCalcFunc(square);

  let stutas;

  if (win) {
    stutas = `${win} is win`;
  } else {
    stutas = `Next player : ${isXturn ? "x" : "o"}`;
  }

  const handelClick = (index) => {
    if (square[index] || win) return;
    const nextSqure = [...square];
    if (isXturn) {
      nextSqure[index] = "x";
    } else {
      nextSqure[index] = "o";
    }
    setIsXturn(!isXturn);
    setSquare(nextSqure);
  };

  return (
    <>
      <div>{stutas}</div>
      <div className="flex">
        <Square value={square[0]} handelClick={() => handelClick(0)} />
        <Square value={square[1]} handelClick={() => handelClick(1)} />
        <Square value={square[2]} handelClick={() => handelClick(2)} />
      </div>
      <div className="flex">
        <Square value={square[3]} handelClick={() => handelClick(3)} />
        <Square value={square[4]} handelClick={() => handelClick(4)} />
        <Square value={square[5]} handelClick={() => handelClick(5)} />
      </div>
      <div className="flex">
        <Square value={square[6]} handelClick={() => handelClick(6)} />
        <Square value={square[7]} handelClick={() => handelClick(7)} />
        <Square value={square[8]} handelClick={() => handelClick(8)} />
      </div>
    </>
  );
};

export default Board;
