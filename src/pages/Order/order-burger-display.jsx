import React from "react";
import {
  BreadBottom,
  BreadTop,
  Ingredient
} from "./ingredients";

export default function OrderBurgerDisplay({
  selectedIngredients = [],
  removeIngredient,
  ingredientCounts,
  allIngredients
}) {
  return (
    <section className="container mx-auto flex justify-center mb-14 gap-4">
      <div className="flex flex-col gap-1 items-center">
        <BreadTop />
        {selectedIngredients.reverse().map((id, idx) => (
          <Ingredient key={idx} type={id} onClickX={() => removeIngredient(idx)} />
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
