import React, { Component } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
//import { Button, Card, List, ListItem, Badge, Header } from "react-native-elements";
import {
  Container,
  Badge,
  Card,
  Content,
  CardItem,
  View,
  Body,
  Text
} from "native-base";
import { Entypo } from "@expo/vector-icons";
//import { connect } from "react-redux";
import { addDeck, saveDeckTitle } from "../utils/api";
import { retrieveDecks } from "../actions";

class Decks extends Component {

  componentDidMount() {
    console.log(retrieveDecks())
    /* this.props.retrieveDecks(); */
  }

  deckCards = decks => (
    <Card style={styles.container}>
      {Object.keys(decks).map(deck => (
        <CardItem key={decks[deck]["title"]} style={styles.item}>
          <Body>
            <View>
              <TouchableOpacity
                onPress={() => console.log(decks[deck]["title"])}
              >
                <Text>{decks[deck]["title"]}</Text>
              </TouchableOpacity>
            </View>
            <Badge>
              <Text>{decks[deck]["questions"].length}</Text>
            </Badge>
          </Body>
        </CardItem>
      ))}
    </Card>
  );

  handleClick = (title) => {
    saveDeckTitle(title);
    console.log(title, retrieveDecks())
  }

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
      },
      Foobar: {
        title: "Foobar",
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
        <View style={styles.container}>
          {Object.keys(decks).map((deck, num) => (
            <View key={decks[deck]["title"]} style={styles.item}>
              <TouchableOpacity onPress={() => this.handleClick(decks[deck]["title"])}>
                <Text>{decks[deck]["title"]} ({decks[deck]["questions"].length} cards)</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View>
          <TouchableOpacity onPress={() => this.addDeck()}>
              <Text>Add Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    retrieveDecks: () => dispatch(retrieveDecks())
  }
}

export default Decks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "stretch",
    marginTop: 100
  },
  item: {
    height: 25
  }
});