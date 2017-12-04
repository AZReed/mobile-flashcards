import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, AsyncStorage } from "react-native";
import {
  Container,
  Card,
  Content,
  CardItem,
  Text,
  Right,
  Icon,
  Button,
  Body
} from "native-base";
import { retrieveDecks } from "../actions";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";

class Decks extends Component {
  static navigationOptions = {
    title: "Decks",
    headerLeft: null
  };

  componentDidMount() {
    this.props.retrieveDecks();
    //AsyncStorage.clear(()=>console.log('done'))
  }

  goToDeck = title => {
    this.props.navigation.navigate("Deck", this.props.decks[title]);
  };

  addDeck = () => {
    this.props.navigation.navigate("AddDeck");
  };
  
  render() {
    const { decks } = this.props;

    return (
      <Container>
        <Content>
          <Card>
            {this.props.decks && Object.keys(this.props.decks).length ?
              Object.keys(this.props.decks).map((deck, num) => (
                <CardItem key={decks[deck]["title"]}>
                  <Body>
                    <TouchableOpacity
                      onPress={() => this.goToDeck(decks[deck]["title"])}
                      style={{ flexDirection: "row", alignContent: "stretch" }}
                    >
                      <Text>
                        {decks[deck]["title"]} ({decks[deck]["questions"].length}{" "}
                        cards)
                      </Text>
                      <Right>
                        <Icon name="arrow-forward" />
                      </Right>
                    </TouchableOpacity>
                  </Body>
                </CardItem>
              ))
            : <CardItem>
                <Body>
                  <Text>No Decks Yet. Add your first Deck!!</Text>
                </Body>
              </CardItem>
            }
          </Card>
          <Container style={{alignSelf: 'center', marginTop: 30}}>
            <Button
              onPress={() => this.addDeck()}
            >
              <Text>Add Deck</Text>
            </Button>
          </Container>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps({ decks }) {
  return {
    decks: {...decks}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    retrieveDecks: () => dispatch(retrieveDecks())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Decks);
