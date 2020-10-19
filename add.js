import React, { Component } from "react";
import { StyleSheet, Text, View, Modal, TouchableHighlight, Alert, StatusBar, Image, ImageBackground, Dimensions } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { Container, Content, Header, Form, Input, Item, Label, List, ListItem, Card, CardItem, Body, Button } from 'native-base'
import { fire } from './config';
import { Icon } from 'react-native-elements'
var UserEmail = "";
export default class AddScreen extends Component {
  constructor(props) {
    super(props);
    UserEmail = fire.auth().currentUser.email.toString().substring(0, fire.auth().currentUser.email.length - 4);
  }
  state = {

    newContact: "",
    items: [],
    isDateTimePickerVisible: false,
    selectedDate: "",
    date: "2016-05-15"

  };
  addRow(data) {

    // var key = fire.database().ref('//users/samgivian2015/tasks').push().key
    //  fire.database().ref('//users/samgivian2015/tasks').child(key).set({ time: d })
    var d = new Date();
    fire.database().ref('/users/' + UserEmail + '/tasks').push({ name: data, DateCreated: this.state.selectedDate });
  }



  showInformation() {

  }
  delete = (tobedeleted) => {
    alert(tobedeleted);
  }
  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    this.setState({ selectedDate: date.toString() });
    this.hideDateTimePicker();
  };
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Add task',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#002e4c'
      }
    }
  }
  render() {
    const { isDateTimePickerVisible, selectedDate } = this.state;

    return (

      <View style={styles.container}>
        <Image
          style={{ width: '100%', height: '50%' }}
          source={require('./components/table.jpg')}
        />
        <Item style={{padding:5,marginTop:15}}>
          <Input
            style={{ color: 'white', backgroundColor: '#517fa4' }}
            onChangeText={(newContact) => this.setState({ newContact })}
            placeholder="Add item's name"
          />

        
        </Item>

        <Button block onPress={this.showDateTimePicker} style={{backgroundColor:'#517fa4',marginTop:15}}>
          <Text style={{ fontSize: 14, color: 'white' }}> select due date</Text>
        </Button>
        <Text style={styles.text}>{selectedDate}</Text>
        <DateTimePicker
          isVisible={isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
          is24Hour={true}
          mode={'datetime'}
        />
        <Button block style={{backgroundColor:'#517fa4'}} onPress={() => this.addRow(this.state.newContact)}>
          <Text style={{ fontSize: 14, color: 'white' }}> Add item</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#002e4c',
    height: '100%',
    width: '100%',

  },

});