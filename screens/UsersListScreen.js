import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import userService from "../api/userService";

const UsersListScreen = ({ navigation }) => {
  const getUsers = async () => {
    const users = await userService.getUsers();
  };
  return (
    <View style={styles.container}>
      <FlatList>
        data = {users}
        keyExtractor={(user) => user.id.toString()}
        renderItem=
        {({ item }) => {
          return <Item user={item} navigation={navigation} />;
        }}
      </FlatList>
    </View>
  );
};

export default UsersListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
