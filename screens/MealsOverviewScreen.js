import { useLayoutEffect } from "react";

import { MEALS, CATEGORIES } from "../data/dummy-data";

import MealList from "../components/MealList";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, catId]);

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  return <MealList items={displayedMeals} />;
}

export default MealsOverviewScreen;
