import React, { Component } from "react";
import { StatusBar } from "react-native";
import client from "./config/api";
import { ApolloProvider } from "react-apollo";
import RootStackNavigator from "./navigation/RootStackNavigator";
import AgeDisclaimer from "./components/AgeDisclaimer";

export default class App extends Component {
  render() {
    // StatusBar.setBarStyle("light-content");
    return (
      // <ApolloProvider client={client}>
      //   <RootStackNavigator />
      // </ApolloProvider>
      <AgeDisclaimer />
    );
  }
}
