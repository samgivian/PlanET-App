import React, { Component } from 'react';


import { StyleSheet, Text, View, ImageBackground, Image, ActivityIndicator, Modal, TouchableHighlight, TextInput } from 'react-native';
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import { fire } from './config';

import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Hoshi } from 'react-native-textinput-effects';
import { Icon } from 'react-native-elements'
import Dialog from "react-native-dialog";

export default class Login extends React.Component {

  constructor(props) {
    super(props)

    this.state = ({
      email: '',
      password: '',
      modalVisible: false,
      dialogVisible: false,
      forgotpassword: '',
    })
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  signUpUser = (email, password) => {

    fire
      .auth()
      .createUserWithEmailAndPassword(email, password).then(() => {
        // fire.database().ref('/users/').pusrhh(email.substring(0,email.length-4));
        var key = fire.database().ref('/users/' + email.substring(0, email.length - 4) + '/tasks').push().key
        fire.database().ref('/users/' + email.substring(0, email.length - 4) + '/coins').set(0);
        fire.database().ref('/users/' + email.substring(0, email.length - 4) + '/taskscompleted').set(0);
        fire.database().ref('/users/' + email.substring(0, email.length - 4) + '/tasks').child(key).set({ name: 'Welcome to our App sign up page' })
        fire.database().ref('users/' + email.substring(0, email.length - 4) + '/coins').on('value', function (snapshot) {
          alert(snapshot.val());
        })
      })
      .catch(error => alert(error))


    /*
      var key = fire.database().ref('/users/samgivian2015/tasks').push().key
      fire.database().ref('/users/samgivian2015/tasks').child(key).set({ name: 'Welcome to our App sign up page' })
      fire.database().ref('users/samgivian2015/coins').on('value',function(snapshot){
        alert(snapshot.val());
      })
    })
    .catch(error => alert(error));

    */
    /*
            try {
    
                if (this.state.password.length < 6) {
                    alert("Please enter atleast 6 characters")
                    return;
                }
    
                fire.auth().createUserWithEmailAndPassword(email, password).then(()=>{
                  var key = fire.database().ref('/users/samgivian2015/tasks').push().key
                  fire.database().ref('/users/samgivian2015/tasks').child(key).set({ name: 'Welcome to our App' })
                  fire.database().ref('users/samgivian2015/coins').on('value',function(snapshot){
                    alert(snapshot.val());
                  }) .catch((error) => alert(error));
                //add date to each task
                  
                })
            }
            catch (error) {
                console.log(error.toString())
            }*/
  }

  loginUser = (email, password) => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('TabPage'))
      .catch((error) => alert(error));
    /*
            try {
    
              fire.auth().signInWithEmailAndPassword(email, password).then(() => this.props.navigation.navigate('Maina'))     
    
    
                   
    
                
            }
            catch (error) {
                console.log(error.toString())
            }*/
  }
  forgotpasswrod = () => {
    fire.auth().sendPasswordResetEmail()
  }


  showDialog = () => {
    this.setState({ dialogVisible: true });
  };

  handleCancel = () => {
    this.setState({ dialogVisible: false });
  };

  handleReset = (yourEmail) => {
   
      fire.auth().sendPasswordResetEmail(yourEmail)
        .then(function (user) {
          alert('Please check your email...')
        }).catch(function (e) {
          console.log(e)
        })
    
    this.setState({ dialogVisible: false });
  };

  static navigationOptions = { header: null };
  render() {


    return (
      <ImageBackground source={require('./components/naturewall.jpg')} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('./components/logo.png')} style={styles.logo} />
       
        </View>

        <Form style={{ width: 325, color: 'white' }}>


          <Hoshi
            label={'Email'}
            // this is used as active border color
            borderColor={'blue'}
            // active border height
            borderHeight={3}
            inputPadding={16}
            // this is used to set backgroundColor of label mask.
            // please pass the backgroundColor of your TextInput container.
            onChangeText={(email) => this.setState({ email })}
            textContentType="oneTimeCode"
            autoFocus
          />




          <Hoshi
            label={'Password'}
            // this is used as active border color
            borderColor={'blue'}
            // active border height
            borderHeight={3}
            inputPadding={16}
            textContentType="oneTimeCode"
            autoFocus
            // this is used to set backgroundColor of label mask.
            // please pass the backgroundColor of your TextInput container.
            onChangeText={(password) => this.setState({ password })} />

          <Button style={{ marginTop: 50, color: '#406E8E', backgroundColor: '#406E8E', borderRadius: 5 }}
            full


            onPress={() => this.loginUser(this.state.email, this.state.password)}
          >
            <Text style={{ color: 'white' }}> Login</Text>
          </Button>

          <Button style={{ marginTop: 15, color: '#002E4C', backgroundColor: '#1D84B5', borderRadius: 5 }}
            full
            onPress={() => this.signUpUser(this.state.email, this.state.password)}
          >
            <Text style={{ color: 'white' }}> Sign Up</Text>
          </Button>
          <Text style={{ color: '#067fb8', fontSize: 16, paddingTop: 10 }} onPress={this.showDialog}> Forgot Password</Text>
          <Dialog.Container visible={this.state.dialogVisible}>
            <Dialog.Title>Password Reset</Dialog.Title>
            <Dialog.Description>
              Reset your password by entering your E-mail
          </Dialog.Description>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={(forgotpassword) => this.setState({ forgotpassword })}
            />
            <Dialog.Button label="Cancel" onPress={this.handleCancel} />
            <Dialog.Button label="Reset" onPress={() => this.handleReset(this.state.forgotpassword)} />
          </Dialog.Container>



        </Form>
      </ImageBackground>
    );
  }
}

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
    width: 200,
    height: 200,

  },
  logoContainer: {
    alignItems: 'center'
  },
  logoText: {
    color: 'white',
    fontSize: 36,
    fontWeight: '500',
    marginTop: 12,

  },
});

/*

<Button style={{ marginTop: 10 }}
                        full
                        rounded
                        primary
                        onPress={() => this.props.navigation.navigate('Hello')}
                    >
                        <Text style={{ color: 'white' }}> Game</Text>
                    </Button>


                    <Button style={{ marginTop: 10 }}
                        full
                        rounded
                        danger
                        onPress={() => this.props.navigation.navigate('TabPage')}
                    >
                        <Text style={{ color: 'white' }}> Got to Sign Up pge</Text>
                    </Button>

                    */




/*
export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = ({
      email: '',
      password: ''
    })
  }

  signUpUser = (email, password) => {

    try {

      if (this.state.password.length < 6) {
        alert("Please enter atleast 6 characters")
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password)
    }
    catch (error) {
      console.log(error.toString())
    }
  }

  loginUser = (email, password) => {

    try {

      firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
        console.log(user)

      })
    }
    catch (error) {
      console.log(error.toString())
    }
  }

  render() {
    return (
      <ImageBackground source={require('./components/naturewall.jpg')} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('./components/logo.png')} style={styles.logo} />
          <Text style={styles.logoText}> Diamond Challange</Text>
        </View>

        <Form style={{ width: 250, color: 'white' }}>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              style={{ color: 'white' }}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
            />

          </Item>

          <Item floatingLabel >
            <Label>Password</Label>
            <Input
              style={{ color: 'white' }}
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({ password })}
            />
          </Item>

          <Button style={{ marginTop: 10 }}
            full
            rounded
            success
            onPress={() => this.loginUser(this.state.email, this.state.password)}
          >
            <Text style={{ color: 'white' }}> Login</Text>
          </Button>

          <Button style={{ marginTop: 10 }}
            full
            rounded
            primary
            onPress={() => this.signUpUser(this.state.email, this.state.password)}
          >
            <Text style={{ color: 'white' }}> Sign Up</Text>
          </Button>

        </Form>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
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

  input: {
    width: Dimensions.get('window').width - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    color: 'white',

  }
});
*/