import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import UsersList from "./UsersList";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Splitwise App</Text>
        <UsersList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
