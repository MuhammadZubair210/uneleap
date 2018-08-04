import React from 'react'
import { View, Text, Image, Alert, BackHandler, ScrollView, TextInput, ToastAndroid, TouchableOpacity, KeyboardAvoidingView, StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable'
import styles from '../style/css'
import firebase from 'firebase'
import { Icon } from 'react-native-elements'
import {
    addNavigationHelpers,
    StackNavigator,
} from 'react-navigation'


export default class LoginView extends React.Component {
    constructor(props) {
        super(props)
        console.ignoredYellowBox = [
            'Setting a timer'
        ];
        this.state = {
            init: true,
            errMsg: null,
            navigate: null,
            email: "",
            password: "",
        }
    }

    componentDidMount() {
        StatusBar.setHidden(true);

    }





    onLoginPress = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                // this.props.navigation.navigate('Main');

                var verification = firebase.auth().currentUser.emailVerified;
                console.log(verification);

                if (verification) {
                    this.props.navigation.navigate('App')
                }
                else {
                    Alert.alert("You are not verified..")
                    firebase.auth().currentUser.sendEmailVerification();
                    ToastAndroid.showWithGravityAndOffset(
                        'Activation Mail sent again.',
                        ToastAndroid.LONG,
                        ToastAndroid.BOTTOM,
                        25,
                        50
                    );
                }

            }, (error) => { Alert.alert(error.message); });
    }

    render() {


        const animationLogo = this.state.init ? 'bounceInDown' : 'bounceOutUp'
        const animationForm = this.state.init ? 'bounceInUp' : 'bounceOutDown'
        const errorMessage = this.state.errMsg ? <Text css={styles.errMsg}>{this.state.errMsg}</Text> : null
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior='padding'
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
                        <ScrollView
                            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
                        >
                            <View style={styles.inputSection}>
                                <Icon
                                    style={{ marginLeft: 100 }}
                                    name='email'
                                    reverse
                                    color='#517fa4'
                                    size={16} />
                                <TextInput
                                    style={styles.inputField}
                                    underlineColorAndroid='transparent'
                                    placeholder='Email'
                                    keyboardType='email-address'
                                    //placeholderTextColor='rgba(255,255,255,.6)'
                                    value={this.state.email}
                                    onChangeText={(text) => this.setState({ email: text })}
                                />
                            </View>



                            <View style={styles.inputSection}>
                                <Icon
                                    name='lock'
                                    reverse
                                    color='#517fa4'
                                    size={16} />
                                <TextInput
                                    style={styles.inputField}
                                    underlineColorAndroid='transparent'
                                    placeholder='Password'
                                    secureTextEntry={true}
                                    //placeholderTextColor='rgba(255,255,255,.6)'
                                    value={this.state.password}
                                    onChangeText={(text) => this.setState({ password: text })}
                                />
                            </View>
                            <View style={styles.loginbtnContainers}>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({ init: false, navigate: 'Forgot' })
                                    }}
                                >
                                    <Text style={{ fontSize: 12 }}>{'Forgot Password?'.toUpperCase()}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={this.onLoginPress}>

                                    <View style={styles.loginBtnContainer}>
                                        <Text
                                        >{'LOG IN'.toUpperCase()}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                onPress={() =>
                                    this.setState({ init: false, navigate: 'Signupstep' })
                                }
                                style={{ marginBottom: 15, marginTop: 25 }}
                            >
                                <Text style={{ fontSize: 15 }}>{'Dont have an account? Create one here!'}</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </Animatable.View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}