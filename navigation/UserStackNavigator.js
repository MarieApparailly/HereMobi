import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UsersListScreen from "../screens/sersListScreen";
import { screenOptions } from "../theme/styles";

// Screen stack for cocktail search by name tab
const UserStack = createNativeStackNavigator();

const UserStackNavigator = () => {
  return (
    <UserStack.Navigator initialRouteName="Users" screenOptions={screenOptions}>
      <UserStack.Screen
        name="Users"
        component={UsersListScreen}
        options={{ title: "Users" }}
      />
    </UserStack.Navigator>
  );
};

export default UserStackNavigator;
