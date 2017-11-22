import React, { Component } from "react";
import {
	Text,
	View,
	TouchableOpacity
} from "native-base";
import CustomStatusBar from "./CustomStatusBar";
import { StackNavigator } from "react-navigation";
import Decks from "./Decks";

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
	Dashboard: {
		screen: Dashboard,
		navigationOptions: {
			title: 'Dashboard'
		}
  },
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
