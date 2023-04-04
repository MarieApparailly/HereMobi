import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import userService from "../api/userService";

const UsersListScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const users = await userService.getUsers();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Utilisateurs :</Text>
      <Text>{users}</Text>
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
