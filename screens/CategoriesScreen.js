import { View, Text, StyleSheet, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";

import { CATEGORIES } from "../data/dummy-data";

import CategoryItem from "../components/CategoryItem";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem({ item }) {
    function pressHandler() {
      navigation.navigate("MealsOverview", { categoryId: item.id });
    }

    return (
      <CategoryItem
        children={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryItem}
          numColumns={2}
        />
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CategoriesScreen;
