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

export default class Messages extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Messages",
        // headerLeft: <Icon name="menu" style={{ paddingLeft: 10 }} onPress={() => this.props.navigation.navigate('DrawerOpen')} />,
        drawerLabel: 'Messages',
    })
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.TextStyle}> Messages </Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

});