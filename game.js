import React from 'react';
import { StyleSheet, Text, View,ImageBackground,Image,ActivityIndicator,Na  } from 'react-native';
import {createAppContainer,Tab} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Maina from './Maina'
import { fire } from './config';

import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'

import Hello from './hello';

export default class Game extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = ({
            email: '',
            password: ''
        })
    }

  
static navigationOptions = { header: null };
    render() {
     

        return (
          <AppContainer/>
        );
    }
}
const RootStack = createStackNavigator(
    {
      Hello: Hello,
      
    },
    {
      initialRouteName: 'Hello',
    }
  );
  
  const AppContainer = createAppContainer(RootStack);
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 10
    },
    backgroundContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: null,
      height: null,
    },
    logo: {
      width: 120,
      height: 120,
  
    },
    logoContainer: {
      alignItems: 'center'
    },
    logoText: {
      color: 'white',
      fontSize: 20,
      fontWeight: '500',
      marginTop: 10,
      opacity: 0.5
    },
});