import { View, FlatList } from "react-native";

import MealItem from "./MealItem";

function MealList({ items }) {
  function renderMealItem({ item }) {
    const MealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item,
      imageUrl: item.imageUrl,
      duration: item.duration,
      affordability: item.affordability,
      complexity: item.complexity,
    };

    return <MealItem {...MealItemProps} />;
  }

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealList;
