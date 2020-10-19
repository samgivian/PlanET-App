
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,ImageBackground,Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

import {fire} from './config';
export default class Maina extends Component {
  
  constructor(props) {
    super(props);
    
    
  }
  logout = () => {

    fire.auth().signOut();
    fire.auth().onAuthStateChanged = null;
    

  }
  render() {

    return (
      <View style={styles.container}>
        <Input
          placeholder='BASIC INPUT'
        />

        <Input
          placeholder='INPUT WITH ICON'
          leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
        />
        <Input
          placeholder='INPUT WITH CUSTOM ICON'
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='black'
            />
          }
        />

        <Input
          placeholder='INPUT WITH ERROR MESSAGE'
          errorStyle={{ color: 'red' }}
          errorMessage='ENTER A VALID ERROR HERE'
        />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button
          style={{ fontSize: 20, color: 'green' }}
          styleDisabled={{ color: 'red' }}
          onPress={() => this.logout()}
          title="Press Me"
        >
          <Text>logout</Text>
        </Button>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
