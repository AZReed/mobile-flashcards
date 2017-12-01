import React, { Component } from "react";
import {
	Text,
	View,
	Button,
	TouchableOpacity
} from "native-base";
import CustomStatusBar from "./CustomStatusBar";
import { StackNavigator } from "react-navigation";
import Decks from "./Decks";
import AddDeck from "./AddDeck";
import Deck from "./Deck";
import AddCard from "./AddCard";
import Quiz from "./Quiz";

const Dashboard = () => (
  <View>
    <Text>This is the Dashboard</Text>
  </View>
);

const Stack = StackNavigator({
  Decks: {
		screen: Decks,
		navigationOptions: {
			title: 'Decks'
		}
	},
	AddDeck: {
		screen: AddDeck,
		navigationOptions: {
			title: 'Add New Deck'
		}
	},
	Deck: {
		screen: Deck,
		navigationOptions: {
			title: 'Deck',
/* 			headerLeft: (
				<Button
					title='Atras'
				/>
			) */
		}
	},
	AddCard: {
		screen: AddCard,
		navigationOptions: {
			title: 'Add Card'
		}
	},
	Quiz: {
		screen: Quiz,
		navigationOptions: {
			title: 'Quiz'
		}
	}
})

class Home extends Component {
  render() {
    return (
			<View>
				<CustomStatusBar backgroundColor={'#f26f28'} barStyle="light-content" />
				<Stack />
			</View>
    );
  }
}

export default Home;
