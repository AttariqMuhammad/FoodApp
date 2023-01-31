import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
  Image,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  affordability,
  complexity,
  onPress,
}) {
  const navigation = useNavigation();

  function pressHandler() {
    navigation.navigate("MealDetail", { mealId: id });
  }

  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.detailsContainer}>
              <Text style={styles.detailText}>{duration} minutes</Text>
              <Text style={styles.detailText}>{complexity.toUpperCase()}</Text>
              <Text style={styles.detailText}>
                {affordability.toUpperCase()}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 8,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "#ecbfa2",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
  },
  image: {
    width: 150,
    height: 150,
  },
  contentContainer: {
    flex: 1,
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  detailsContainer: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    padding: 8,
  },
  detailText: {
    fontSize: 14,
  },
});
