import topBurger from "../../assets/img/top-burger.png";
import bottomBurger from "../../assets/img/bottom-burger.png";

const Cheese = () => (
  <div className="bg-yellow-400 h-4 w-44 flex justify-center text-xs">
    Cheese
  </div>
);
const Lettuce = () => (
  <div className="bg-green-400 h-4 w-40 flex justify-center text-xs">
    Lettuce
  </div>
);
const Tomato = () => (
  <div className="bg-red-400 h-4 w-36 flex justify-center text-xs">
    Tomato
  </div>
);
const Pickles = () => (
  <div className="flex gap-1 w-36">
    <div className="bg-green-500 h-4 w-full rounded-full flex justify-center text-xs">Pickles</div>
    <div className="bg-green-500 h-4 w-full rounded-full flex justify-center text-xs">Pickles</div>
  </div>
);
const Meat = () => (
  <div className="bg-red-800 h-4 w-32 flex justify-center text-xs">
    Meat
  </div>
);
const Mayo = () => (
  <div className="bg-yellow-100 h-4 w-36 flex justify-center text-xs">
    Mayo
  </div>
);
const Sauce = () => (
  <div className="bg-orange-400 h-4 w-36 flex justify-center text-xs">
    Sauce
  </div> 
);
export const BreadTop = () => (
  <div>
    <img src={topBurger} alt="" className="w-40"/>
  </div>
);
export const BreadBottom = () => (
  <div>
    <img src={bottomBurger} alt="" className="w-40"/>
  </div>
);

export const Ingredient = ({type, onClickX}) => (
  <div className="relative">
    <div onClick={onClickX} className="absolute -top-1 -right-2 text-[8px] bg-red-500 rounded-full w-4 h-4 flex justify-center items-center text-white cursor-pointer opacity-0 hover:opacity-100">
      X
    </div>
    {type === "cheese" && <Cheese />}
    {type === "meat" && <Meat />}
    {type === "lettuce" && <Lettuce />}
    {type === "tomato" && <Tomato />}
    {type === "pickles" && <Pickles />}
    {type === "mayo" && <Mayo />}
    {type === "sauce" && <Sauce />}
  </div>
);