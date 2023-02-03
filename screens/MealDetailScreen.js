import { useLayoutEffect, useContext } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import IconButton from "../components/IconButton";

import MealDetail from "../components/MealDetail";

import { MEALS } from "../data/dummy-data";
import { FavouritesContext } from "./store/constext/favourites.context";

function MealDetailScreen({ route, navigation }) {
  // getting id from route
  const mealId = route.params.mealId;

  //use Context
  const favouriteMealsCtx = useContext(FavouritesContext);

  // get data from id route
  const displayedMealDetail = MEALS.filter((mealItem) => {
    return mealItem.id === mealId;
  });

  function onPressHandler() {
    console.log("pressed");
  }

  //set icon and funtion on header
  const mealIsFavourite = favouriteMealsCtx.ids.includes(mealId);

  function changeFavouritesStatusHandler() {
    if (mealIsFavourite) {
      favouriteMealsCtx.removeFavourite(mealId);
    } else {
      favouriteMealsCtx.addFavourite(mealId);
      console.log(favouriteMealsCtx.ids);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "test",
      headerRight: "test",
      headerRight: () => {
        return (
          <IconButton
            name={mealIsFavourite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavouritesStatusHandler}
          />
        );
      },
    });
  }, [navigation, onPressHandler]);

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
