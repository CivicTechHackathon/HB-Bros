import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, Hyperlink} from 'react-native';

import firebase from '../../Firebase/Firebase';

const auth = firebase.auth();
const db = firebase.database();

export default class Login extends React.Component {
    constructor()
  {
    super();
    this.state={

    }
    this.next = this.next.bind(this);
  }

//   authListener=()=>{
//     firebase.auth().onAuthStateChanged((user)=>{
//         if(user){
//             this.props.navigation.navigate('Dashboard')
//         }
      
//     })
// }
  // componentDidMount()
  // {
  //   this.authListener();

  // }
  signup()
  {
    this.props.navigation.navigate('Signup');
  }

  next()
  {
      const { emailRef, passRef } = this.state;
      auth.signInWithEmailAndPassword(emailRef, passRef).then(()=>{
        this.props.navigation.navigate('Dashboard');
      })
      .catch(() =>{
          Alert.alert('Email or Pass is incorrect!');
      }) 
  }



  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: '#fff', fontSize: 25, fontWeight: 'bold', marginBottom: 15}}>Login </Text>
        
        <TextInput 
        placeholder="Email" 
        style={{height: 40, width: 250, backgroundColor: '#E0E0E0', borderRadius: 20, marginBottom: 10}}
        onChangeText={(e) => this.setState({emailRef: e})} />
        
        <TextInput 
        placeholder="Password" 
        style={{height: 40, width: 250,  backgroundColor: '#E0E0E0', borderRadius: 20, marginBottom: 10}}
        onChangeText={(e) => this.setState({passRef: e})} />
        
        <Button
        title="Go to Dashboard"
        onPress={this.next}
        color= '#8BC34A'
        containerStyle={{marginBottom: 10}}
        /> 

        <Button
        title="Sign up"
        onPress={this.signup.bind(this)}
        color= '#8BC34A'
        />
        {/* <Hyperlink linkText = "SignUp" /> */}
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
