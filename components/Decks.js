import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Card, List, ListItem } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";

export default class Decks extends Component {

  deckCards = decks => {
    let arr = [];
    Object.keys(decks).map( deck => {
      arr.push(
        <Card key={decks[deck]['title']} title={decks[deck]['title']}>
          <Text>({decks[deck]['questions'].length}) questions</Text>
        </Card>
      );
    });
    return arr;
  };

  render() {
    const list = [
      {
        title: "Appointments",
        icon: "av-timer"
      },
      {
        title: "Trips",
        icon: "flight-takeoff"
      }
      // more items
    ];

    const decks = {
      React: {
        title: "React",
        questions: [
          {
            question: "What is React?",
            answer: "A library for managing user interfaces"
          },
          {
            question: "Where do you make Ajax requests in React?",
            answer: "The componentDidMount lifecycle event"
          }
        ]
      },
      JavaScript: {
        title: "JavaScript",
        questions: [
          {
            question: "What is a closure?",
            answer:
              "The combination of a function and the lexical environment within which that function was declared."
          }
        ]
      }
    };

    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Text>hello</Text>
        </View>
        <View style={styles.item}>
          {this.deckCards(decks)}
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
