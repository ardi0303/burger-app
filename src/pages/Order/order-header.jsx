import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import { formatNumber } from "../../utils/helper";
import { Link } from "react-router-dom";

export default function OrderHeader() {

  const allIngredients = useSelector((state) => state?.ingredients.ingredients);
  const selectedIngredients = useSelector((state) => state?.ingredients.selectedIngredients);
  const dispatch = useDispatch();
  const onReset = () => dispatch(resetIngredients());
  const isEmptySelectedIngredients = selectedIngredients.length === 0;

  const totalCost = () => {
    const filterBySelectedIngredients = selectedIngredients.map(
      (id) => allIngredients.find((item) => item?.id === id)?.price
    );    
    return `Rp${formatNumber(filterBySelectedIngredients.reduce((a,b) => a + b))}`;
  };

  const backButton =  
  {
    label: "Back",
    variant: "secondary",
    link: "/",
  }

  return (
    <section className="container mx-auto py-14">
      <div className="flex flex-col justify-between items-center gap-3 lg:mx-48 lg:flex-row">
        <div className="flex gap-6 items-center">
          <Link to={backButton?.link}>
            <Button variant={backButton?.variant}>{backButton?.label}</Button>
          </Link>
          <h3 className="text-3xl font-bold">Total: {!isEmptySelectedIngredients && totalCost()}</h3>
        </div>
        <div className="flex items-center gap-4 max-w-sm w-full">
          <div className="w-1/2">
            <Link to="/order?done=true">
              <Button disabled={isEmptySelectedIngredients}>Order Burger</Button>
            </Link>
          </div>
          <div className="w-1/2">
            {!isEmptySelectedIngredients && (
              <Button variant="secondary" onClick={onReset}>
                Reset
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}