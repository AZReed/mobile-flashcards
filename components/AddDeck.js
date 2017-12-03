import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { addDeck } from "../actions";
///import { saveDeckTitle } from "../utils/api";
import { connect } from "react-redux";

class AddDeck extends Component {
  state = {
    input: "new Deck"
  };

  submit = () => {
    this.props.addDeck(this.state.text)
    let deck = {};
    deck['title'] = this.state.text;
		this.props.navigation.navigate('Deck', deck)
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

function mapStateToProps({deck}){
  return {
    deck
  }
}

function mapDispatchToProps(dispatch){
  return {
    addDeck: (title) => dispatch(addDeck(title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80
  }
});
