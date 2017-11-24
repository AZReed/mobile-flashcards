import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { saveDeckTitle } from "../utils/api";

class AddDeck extends Component {
  state = {
    input: "new Deck"
  };

  submit = () => {
		//saveDeckTitle(this.state.text)
		console.log(this.props.navigation.goBack())
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>What is the title of your new Deck</Text>
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

export default AddDeck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80
  }
});
