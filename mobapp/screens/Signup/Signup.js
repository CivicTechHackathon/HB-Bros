import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, Hyperlink } from 'react-native';

import firebase from '../../Firebase/Firebase';

const auth = firebase.auth();
const db = firebase.database();

export default class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      emailsignup: '',
      passwordsignup: '',
      emailRef: '',
      passRef: '',
      

    }
    this.next = this.next.bind(this);
  }

  signup(){
    firebase.auth().createUserWithEmailAndPassword(this.state.emailRef,this.state.passRef).then((user)=>{
        this.setState({signin:true,signup:false});
        this.props.navigation.navigate("Login");
    
        firebase.database().ref('/Hospitals').child(`${firebase.auth().currentUser.uid}`).set({
    Email:this.state.emailsignup,
    HospitalName:this.state.hospitalname,
    Branch:this.state.branchname,
    Phoneno:this.state.phoneno
    
    
        })
        
    })
    .catch((error)=>{
      Alert.alert("Enter email and Pass");  
      console.log(error)
        this.setState({errormessagesignup:error.message});
        
    })
    }

    next()
    {
      this.props.navigation.navigate('Login')
    }

  render(){
          return(
      <View style = { styles.container } >
              <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold', marginBottom: 15 }}>Sign Up</Text>

              <TextInput
                placeholder="Email"
                style={{ height: 40, width: 250, backgroundColor: '#E0E0E0', borderRadius: 20, marginBottom: 10 }}
                onChangeText={(e) => this.setState({ emailRef: e })} />

              <TextInput
                placeholder="Password" type="password"
                style={{ height: 40, width: 250, backgroundColor: '#E0E0E0', borderRadius: 20, marginBottom: 10 }}
                onChangeText={(e) => this.setState({ passRef: e })} />


              

              <Button
                title="Sign up"
                onPress={this.signup.bind(this)}
                color='#8BC34A'
              />

              <Button
                title="Login"
                onPress={this.next.bind(this)}
                color='#8BC34A'
                containerStyle={{ marginBottom: 10 }}
              />
        
        {/* <Hyperlink linkText = "SignUp" /> */ }
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
