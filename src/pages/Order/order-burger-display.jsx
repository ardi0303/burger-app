import React from "react";
import {
  BreadBottom,
  BreadTop,
  Ingredient
} from "./ingredients";
import { useDispatch, useSelector } from "react-redux";
import { removeIngredient } from "../../store/slice/ingredients";

export default function OrderBurgerDisplay({
  ingredientCounts,
}) {

  const allIngredients = useSelector((state) => state?.ingredients.ingredients);
  const selectedIngredients = useSelector((state) => state?.ingredients.selectedIngredients);
  const dispatch = useDispatch();
  const manageIngredient = (idx) => dispatch(removeIngredient(idx));
  console.log(selectedIngredients);
  return (
    <section className="container mx-auto flex justify-center mb-14 gap-4">
      <div className="flex flex-col gap-1 items-center">
        <BreadTop />
        {[...selectedIngredients].reverse().map((id, idx) => (
          <Ingredient key={idx} type={id} onClickX={() => manageIngredient(selectedIngredients.length - 1 - idx)} />
        ))}
        <BreadBottom />
      </div>
      <div>
        <p>Ingredient Counts:</p>
        <ul>
          {Object.entries(ingredientCounts).map(([id, count]) => (
            <li key={id}>{`${allIngredients.find(ingredient => ingredient.id === id).name}: ${count}x = ${count * allIngredients.find(ingredient => ingredient.id === id).price}`}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
