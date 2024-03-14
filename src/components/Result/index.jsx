import { useEffect, useState } from "react";

export default function Result({ myChoice, opponentChoice }) {
  const [gameResult, gameResultSet] = useState(null);

  function logic() {
    switch (myChoice) {
      case "kertas":
        if (opponentChoice === "kertas") return gameResultSet("draw");
        if (opponentChoice === "gunting") return gameResultSet("lose");
        if (opponentChoice === "batu") return gameResultSet("win");
      case "batu":
        if (opponentChoice === "batu") return gameResultSet("draw");
        if (opponentChoice === "kertas") return gameResultSet("lose");
        if (opponentChoice === "gunting") return gameResultSet("win");
      case "gunting":
        if (opponentChoice === "gunting") return gameResultSet("draw");
        if (opponentChoice === "kertas") return gameResultSet("win");
        if (opponentChoice === "batu") return gameResultSet("lose");

      default:
        return;
    }
  }

  useEffect(() => {
    logic()
  }, [myChoice, opponentChoice]);

  if(!myChoice) return null;

  return (
    <div className="pl-48">
      <p>
        Kamu memilih {myChoice}, sementara lawan memilih {opponentChoice}.{" "}
        <span className="font-bold">Kamu {gameResult}</span>
      </p>
    </div>
  );
}