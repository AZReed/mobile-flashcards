import React, { Component } from "react";
/* import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput
} from "react-native"; */
import { Item, Text, Container, Content, Button, Input } from "native-base";
import { addCard } from "../actions";
import { connect } from "react-redux";

class AddCard extends Component {
  state = {
    question: "",
    answer: ""
  };

  submit = () => {
    const deck = this.props.navigation.state.params;
    this.props.addCard(deck.title, this.state);
		this.props.navigation.navigate("Deck", deck);
  };

  render() {
    const deck = this.props.navigation.state.params;
    return (
      <Container style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
        <Container style={{alignSelf: 'stretch'}}>
          <Content>
            <Text>({deck.title}) Question</Text>
            <Item last>
              <Input
                onChangeText={question => this.setState({ question })}
                value={this.state.question}
              />
            </Item>

            <Text>Answer</Text>
            <Item last>
              <Input
                onChangeText={answer => this.setState({ answer })}
                value={this.state.answer}
              />
            </Item>
          </Content>
        </Container>
        <Container>
          <Button
            style={{ padding: 10 }}
            onPress={() => this.submit()}
          >
            <Text>Submit</Text>
          </Button>
        </Container>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCard: (title, card) => dispatch(addCard(title, card))
  };
}

export default connect(null, mapDispatchToProps)(AddCard);
