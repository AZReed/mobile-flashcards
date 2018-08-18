import React, { Component } from "react";
import { Item, Text, Container, Content, Button, Input } from "native-base";
import { addCard } from "../actions";
import { connect } from "react-redux";
import { Keyboard } from 'react-native'

class AddCard extends Component {
  state = {
    question: "",
    answer: ""
  };

  submit = () => {
    const deck = this.props.navigation.state.params;
    this.props.addCard(deck.title, this.state);
    Keyboard.dismiss();
		this.props.navigation.navigate("Deck", deck);
  };

  render() {
    const deck = this.props.navigation.state.params;
    return (
      <Container>
          <Content style={{padding: 10, alignSelf: 'stretch'}}>
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
          <Button
            full
            style={{ marginTop: 20 }}
            onPress={() => this.submit()}
          >
            <Text>Submit</Text>
          </Button>
        </Content>
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
