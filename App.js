import React from "react";
//import { Text, View } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";
import Decks from "./components/Decks";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <Container>
          <Header>
            <Left />
            <Body>
              <Title>Decks</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <Decks />
          </Content>
          <Footer>
            <FooterTab>
              <Button full>
                <Text>Footer</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </Provider>
    );
  }
}
