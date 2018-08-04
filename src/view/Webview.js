
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,WebView } from 'react-native';
import { StackNavigator } from 'react-navigation'



export default class Webview extends React.Component {

  static navigationOptions = { header: null }

  constructor() {
    super()
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
  }

  accept = () => {
    this.props.navigation.navigate('Login')
  }



  render() {

    return (
      <View style={styles.Container}>
        <WebView
          style={styles.webView}
          source={{ uri: 'https://uneleap.com/user-agreement.html' }}
        />
        <TouchableOpacity
          style={styles.Continue}
          onPress={this.accept}
          >
          {
            <Text style={styles.Title}>Accept and continue</Text>
          }
        </TouchableOpacity>
      </View>
    );
  }

}



const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  webView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  Continue: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 5,
  },
  Title: {
    fontSize: 18,
  }
});

