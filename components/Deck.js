import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

export default class Deck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Text>hello</Text>
        </View>
        <View style={styles.item}>
          <Button
            raised
            icon={{ name: "home", size: 32 }}
            buttonStyle={{ backgroundColor: "red", borderRadius: 10 }}
            textStyle={{ textAlign: "center" }}
            title={`Welcome to\nReact Native Elements`}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  item: {
    alignItems: "center"
  }
});
