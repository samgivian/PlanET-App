import { AppRegistry } from 'react-native';

import Login from './login';
import Splash from './splash';


import React, { Component } from 'react';
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Todo from './todo';
import Intro from './intro';
import AddScreen from './add';
import TabPage from './tabpage';
import CalendarsScreen from './calender';
import AgendaScreen from './AgendaScreen';

const MainNavigator = createStackNavigator({
  Login: { screen: Login },
  Splash: { screen: Splash },
  TabPage: { screen: TabPage },
  Intro: { screen: Intro },
  Todo: { screen: Todo },
  CalendarsScreen: { screen: CalendarsScreen },



  AddScreen: { screen: AddScreen },
  AgendaScreen: { screen: AgendaScreen },
},
  {
    initialRouteName: 'Splash',

  },
);

const App = createAppContainer(MainNavigator);

export default App;