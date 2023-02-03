import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from "react-native";

function MealDetail({
  imageUrl,
  title,
  complexity,
  affordability,
  duration,
  ingredients,
  steps,
  isGlutenFree,
  isVegan,
  isVegetarian,
  isLactoseFree,
}) {
  return (
    <ScrollView style={styles.rootScreen}>
      <View style={styles.mealDetailContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.cardContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.miscDetail}>
            <Text style={styles.text}>- {affordability}</Text>
            <Text style={styles.text}>- {complexity}</Text>
            <Text style={styles.text}>- {duration} minutes</Text>
          </View>
          <View>
            <Text style={styles.textBold}>Ingredients :</Text>
            {ingredients.map((ingredient) => (
              <Text key={ingredient} style={styles.text}>
                - {ingredient}
              </Text>
            ))}
          </View>
          <View>
            <Text style={styles.textBold}>Steps :</Text>
            {steps.map((step) => (
              <Text key={step} style={styles.text}>
                - {step}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetail;

const styles = StyleSheet.create({
  rootScreen: { flex: 1 },
  mealDetailContainer: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 200,
  },
  cardContainer: {
    padding: 16,
    marginVertical: 16,
    backgroundColor: "#ecbfa2",
    borderRadius: 8,
  },
  title: {
    color: "#3f2f25",
    fontSize: 24,
    fontWeight: "bold",
    paddingBottom: 8,
  },
  text: {
    color: "#3f2f25",
    fontSize: 16,
    paddingVertical: 4,
  },
  textBold: {
    color: "#3f2f25",
    fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 4,
  },
  miscDetail: {
    justifyContent: "space-evenly",
    backgroundColor: "#ecbfa2",
    borderRadius: 8,
  },
});
