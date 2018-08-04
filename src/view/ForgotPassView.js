import React from "react"
import styles from '../style/css'
import firebase from 'firebase'
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView,Alert,StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Icon } from 'react-native-elements'


export default class ForgotPassView extends React.Component {
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
        }
    }

    componentDidMount() {
        StatusBar.setHidden(true);
     }

    onResetPasswordPress = () => {
        firebase.auth().sendPasswordResetEmail(this.state.email)
            .then(() => {
                Alert.alert("Password reset email has been sent. Go to your mailbox and reset your password.");
                this.props.navigation.navigate('Login')
            }, (error) => {
                Alert.alert(error.message);
            });
    }

    
    render() {
        const animationLogo = this.state.init ? 'bounceInDown' : 'bounceOutUp'
        const animationForm = this.state.init ? 'bounceInUp' : 'bounceOutDown'
        const errorMessage = this.state.errMsg ? <Text css={styles.errMsg}>{this.state.errMsg}</Text> : null
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
                            contentContainerStyle={{flexGrow:1, justifyContent: 'center', alignItems: 'center' }}
                        >
                        <View>
                            {errorMessage}
                            </View>
                            <View style={styles.inputSection}>
                                <Icon
                                    name='email'
                                    reverse
                                    color='#517fa4'
                                    size={16} />
                            <TextInput
                                style={styles.inputField}
                                underlineColorAndroid='transparent'
                                placeholder='Enter Your Email'
                                //placeholderTextColor='rgba(255,255,255,.6)'
                                onChangeText={(text) => this.setState({ email: text })}
                            />
                            
                            </View>
                            <View>
                            </View>
                            <TouchableOpacity
                            onPress={this.onResetPasswordPress}>
                                <View style={styles.forgotBtnContainer}>
                                    <Text
                                    >{'Recover My Password'.toUpperCase()}</Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </Animatable.View>
                </View>
            </KeyboardAvoidingView>

        )
    }

}