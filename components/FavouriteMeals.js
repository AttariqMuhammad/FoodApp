import MealList from "./MealList";
import { useContext } from "react";

//DATA
import { MEALS } from "../data/dummy-data";

//context
import { FavouritesContext } from "../screens/store/constext/favourites.context";

function FavouriteMeals() {
  const favouritesCtx = useContext(FavouritesContext);

  const favouriteMeals = MEALS.filter((mealItem) => {
    return favouritesCtx.ids.includes(mealItem.id);
  });

  return <MealList items={favouriteMeals} />;
}

export default FavouriteMeals;
