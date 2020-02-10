import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default class Users extends React.Component {
  render() {
    return (
      <View>
        <Text>Users</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
