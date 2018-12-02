import * as React from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';
import { Constants } from 'expo';
import firebase from '../../Firebase/Firebase'




export default class Dashboard extends React.Component {

  constructor(){
    super();
    this.state={
      Hospital:[]
    }
  }


componentDidMount() {
            firebase.database().ref('/Hospitals').on('child_added',(values)=>{

                var childData = values.val();
                var pushdata = this.state.Hospital.concat(childData);
                this.setState({Hospital:pushdata})
                console.log("data",this.state.Hospital)
                 })
        }

  render() {
    return (
      <View style={styles.container}>
 {this.state.Hospital.map((data,index)=>{
        return(
          <View>
            <Button title={data.HospitalName} />< br />
          </View>
            
        )
      })}
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });