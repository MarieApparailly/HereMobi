import React from "react";
import { StatusBar } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserStackNavigator from "./UserStackNavigator";

const Tab = createBottomTabNavigator();

const RootTabNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#f4511e" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // Icons will be different if the tab is focused
          tabBarIcon: ({ focused, color, size }) => {
            const icons = {
              UserStack: "ios-list-outline",
              UserMapStack: "ios-map-outline",
            };
            return (
              <Ionicons
                name={icons[route.name] || "ios-menu"}
                size={25}
                color={color}
              />
            );
          },
          // Hiding tab navigator header to show only stack header
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="UserStack"
          component={UserStackNavigator}
          options={{ title: "UserStack" }}
        />
        {/* <Tab.Screen
          name="IngredientStack"
          component={IngredientStackNavigator}
          options={{ title: "Ingredients" }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootTabNavigator;
