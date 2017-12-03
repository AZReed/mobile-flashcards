import React, { Component } from "react";
//import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import {
  Body,
  Button,
  Input,
  Item,
  Container,
  Content,
  Form,
  Text
} from "native-base";
import { addDeck } from "../actions";
import { connect } from "react-redux";

class AddDeck extends Component {
  state = {
    input: "new Deck"
  };

  submit = () => {
    this.props.addDeck(this.state.text);
    let deck = {};
    deck["title"] = this.state.text;
    this.props.navigation.navigate("Deck", deck);
  };

  render() {
    return (
      <Container style={{ alignItems: "center", justifyContent: 'center' }}>
        <Container>
          <Content>
            <Text>What is the title of your new Deck</Text>
            <Item last>
              <Input
                onChangeText={text => this.setState({ text })}
                value={this.state.text}
                />
            </Item>
          </Content>
        </Container>
        <Container>
          <Button onPress={() => this.submit()}>
            <Text>Submit</Text>
          </Button>
        </Container>
      </Container>
    );
  }
}

function mapStateToProps({ deck }) {
  return {
    deck
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addDeck: title => dispatch(addDeck(title))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck);
