import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import MealDetail from "../components/MealDetail";

import { MEALS } from "../data/dummy-data";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;

  const displayedMealDetail = MEALS.filter((mealItem) => {
    return mealItem.id === mealId;
  });

  function rederMealDetail({ item }) {
    const mealItemProps = {
      id: item.id,
      title: item.title,
      affordability: item.affordability,
      complexity: item.complexity,
      imageUrl: item.imageUrl,
      duration: item.duration,
      ingredients: item.ingredients,
      steps: item.steps,
      isGlutenFree: item.isGlutenFree,
      isVegan: item.isVegan,
      isVegetarian: item.isVegetarian,
      isLactoseFree: item.isLactoseFree,
    };

    return <MealDetail {...mealItemProps} />;
  }

  return (
    <View>
      <FlatList
        data={displayedMealDetail}
        keyExtractor={(item) => item.id}
        renderItem={rederMealDetail}
      />
    </View>
  );
}

export default MealDetailScreen;
