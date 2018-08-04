import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

//library imports 
import { Container, Content, Icon, Header, Body } from 'native-base'
import { createDrawerNavigator, createStackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'

//custom files 
// import AppStackNavigator from './AppStackNavigator'

import Main from './Main'
import Brainbox from "./Brainbox";
import Cloud from './Cloud'
import Event from './Event'
import Forum from './Forum'
import Library from './Library'
import Market from './Market'
import Messages from './Messages'
import NewsandTV from './NewsandTV'
import Rewards from './Rewards'
import Social from './Social'
import Welcome from './Welcome'


import { ImagePicker } from 'expo';
import * as firebase from 'firebase'
import firestore from 'firebase/firestore'

// const window = Dimensions.get('window');
var uri = 'http://api.skype.com/users/echo/profile/avatar?size=l';
var UserAvatar = '';
var Name;



export default class App extends Component {

  constructor(props) {
    super(props)

    console.ignoredYellowBox = [
        'Setting a timer'
    ];
}

  componentWillMount() {
    var userId = firebase.auth().currentUser.uid;
    var db = firebase.firestore();

    const settings = { timestampsInSnapshots: true };
    db.settings(settings)

    db.collection('Users').doc(userId).get().then(function (doc) {

      UserAvatar = doc.data().ImageUrl;
      Name = doc.data().FullName;

      if (UserAvatar == "null") {
      }
      else {
        uri = UserAvatar;
        console.log("avatar" + UserAvatar)
      }

    });
}

  render() {
    var userId = firebase.auth().currentUser.uid;
    var db = firebase.firestore();

    const settings = { timestampsInSnapshots: true };
    db.settings(settings)

    db.collection('Users').doc(userId).get().then(function (doc) {

      UserAvatar = doc.data().ImageUrl;
      Name = doc.data().FullName;

      if (UserAvatar == "null") {
      }
      else {
        uri = UserAvatar;
        console.log("avatar" + UserAvatar)
      }

    });
    return (
      <MyApp />
    )
  }
}

onChooseImagePress = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: [4, 4],
  });

  console.log(result.uri)

  if (!result.cancelled) {

    var url;
    var user = firebase.auth().currentUser.uid;

    const response = await fetch(result.uri);
    const blob = await response.blob();

    firebase.storage().ref().child('images/' + user).put(blob);

    setTimeout(() => {

      firebase.storage().ref().child('images/' + user).getDownloadURL().then(function (downloadURL) {
        console.log('File available at', downloadURL);

        var db = firebase.firestore();

        const settings = { timestampsInSnapshots: true };
        db.settings(settings)

        db.collection('Users').doc(user).update(
          { ImageUrl: downloadURL }
        );
        // console.log(downloadURL);

      });

    }, 2500
    )

  }

}


const CustomDrawerContentComponent = (props) => (

  <ScrollView style={styles.container}>
    <View style={styles.avatarContainer}>

      <View style={styles.myAvatar}>
        <TouchableOpacity
          onPress={this.onChooseImagePress}
        >
          <Image
            style={styles.avatar}
            source={{ uri: uri }}
          />


        </TouchableOpacity>
      </View>
      <View style={styles.info}>
        <Text style={styles.Name}> {Name} </Text>
      </View>
    </View>

    <View style={styles.listItem}>
      <DrawerItems {...props} />
    </View>

    <View style={styles.Footer}>
      <TouchableOpacity
        // onPress={this._pickImage}
        style={styles.footerItem}
      >
        <Text> Settings </Text>


      </TouchableOpacity>
      <TouchableOpacity
        // onPress={this._pickImage}
        style={styles.footerItem}
      >
        <Text> Help </Text>

      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerItem}
      >
        <Text onPress={() => props.navigation.navigate("Welcome")}> Logout </Text>
      </TouchableOpacity>
    </View>

  </ScrollView>


);

const MyApp = createDrawerNavigator({

  // For each screen that you can navigate to, create a new entry like this:
  Main: {
    screen: Main
  },
  Forum: {
    screen: Forum
  },
  Event: {
    screen: Event
  },
  Cloud: {
    screen: Cloud
  },
  Library: {
    screen: Library
  },
  Brainbox: {
    screen: Brainbox
  },
  Messages: {
    screen: Messages
  },
  NewsandTV: {
    screen: NewsandTV
  },
  Social: {
    screen: Social
  },
  Market: {
    screen: Market
  },
  Rewards: {
    screen: Rewards
  },


},
  {
    initialRouteName: 'Main',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  });


const styles = StyleSheet.create({

  container: {
    height: 350,
  },
  listItem: {
    paddingTop: 20,
  },
  avatarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    flexDirection: 'row',
    paddingBottom: 20,
    paddingTop: 20,
    height: 150,
  },
  Name: {
    // fontFamily: 'Sans-Serif',
    fontSize: 17,
    color: '#ffffff',
    justifyContent: 'center',
    marginLeft: 10,
  },
  info: {
    flex: 1,
    // marginTop:20,
  },
  avatar: {
    width: 85,
    height: 85,
    borderRadius: 45,
    marginLeft: 5,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  drawerHeader: {
    padding: 0,
    margin: 0,
    height: 150,
    backgroundColor: 'white',
    flexDirection: 'row',

  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  },
  footerItem: {
    flex: 1,
    alignItems: 'center',
},
Footer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 10,
    paddingBottom: 5
},

})