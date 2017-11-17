import React, { Component } from "react";
//mport { StyleSheet, View, Text } from "react-native";
//import { Button, Card, List, ListItem, Badge, Header } from "react-native-elements";
import { Badge, Card, CardItem, View, Body, Text } from "native-base";
import { Entypo } from "@expo/vector-icons";

export default class Decks extends Component {
  deckCards = decks => (
    Object.keys(decks).map(deck => (
      <Card key={decks[deck]["title"]}>
        <CardItem >
          <Body>
            <Text>{decks[deck]["title"]}</Text>
            <Badge>
              <Text>{decks[deck]["questions"].length}</Text>
            </Badge>
          </Body>
        </CardItem>
    </Card>
      ))
  );

  render() {
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
      <View>
        {this.deckCards(decks)}
      </View>
    );
  }
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  item: {
    alignItems: "center"
  }
}); */
