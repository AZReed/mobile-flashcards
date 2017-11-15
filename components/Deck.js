import React, { Component } from "react";
import { StyleSheet, View, Text } from 'react-native'

export default class Deck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Text>
            hello
          </Text>
        </View>
        <View style={styles.item}>
          <Text>
            hello
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  item: {
    alignItems: 'center',
  }
});