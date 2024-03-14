import React from "react";

const Score = ({ playerScore, opponentScore }) => {
  return (
    <div className="pl-48 text-white text-lg">
      <p>Player Score: {playerScore}</p>
      <p>Opponent Score: {opponentScore}</p>
    </div>
  );
};

export default Score;
