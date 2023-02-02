import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavouriteScreen from "./screens/FavouriteScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerItemStyle: { backgroundColor: "#ecba9b" },
        drawerContentStyle: { backgroundColor: "#3f2f25" },
      }}
    >
      <Drawer.Screen
        name="allCategories"
        component={CategoriesScreen}
        options={{ title: "Categories" }}
      />
      <Drawer.Screen name="Favourite" component={FavouriteScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "white",
          contentStyle: { backgroundColor: "#3f2f25" },
        }}
      >
        <Stack.Screen
          name="Categories"
          component={DrawerNavigator}
          options={{ title: "All Categories", headerShown: false }}
        />
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
