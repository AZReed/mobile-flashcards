import React, { Component } from "react";
import {
  Body,
  Button,
  Input,
  Item,
  Form,
  Container,
  Content,
  Footer,
  Text
} from "native-base";
import { addDeck } from "../actions";
import { connect } from "react-redux";
import { Keyboard } from "react-native";
// import { Header } from 'react-navigation';


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
    // console.log('***' + Header.HEIGHT + '***');
    return (
        <Container style={{padding: 10}}>
{/*           <Content style={{alignSelf: 'stretch'}}>
            <Body>
              <Text>What is the title of your new Deck</Text>
              <Item last>
              <Input
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
              />
              </Item>
              </Body>
              <Footer>
              <Button onPress={() => this.submit()}>
              <Text>Submit</Text>
              </Button>
              </Footer>
            </Content> */}
          <Content>
            <Body>
              <Text>What is the title of your new Deck?</Text>
            </Body>
            <Form>
              <Item last>
                <Input
                  placeholder="Deck Name"
                  onChangeText={text => this.setState({ text })}
                  value={this.state.text}
                />
                </Item>
            </Form>
            <Button
              full
              style={{ marginTop: 20 }}
              onPress={() => this.submit()}>
              <Text>Submit</Text>
            </Button>
          </Content>
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
