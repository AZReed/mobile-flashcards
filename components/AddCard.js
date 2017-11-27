import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput
} from "react-native";

class AddCard extends Component {
  state = {
    text: ""
	};

	submit = () => {
		console.log('submit add card')
	}

  render() {
    const deck = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text>Add a New Card to {deck.title} Deck</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
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
