import React from "react";
import Home from "./components/Home";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import reducer from "./reducer";
import { setLocalNotification } from "./utils/helpers";

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
