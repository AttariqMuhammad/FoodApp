import { View, Text, StyleSheet, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";

import { CATEGORIES } from "../data/dummy-data";

import CategoryItem from "../data/components/CategoryItem";

function Home() {
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CategoryItem children={item.title} color={item.color} />
          )}
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
    backgroundColor: "#24180f",
  },
});

export default Home;
