import { formatNumber } from "../../utils/helper";

export default function OrderIngredientsPicker({
  allIngredients = [],
  manageIngredients,
  isReachMax
}) {

  const disableStyle = isReachMax ? "opacity-50 cursor-not-allowed" : "";
  return (
    <section className="container mx-auto my-6">
      {isReachMax && <p className="text-center">You reach the maximal quantity of ingredients</p>}
      <div className="grid grid-cols-4 gap-8 max-w-sm w-full mx-auto">
        {allIngredients.map((item) => (
          <div
            key={item?.id}
            className= {`flex flex-col items-center cursor-pointer hover:scale-[0.95] active:opacity-80 bg-amber-300 rounded-md p-2 ${disableStyle}`}
            onClick={() => isReachMax ? null : manageIngredients(item?.id)}
          >
            <p className="font-bold">{item?.name}</p>
            <p className="text-sm">Rp{formatNumber(item?.price)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}