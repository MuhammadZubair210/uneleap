// import React from 'react'
// import { StyleSheet, Button, View, Text, StatusBar, TouchableOpacity, ScrollView, Picker, TextInput, KeyboardAvoidingView, Alert, Image } from 'react-native'
// import { createDrawerNavigator, StackNavigator } from 'react-navigation';
// // import Profile from './Profile';
// import * as Animatable from 'react-native-animatable'
// import * as firebase from 'firebase'
// import firestore from 'firebase/firestore'
// import SideMenu from 'react-native-side-menu';
// import Menu from './Menu';
// import { Icon } from 'react-native-elements'



// const styles = StyleSheet.create({
//     button: {
//         position: 'absolute',
//         top: 20,
//         padding: 7,
//     },
//     caption: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         alignItems: 'center',
//     },
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#ffffff',
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
// });





// class Main extends React.Component {
//     constructor(props) {
//         super(props)
//         this.toggle = this.toggle.bind(this);
//         console.ignoredYellowBox = [
//             'Setting a timer'
//         ];
//         this.state = {
//             isOpen: false,
//             selectedItem: 'Welcome',
//         };
//     }

//     onMenuItemSelected = item => {

//         console.log(item)

//         this.setState({
//             isOpen: false,
//             selectedItem: item,
//         });
//     }


//     componentDidMount() {
//         StatusBar.setHidden(true);
//         var varification = firebase.auth().currentUser.emailVerified
//         var userId = firebase.auth().currentUser.uid
//         var db = firebase.firestore();

//         const settings = { timestampsInSnapshots: true };
//         db.settings(settings)

//         db.collection('Users').doc(userId).update(
//             { Verification: varification }
//         );
//     }

//     onLogoutPress = () => {
//         firebase.auth().signOut();
//         this.props.navigation.navigate('Welcome');
//     }

//     profileNav = () => {
//         this.props.navigation.navigate('Profile');
//     }

//     toggle() {
//         this.setState({
//             isOpen: !this.state.isOpen,
//         });
//     }

//     updateMenuState(isOpen) {
//         this.setState({ isOpen });
//     }

//     onMenuItemSelected = item =>
//         this.setState({
//             isOpen: false,
//             selectedItem: item,
//         });




//     render() {

//         const menu = <Menu onItemSelected={this.onMenuItemSelected} navigator={navigator} />;

//         return (

//             <SideMenu
//                 style={styles.container}
//                 menu={menu}
//                 isOpen={this.state.isOpen}
//                 onChange={isOpen => this.updateMenuState(isOpen)}
//             >

//                 <View style={styles.container}>

//                     <TouchableOpacity style={styles.SignUp}
//                         onPress={this.onLogoutPress}>

//                         <Text style={styles.TextStyle}> LOGOUT </Text>

//                     </TouchableOpacity>
//                 </View>
//                 <TouchableOpacity
//                     onPress={this.toggle}
//                     style={styles.button}
//                 >

//                     <Icon
//                         style={{ marginLeft: 100 }}
//                         name='menu'
//                         reverse
//                         color='#517fa4'
//                         size={16} />
//                 </TouchableOpacity>
//             </SideMenu>
//         )
//     }
// }

// export default Main;


// // export default createDrawerNavigator({
// //     Main: { screen: Main },
// //     Profile: { screen: Profile }
// // });


// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         alignItems: 'center',
// //         justifyContent: 'center',

// //     },
// //     text: {
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         fontSize: 50,
// //     },
// //     icon: {
// //         width: 24,
// //         height: 24,
// //     },
// // });

import React from 'react'
import { AppRegistry, View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

import { StackNavigator, createDrawerNavigator } from "react-navigation";

import Menu from "./Menu";
import LoginView from './LoginView'
import ForgotPassView from './ForgotPassView';
import SignupView from './SignupView';
import SignupstepView from './SignupstepView';
import { Icon } from 'react-native-elements'
import { DrawerActions } from 'react-navigation';
import * as firebase from 'firebase'
import firestore from 'firebase/firestore'

export default class Main extends React.Component {

    constructor(props) {
        super(props)

        console.ignoredYellowBox = [
            'Setting a timer'
        ];
    }
    static navigationOptions = ({ navigation }) => ({
        title: "Home",
        // headerLeft: <Icon name="menu" style={{ paddingLeft: 10 }} onPress={() => this.props.navigation.navigate('DrawerOpen')} />,
        drawerLabel: 'Home',
        headerRight: (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
            />
        ),
    })

    onLogoutPress = () => {
        this.props.navigation.navigate('Welcome');
        firebase.auth().signOut();
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
                    style={styles.button}
                >

                    <Icon
                        style={{ marginLeft: 100 }}
                        name='menu'
                        reverse
                        color='#517fa4'
                        size={16} />
                </TouchableOpacity>
                <View style={styles.logout}>

                    <TouchableOpacity onPress={() => firebase.auth().signOut().then(s => {
                    this.props.navigation.navigate("Signup")
                })}
                        >

                        <Text style={styles.TextStyle}> LOGOUT </Text>

                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 20,
        padding: 7,
    },
    logout: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});