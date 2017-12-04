import React, { Component } from "react";
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
import { Keyboard } from "react-native";

class AddDeck extends Component {
  state = {
    input: "new Deck"
  };

  submit = () => {
    this.props.addDeck(this.state.text);
    let deck = { title: this.state.text};
    //deck["title"] = this.state.text;
    Keyboard.dismiss()
    this.props.navigation.navigate("Deck", deck);
  };

  render() {
    return (
      <Container style={{ flex: 1, alignItems: 'center' }}>
        <Content style={{alignSelf: 'stretch'}}>
          <Text>What is the title of your new Deck</Text>
          <Item last>
            <Input
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
              />
          </Item>
        </Content>
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
