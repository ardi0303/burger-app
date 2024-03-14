import { useState, useEffect } from "react";
import OrderBurgerDisplay from "./order-burger-display";
import OrderHeader from "./order-header";
import OrderIngredientsPicker from "./order-ingredients-picker";

const allIngredients = [
  {
    id: "cheese",
    name: "Cheese",
    price: 5000,
  },
  {
    id: "lettuce",
    name: "Lettuce",
    price: 1000,
  },
  {
    id: "tomato",
    name: "Tomato",
    price: 2500,
  },
  {
    id: "pickles",
    name: "Pickles",
    price: 2000,
  },
  {
    id: "meat",
    name: "Meat",
    price: 14000,
  },
  {
    id: "mayo",
    name: "Mayo",
    price: 4000,
  },
  {
    id: "sauce",
    name: "Sauce",
    price: 4000,
  },
];

export default function OrderPage() {
  const [selectedIngredients, selectedIngredientsSet] = useState([]);
  const [isReachMax, isReachMaxSet] = useState(false);
  const [ingredientCounts, setIngredientCounts] = useState({});

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

  function manageIngredients(type, id, idx) {
    if (type === "add") {
      selectedIngredientsSet((prev) => [...prev, id]);
    }
    if (type === "remove") {
      selectedIngredientsSet((prev) => {
        const filtered = [...prev].filter((_, index) => index !== idx);
        return filtered;
      });
    }
  }
  console.log(selectedIngredients);
  return (
    <section>
      <OrderHeader
        allIngredients={allIngredients}
        selectedIngredients={selectedIngredients}
        onReset={() => {
          selectedIngredientsSet([]);
          isReachMaxSet(false);
        }}
      />
      <OrderBurgerDisplay
        selectedIngredients={selectedIngredients}
        removeIngredient={(idx) => manageIngredients("remove", undefined, idx)}
        ingredientCounts={ingredientCounts}
        allIngredients={allIngredients}
      />
      <OrderIngredientsPicker
        allIngredients={allIngredients}
        manageIngredients={(id) => manageIngredients("add", id)}
        isReachMax={isReachMax}
      />
    </section>
  );
}