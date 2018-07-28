import React from 'react'
import firebase from 'firebase'
import LoginNav from './src/view/LoginNav'

export default class App extends React.Component {

  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyAh9cDh5YoQ87Xw1YndJ2YA03xUKNSvzcI',
      authDomain: 'uneleap-cross-platform.firebaseapp.com',
      databaseURL: 'https://uneleap-cross-platform.firebaseio.com',
      projectId: "uneleap-cross-platform",
      storageBucket: 'uneleap-cross-platform.appspot.com',
      messagingSenderId: '188798079659'
    });
  }
  render() {
    return (
      <LoginNav>
        
      </LoginNav>
    );
  }
}

