import GameTitle from "../../components/GameTitle";
import StartGame from "../../components/StartGame";

const LandingPage = () => {
  return (
    <div className="bg-emerald-500 py-10">
        <GameTitle />
        <div className="pt-10">
            <StartGame />
        </div>
    </div>
  ) ;
}
  
export default LandingPage;