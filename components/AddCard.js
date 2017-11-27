import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput
} from "react-native";
import { addCard } from "../actions";

class AddCard extends Component {
  state = {
		question: "",
		answer: ""
	};

	submit = () => {
		console.log('submit add card', this.state.question);
		
	}

  render() {
    const deck = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text>Add a New Card to {deck.title} Deck</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={question => this.setState({ question })}
          value={this.state.question}
				/>

				<Text>Answer</Text>
				<TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={answer => this.setState({ answer })}
          value={this.state.answer}
				/>
        <Button
          style={{ padding: 10 }}
          onPress={() => this.submit()}
          title="Submit"
        />
      </View>
    );
  }
}

export default AddCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100
  }
});
