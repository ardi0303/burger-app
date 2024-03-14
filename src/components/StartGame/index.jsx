import { Link } from 'react-router-dom';

const StartGame = ({ onClick }) => {
  return (
    <div className="flex justify-center">
        <Link to="/playgame" className="text-2xl bg-red-800 px-5 py-5 rounded-lg font-bold" onClick={onClick}>Start Game </Link>
    </div>
  );
};

export default StartGame;
