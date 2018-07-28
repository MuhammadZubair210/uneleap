import React from 'react';
import { StyleSheet,Dimensions, Text, View, Animated, Button, Easing, StatusBar, TouchableOpacity, Image, CameraRoll, } from 'react-native';
import { StackNavigator } from 'react-navigation'
import { ImagePicker } from 'expo';
import * as firebase from 'firebase'
import firestore from 'firebase/firestore'
import PropTypes from 'prop-types';

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

// export default class Profile extends React.Component {

    state = {
        image: null,
    };



    navigationOptions = {
        header: null,
        tabBarLabel: "Screen 1"



    }

    export default function Menu({ onItemSelected }) {
        return (
          <ScrollView scrollsToTop={false} style={styles.menu}>
            <View style={styles.avatarContainer}>
              <Image
                style={styles.avatar}
                source={{ uri }}
              />
              <Text style={styles.name}>Your name</Text>
            </View>
      
            <Text
              onPress={() => onItemSelected('About')}
              style={styles.item}
            >
              About
            </Text>
      
            <Text
              onPress={() => onItemSelected('Contacts')}
              style={styles.item}
            >
              Contacts
            </Text>
          </ScrollView>
        );
      }
      
      Menu.propTypes = {
        onItemSelected: PropTypes.func.isRequired,
      };

    // render() {
    //     let { image } = this.state;
    //     let Uid = firebase.auth().currentUser.uid
    //     const response = await fetch(uri);
    //     const blob = await response.blob();
    //     const ref = firebase
    //         .storage()
    //         .ref()
    //         .child(Uid);

    //     const snapshot = await ref.put(blob);
    //     return snapshot.downloadURL;


    //     return (
    //         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //             <Button
    //                 title="Pick an image from camera roll"
    //                 onPress={this._pickImage}
    //             />
    //             {image &&
    //                 <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    //         </View>
    //     );
    // }



    // _pickImage = async () => {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         allowsEditing: true,
    //         aspect: [4, 3],
    //     });

    //     console.log(result);

    //     if (!result.cancelled) {
    //         this.setState({ image: result.uri });
    //     }
    //     let user = firebase.auth().currentUser;
    //     firebase.storage().ref('Images/' + user.uid).put(this.state.image).then(
    //         snapshot => {
    //             Alert.alert('Uploaded' + this.state.image);
    //         }
    //     )
    // };
// }



const styles = StyleSheet.create({
    menu: {
      flex: 1,
      width: window.width,
      height: window.height,
      backgroundColor: 'gray',
      padding: 20,
    },
    avatarContainer: {
      marginBottom: 20,
      marginTop: 20,
    },
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 24,
      flex: 1,
    },
    name: {
      position: 'absolute',
      left: 70,
      top: 20,
    },
    item: {
      fontSize: 14,
      fontWeight: '300',
      paddingTop: 5,
    },
  });


// const styles = StyleSheet.create({
//     text: {
//         fontSize: 28,
//         margin: 20,
//     },
//     Avatar: {
//         width: 50,
//         height: 50,
//         alignItems: 'center'
//     },
//     buttonText: {
//         fontSize: 21,
//     },
//     button: {
//         padding: 13,
//         margin: 15,
//         backgroundColor: '#dddddd',
//     },
//     container: {
//         marginTop: Expo.Constants.statusBarHeight + 40,
//         flex: 1,
//         backgroundColor: '#ffffff',
//         alignItems: 'center',
//     },
// });
