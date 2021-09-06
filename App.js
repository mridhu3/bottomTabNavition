import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import FaceBook from "./screens/fb";
import Insta from "./screens/insta";

export default class App extends React.Component {
  render(){
    return <AppContainer/>
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction:{screen: FaceBook},
    Searchscreen:{screen: Insta}
})

const AppContainer = createAppContainer(TabNavigator);
