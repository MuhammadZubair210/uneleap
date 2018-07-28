import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from '../style/css'
import * as Animatable from 'react-native-animatable'
import firebase from 'firebase'


export default class Init extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      init: true,
      navigate: null,
    }
  }
  render() {
    const animationLogo = this.state.init ? 'bounceInDown' : 'bounceOutUp'
    const animationForm = this.state.init ? 'bounceInUp' : 'bounceOutDown'
    const { navigate } = this.props.navigation;
    return (
      <View
        style={styles.container}
      >
        <Animatable.View
          animation={animationLogo}
          style={styles.logocontainer}
        >
          <Image style={{ width: 150, height: 150 }}
            source={require('../image/new-logo.png')}
          />
        </Animatable.View>
        <View
          style={styles.formcontainerBttom}
        >
          <Animatable.View
            animation={animationForm}
            delay={this.props.animDelay}
            onAnimationEnd={() => {
              if (!this.state.init) {
                if (this.state.navigate != null) {
                  navigate(this.state.navigate)
                  this.setState({ init: true, navigate: null })
                }
              }
            }
            }
          >
            {/* <Swiper style={styles.wrapper} showsButtons={false}>
                  <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Uneleap</Text>
                  </View>
                  <View style={styles.slide2}>
                    <Text style={styles.text1}>Your Personal Brainbox</Text>
                    <Text style={styles.text2}>Create connection with studentes worldwide to make your learning brainbox</Text>
                  </View>
                  <View style={styles.slide3}>
                    <Text style={styles.text1}>Imporove your learning experience</Text>
                    <Text style={styles.text2}>Make great use of all the available resources to make your daily learning a breeze</Text>
                  </View>
                </Swiper> */}

            <View style={styles.initFromBox}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({ init: false, navigate: 'Signupstep' })
                }
              >
                <View style={styles.btnSignup}>
                  <Text style={styles.btnSignupTxt}>{'Create Account'.toUpperCase()}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.setState({ init: false, navigate: 'Login' })
                }
              >
                <View style={styles.btnLogin}>
                  <Text style={styles.btnSignupTxt}>{'Log In'.toUpperCase()}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      </View>
    )
  }
}

