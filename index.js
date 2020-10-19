import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Login from './login';
import Splash from './splash';

import Hello from './hello';
import Profile from './profile';
import React, { Component } from 'react';
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Todo from './todo';
import SignUp from './signup';
import Intro from'./intro';
import AddScreen from './add';
import TabPage from './tabpage';
import CalendarsScreen from './calender';
import AgendaScreen from './AgendaScreen';
//export default class Main extends React.Component {
 /*   constructor(props) {
        super(props);
        this.state = { currentScreen: 'Splash' };
        setTimeout(() => {
            this.setState({ currentScreen: 'Login' });
        }, 2000);
    }
    render() {
   const { currentScreen } = this.state;
        let mainScreen = currentScreen === 'Splash' ? <Splash /> : <AppContainer />
        return mainScreen;

      
    }*/
//}
const RootStack = createStackNavigator(
    {
        Login: Login,
        App:App,
        Splash:Splash,
        Hello: Hello,
        Profile:Profile,
        Todo:Todo,
        SignUp:SignUp,
        TabPage:TabPage,
        Intro,Intro,
        CalendarsScreen:CalendarsScreen,
        AddScreen:AddScreen,
        AgendaScreen,AgendaScreen

        
    },
    {
        initialRouteName: 'Splash',
        
    },
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }
    
);
 

const AppContainer = createAppContainer(RootStack);
AppRegistry.registerComponent(appName, () => AppContainer);
