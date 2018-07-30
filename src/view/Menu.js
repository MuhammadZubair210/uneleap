import React from 'react';
import PropTypes from 'prop-types';
import {
    Dimensions,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
    TouchableOpacity,
    Alert,
    ImageBackground,
    ToastAndroid,
} from 'react-native';
import { Icon, Card, ListItem } from 'react-native-elements'
import { ImagePicker } from 'expo';
import * as firebase from 'firebase'
import firestore from 'firebase/firestore'
import imageURL from './Main'

const window = Dimensions.get('window');
var uri;
var AvatartUrl = null;


const styles = StyleSheet.create({
    menu: {
        flex: 1,
        // width: window.width,
        // height: window.height,
        backgroundColor: '#ffffff',
    },
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        flexDirection: 'row',
        paddingBottom: 10,
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        marginTop: 10,
        marginLeft: 5,
        borderColor: '#ffffff'
    },
    button: {
        justifyContent: 'flex-end',
        marginLeft: 5,
    },
    upload: {
        color: '#ffffff'
    },
    Name: {
        // fontFamily: 'Sans-Serif',
        fontSize: 20,
        color: '#ffffff',
        justifyContent: 'center',
    },
    vefi: {
        // fontFamily: 'Sans-Serif',
        fontSize: 11,
        color: '#ffffff',
    },
    listitem: {
        flex: 1,
        flexDirection: 'row',
    },
    setting: {
        flex: 1,
        alignItems: 'center',
    },
    help: {
        flex: 1,
        alignItems: 'center',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
        paddingBottom: 15
    },
    item: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#99C6C3',
    },
    Title: {
        flex: 1,
        color: '#79AEAA',
        marginLeft: 10,
        fontSize: 14,
    },
    UploadImage: {
        alignItems: 'center',
        color: '#ffffff',
    },
    info: {
        flex: 1,
        // marginTop:20,
    },
    // myAvatar:{
    //     flex:1,
    // }
});


state = {
    image: null,
    Name: null,
    Verification: null,
};

export default function Menu({ onItemSelected }) {


    // var userId = firebase.auth().currentUser.uid;
    // var db = firebase.firestore();

    // const settings = { timestampsInSnapshots: true };
    // db.settings(settings)

    // db.collection('Users').doc(userId).get().then(function (doc) {

    //     AvatartUrl = doc.data().ImageUrl;
    //     this.state.Name = doc.data().FullName;
    //     this.state.Verification = doc.data().Verification;

    // });

    var userId = firebase.auth().currentUser.uid;
    var db = firebase.firestore();

    const settings = { timestampsInSnapshots: true };
    db.settings(settings)

    db.collection('Users').doc(userId).get().then(function (doc) {

        uri = doc.data().ImageUrl;
        this.state.Name = doc.data().FullName;
        this.state.Verification = doc.data().Verification;

        

        // if(AvatartUrl != null){
        //     uri = AvatartUrl;
        // }

    });


    // let { image } = this.state;

    return (
        <ScrollView style={styles.menu}>

            {/* <ImageBackground style={styles.Background}
                source={require('../image/background.jpg')}>
            </ImageBackground> */}

            <View style={styles.avatarContainer}>

                <View style={styles.myAvatar}>
                    <Image
                        style={styles.avatar}
                        source={{uri}}
                    />
                    <TouchableOpacity
                        onPress={this.onChooseImagePress}
                        style={styles.button}
                    >
                        <Text style={styles.UploadImage}> Upload Image </Text>


                    </TouchableOpacity>
                </View>
                <View style={styles.info}>
                    <Text style={styles.Name}> {this.state.Name} </Text>
                    <Text style={styles.veri}> {this.state.Verification} </Text>
                </View>
            </View>



            <TouchableOpacity
                style={styles.listitem}
                onPress={this.Clicked}>
                {
                    <View style={styles.item}>
                        <Text style={styles.Title}>Forum</Text>
                    </View>
                }
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.listitem}
                onPress={this.Clicked}>
                {
                    <View style={styles.item}>
                        <Text style={styles.Title}>Event</Text>

                    </View>
                }
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.listitem}
                onPress={this.Clicked}>
                {
                    <View style={styles.item}>
                        <Text style={styles.Title}>Cloud</Text>

                    </View>
                }
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.listitem}
                onPress={this.Clicked}>
                {
                    <View style={styles.item}>
                        <Text style={styles.Title}>Library</Text>

                    </View>
                }
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.listitem}
                onPress={this.Clicked}>
                {
                    <View style={styles.item}>

                        <Text style={styles.Title}>Brainbox</Text>

                    </View>
                }
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.listitem}
                onPress={this.Clicked}>
                {
                    <View style={styles.item}>

                        <Text style={styles.Title}>Messages</Text>

                    </View>
                }
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.listitem}
                onPress={this.Clicked}>
                {
                    <View style={styles.item}>
                        <Text style={styles.Title}>News and TV</Text>

                    </View>
                }
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.listitem}
                onPress={this.Clicked}>
                {
                    <View style={styles.item}>

                        <Text style={styles.Title}>Social</Text>

                    </View>
                }
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.listitem}
                onPress={this.Clicked}>
                {
                    <View style={styles.item}>

                        <Text style={styles.Title}>Market</Text>

                    </View>
                }
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.listitem}
                onPress={this.Clicked}>
                {
                    <View style={styles.item}>

                        <Text style={styles.Title}>Forum</Text>

                    </View>
                }
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.listitem}
                onPress={this.Clicked}>
                {
                    <View style={styles.item}>

                        <Text style={styles.Title}>Rewards</Text>

                    </View>
                }
            </TouchableOpacity>
            <View style={styles.footer}>

                <TouchableOpacity
                    // onPress={this._pickImage}
                    style={styles.setting}
                >
                    <Text> Settings </Text>


                </TouchableOpacity>
                <TouchableOpacity
                    // onPress={this._pickImage}
                    style={styles.help}
                >

                    <Text> Help </Text>



                </TouchableOpacity>
            </View>



        </ScrollView>
    );
}

Clicked = () =>{
    Alert.alert('Item Clicked..');
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

            firebase.storage().ref().child('images/' + user).getDownloadURL().then(function(downloadURL) {
                console.log('File available at', downloadURL);
    
                var db = firebase.firestore();
    
                    const settings = { timestampsInSnapshots: true };
                    db.settings(settings)
    
                    db.collection('Users').doc(user).update(
                        { ImageUrl: downloadURL }
                    );
                    // console.log(downloadURL);
    
            });
            
          }, 3500
        )
        // this.props.navigation.navigate ('Welcome')
    
      }

            }



Menu.propTypes = {
    onItemSelected: PropTypes.func.isRequired,
};