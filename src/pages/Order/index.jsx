import { useState, useEffect } from "react";
import OrderBurgerDisplay from "./order-burger-display";
import OrderHeader from "./order-header";
import OrderIngredientsPicker from "./order-ingredients-picker";
import { useSelector } from "react-redux";

export default function OrderPage() {
  const [isReachMax, isReachMaxSet] = useState(false);
  const [ingredientCounts, setIngredientCounts] = useState({});

  const ingredients = useSelector((state) => state?.ingredients.ingredients);
  const selectedIngredients = useSelector((state) => state?.ingredients.selectedIngredients);

  console.log(ingredients);

  useEffect(() => {
    const counts = selectedIngredients.reduce((acc, id) => {
      acc[id] = (acc[id] || 0) + 1;
      return acc;
    }, {});
    setIngredientCounts(counts);
  }, [selectedIngredients]);

  useEffect(() => {
    if(selectedIngredients.length >= 10) {
      isReachMaxSet(true);
    }
  }, [selectedIngredients]);
  console.log(selectedIngredients);
  return (
    <section>
      <OrderHeader />
      <OrderBurgerDisplay
        ingredientCounts={ingredientCounts}
      />
      <OrderIngredientsPicker
        isReachMax={isReachMax}
      />
    </section>
  );
}