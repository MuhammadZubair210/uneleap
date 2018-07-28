import React from 'react';
import { StyleSheet, Text, View, Image, Animated, Easing, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation'
import * as firebase from 'firebase'


export default class Splash extends React.Component {

  static navigationOptions = { header: null }

  constructor() {
    super()
    this.RotateValueHolder = new Animated.Value(0);
  }

  componentDidMount() {

    StatusBar.setHidden(true);


    this.StartImageRotateFunction();
    setTimeout(() => {
      var user = firebase.auth().currentUser;

      if (user) {
        this.props.navigation.navigate('Main')
      } else {
        this.props.navigation.navigate('Welcome')
      }
    }, 3000
    )
    // this.props.navigation.navigate ('Welcome')

  }

  render() {

    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    return (
      <View style={styles.container}>
        <Animated.Image
          style={{
            width: 150,
            height: 150,
            transform: [{ rotate: RotateData }]
          }}
          source={require('../image/new-logo.png')} />
      </View>
    );
  }

  StartImageRotateFunction() {

    this.RotateValueHolder.setValue(0)

    Animated.timing(
      this.RotateValueHolder,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear
      }
    ).start(() => this.StartImageRotateFunction())

  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
