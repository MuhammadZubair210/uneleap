import React from 'react'
import { AppRegistry } from "react-native";

import { StackNavigator, createDrawerNavigator } from "react-navigation";

import Menu from "./Menu";
import LoginView from './LoginView'
import ForgotPassView from './ForgotPassView';
import SignupView from './SignupView';
import SignupstepView from './SignupstepView';
import Main from './Main';
import Messages from './Messages';

const MainScreenNavigator = StackNavigator({
  Messages: { screen: Messages },
});

const Drawer = createDrawerNavigator(
  {
    Main: { screen: Main }
  },
);

export default Drawer;