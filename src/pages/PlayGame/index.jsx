import { useState, useEffect } from "react";
import GameTitle from "../../components/GameTitle";
import Score from "../../components/Score";
import Versus from "../../components/Versus";
import Picker from "../../components/Picker";
import Result from "../../components/Result";
import Attempt from "../../components/Attempt";
import Reset from "../../components/Reset";

const PlayGame = () => {
  const [myChoice, myChoiceSet] = useState(null);
  const [opponentChoice, opponentChoiceSet] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [resetting, setResetting] = useState(false);

  useEffect(() => {
    if (attempt === 10) {
      setResetting(true);
    }
  }, [attempt]);

  function generateOpponentPicks() {
    const randomNumber = Math.random();
    const picks =
      randomNumber > 0.7
        ? "batu"
        : randomNumber > 0.3
        ? "gunting"
        : "kertas";
    return picks;
  }

  function onPlayerChoosed(val) {
    myChoiceSet(val);
    const opponentPick = generateOpponentPicks();
    opponentChoiceSet(opponentPick);
    calculateResult(val, opponentPick);
    setAttempt((prevAttempt) => prevAttempt + 1);
  }

  function calculateResult(playerChoice, opponentChoice) {
    if (
      (playerChoice === "batu" && opponentChoice === "gunting") ||
      (playerChoice === "gunting" && opponentChoice === "kertas") ||
      (playerChoice === "kertas" && opponentChoice === "batu")
    ) {
      setPlayerScore((prevScore) => prevScore + 1);
    } else if (
      (playerChoice === "gunting" && opponentChoice === "batu") ||
      (playerChoice === "kertas" && opponentChoice === "gunting") ||
      (playerChoice === "batu" && opponentChoice === "kertas")
    ) {
      setOpponentScore((prevScore) => prevScore + 1);
    }
  }

  function resetGame() {
    setPlayerScore(0);
    setOpponentScore(0);
    setAttempt(0);
    setResetting(false);
  }

  if (resetting) {
    return (
      <div className="bg-emerald-500 py-10">
        <GameTitle />
        <div className="mt-10">
        {playerScore > opponentScore ? (
          <p className="text-2xl text-white font-bold text-center">You Win</p>
        ) : <p className="text-2xl text-white font-bold text-center">You Lose</p>}
          <Reset onClick={resetGame} />
        </div>
      </div>
    );
  }
  return (
    <div className="bg-emerald-500 py-10">
      <GameTitle />
      <Attempt attempt={attempt} />
      <Score playerScore={playerScore} opponentScore={opponentScore} />
      <Result myChoice={myChoice} opponentChoice={opponentChoice} />
      <div className="flex justify-center gap-4 pt-4">
        {opponentChoice === "batu" ? (
          <Picker value="batu" label="Batu" />
        ) : opponentChoice === "gunting" ? (
          <Picker value="gunting" label="Gunting" />
        ) : opponentChoice === "kertas" ? (
          <Picker value="kertas" label="Kertas" />
        ) : opponentChoice === null ? (
          <Picker value="null" label="Comp" />
        ) : null}
      </div>
      <Versus />

      <div className="flex justify-center gap-4 pt-4">
        <Picker
          value="batu"
          label="Batu"
          onClick={() => onPlayerChoosed("batu")}
        />
        <Picker
          value="gunting"
          label="Gunting"
          onClick={() => onPlayerChoosed("gunting")}
        />
        <Picker
          value="kertas"
          label="Kertas"
          onClick={() => onPlayerChoosed("kertas")}
        />
      </div>
    </div>
  ) 
}
  
export default PlayGame;