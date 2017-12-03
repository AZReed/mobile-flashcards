import React, { Component } from "react";
import { Container } from "native-base";
import CustomStatusBar from "./CustomStatusBar";
import { StackNavigator } from "react-navigation";
import { Root } from "native-base";
import Decks from "./Decks";
import AddDeck from "./AddDeck";
import Deck from "./Deck";
import AddCard from "./AddCard";
import Quiz from "./Quiz";

const Stack = StackNavigator({
  Decks: {
    screen: Decks
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      title: "Add New Deck"
    }
  },
  Deck: {
    screen: Deck
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: "Add Card"
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: "Quiz"
    }
  }
});

class Home extends Component {
  render() {
    return (
			<Root>
				<Container>
					<CustomStatusBar backgroundColor={"#f26f28"} barStyle="light-content" />
					<Stack />
				</Container>
			</Root>
    );
  }
}

export default Home;
