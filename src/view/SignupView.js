import React from 'react'
import { View, Text, TouchableOpacity,ToastAndroid, ScrollView, Picker, TextInput, KeyboardAvoidingView, Alert, StatusBar } from 'react-native'
import styles from '../style/css'
import * as Animatable from 'react-native-animatable'
import * as firebase from 'firebase'
import firestore from 'firebase/firestore'
import list from '../files/University'
import { Icon } from 'react-native-elements'
// import Hr from 'react-native-hr'


export default class SignupView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            init: true,
            errMsg: null,
            navigate: null,
            userType: null,
            fullName: null,
            userName: null,
            email: null,
            password: null,
            password2: null,
            gender: null,
            university: null,
            degree: null,
            affiliation: null,
            status: false,
        }
    }

    componentDidMount() {
        StatusBar.setHidden(true);
    }


    onSignupPress = () => {
        if (this.state.password !== this.state.password2) {
            Alert.alert("Passwords do not match");
            return;
        }
        if (this.state.fullName == null || this.state.email == null || this.state.userName == null || this.state.userName == null || this.state.gender == null || this.state.university == null || this.state.affiliation == null || this.state.degree == null) {
            Alert.alert("Please Fill Full Form");
            return;
        }
        // emailExistence.check('email@domain.com', function(error, response){
        //     Alert.alert(response);
        //     Alert.alert(error)
            
        // });

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                var userId = firebase.auth().currentUser.uid
                firebase.auth().currentUser.sendEmailVerification();

                var verification = firebase.auth().currentUser.emailVerified;


                var db = firebase.firestore();

                const settings = { timestampsInSnapshots: true };
                db.settings(settings)

                db.collection('Users').doc(userId).set({
                    FullName: this.state.fullName,
                    FullName: this.state.fullName,
                    Email: this.state.email,
                    Username: this.state.userName,
                    UserType: this.state.userType,
                    Gender: this.state.gender,
                    University: this.state.university,
                    Affiliation: this.state.affiliation,
                    Degree: this.state.degree,
                    Verification: verification,
                    ImageUrl: "null",
                });

                ToastAndroid.showWithGravityAndOffset(
                    'Activation Mail Send to your Email.',
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM,
                    25,
                    50
                  );

                  if (verification) {
                    this.props.navigation.navigate('Main')
                }
                else {
                    this.props.navigation.navigate('Login')
                }


            }, (error) => { Alert.alert(error.message); });
    }

    render() {
        const animationForm = this.state.init ? 'bounceInUp' : 'bounceOutDown'
        const errorMessage = this.state.errMsg ? <Text css={styles.errMsg}>{this.state.errMsg}</Text> : null
        const { navigate } = this.props.navigation;
        if (this.state.userType == "Guest") {
            status = true;
        }
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <Animatable.View
                    animation={animationForm}
                >
                    <ScrollView
                        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <View style={{ marginTop: 5 }}>
                            <Text style={styles.message}>New Customer?</Text>
                        </View>
                        <View>
                            {errorMessage}
                        </View>
                        <View style={styles.pickerContainer}>
                            <Picker
                                style={styles.pickerStyle}
                                mode='dropdown'
                                selectedValue={this.state.userType}
                                onValueChange={(itemValue, itemIndex) => this.setState({ userType: itemValue })}
                            >
                                <Picker.Item label="Select User Type" color='gray' value="..." />
                                <Picker.Item label="Student" value="Student" />
                                <Picker.Item label="Alumni" value="Alumni" />
                                <Picker.Item label="Faculty" value="Faculty" />
                                {/* <Picker.Item label="Univercity Admin" value="Univercity Admin" />
                                <Picker.Item label="Business Admin" value="Business Admin" /> */}
                                <Picker.Item label="Guest" value="Guest" />
                            </Picker>
                        </View>



                        <View style={styles.inputSection}>
                            <Icon
                                name='person-pin'
                                reverse
                                color='#517fa4'
                                size={16} />
                            <TextInput
                                style={styles.inputField}
                                value={this.state.fullName}
                                onChangeText={(text) => this.setState({ fullName: text })}
                                autoCapitalize='words'
                                autoCorrect={false}
                                underlineColorAndroid='transparent'
                                placeholder='Full Name'
                            />
                        </View>



                        <View style={styles.inputSection}>
                            <Icon
                                name='person-outline'
                                reverse
                                color='#517fa4'
                                size={16} />
                            <TextInput
                                style={styles.inputField}
                                value={this.state.userName}
                                onChangeText={(text) => this.setState({ userName: text })}
                                autoCapitalize='words'
                                autoCorrect={false}
                                underlineColorAndroid='transparent'
                                placeholder='Username'
                            />
                        </View>


                        <View style={styles.inputSection}>
                            <Icon
                                name='email'
                                reverse
                                color='#517fa4'
                                size={16} />
                            <TextInput
                                style={styles.inputField}
                                value={this.state.email}
                                keyboardType='email-address'
                                autoCorrect={false}
                                onChangeText={(text) => this.setState({ email: text })}
                                underlineColorAndroid='transparent'
                                placeholder='Your Email'
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
                                value={this.state.password}
                                onChangeText={(text) => this.setState({ password: text })}
                                underlineColorAndroid='transparent'
                                placeholder='Choose Password'
                                secureTextEntry={true}
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
                                value={this.state.password2}
                                onChangeText={(text) => this.setState({ password2: text })}
                                underlineColorAndroid='transparent'
                                placeholder='Confirm Password'
                                secureTextEntry={true}
                            />
                        </View>


                        <View style={styles.pickerContainer}>


                            <Picker
                                onValueChange={value => this.setState({ status: value })}
                                style={styles.pickerStyle}
                                mode='dropdown'
                                selectedValue={this.state.gender}
                                onValueChange={(itemValue, itemIndex) => this.setState({ gender: itemValue })}
                            >
                                <Picker.Item label="Select Gender" color='gray' value="..." />
                                <Picker.Item label="Male" value="Male" />
                                <Picker.Item label="Female" value="Famale" />
                            </Picker>

                        </View>


                        <View style={styles.inputSection}>
                            <Icon
                                name='school'
                                reverse
                                color='#517fa4'
                                size={16} />
                            <TextInput
                                style={styles.inputField}
                                value={this.state.university}
                                onChangeText={(text) => this.setState({ university: text })}
                                underlineColorAndroid='transparent'
                                placeholder='Select University'
                            />
                        </View>

                        <View style={styles.inputSection}>
                            <Icon
                                name='book'
                                reverse
                                color='#517fa4'
                                size={16} />
                            <TextInput
                                style={styles.inputField}
                                value={this.state.degree}
                                onChangeText={(text) => this.setState({ degree: text })}
                                underlineColorAndroid='transparent'
                                placeholder='Select Degree'
                            />
                        </View>

                        <View style={styles.inputSection}>
                            <Icon
                                name='attachment'
                                reverse
                                color='#517fa4'
                                size={16}
                            />
                            <TextInput
                                style={styles.inputField}
                                value={this.state.affiliation}
                                onChangeText={(text) => this.setState({ affiliation: text })}
                                underlineColorAndroid='transparent'
                                placeholder='Affiliate Name'
                            />
                        </View>


                        <TouchableOpacity
                            onPress={this.onSignupPress}>
                            <View style={styles.btnSignup}>
                                <Text style={styles.btnSignupTxt}
                                >{'Welcome to Uneleap!'.toUpperCase()}</Text>
                            </View>
                        </TouchableOpacity >
                        <View style={{ marginBottom: 15, marginTop: 15 }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Login')}>
                                <Text style={styles.message}>{'Already have an account? Login Here!'}</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </Animatable.View>
            </KeyboardAvoidingView>
        )
    }
}