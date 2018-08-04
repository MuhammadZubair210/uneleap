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

const window = Dimensions.get('window');
var uri = 'http://api.skype.com/users/echo/profile/avatar?size=l';
var UserAvatar = '';
var Name;



export default function Menu({ onItemSelected }) {
// class Menu extends React.Component {

    // constructor() {
    //     super()

    //     console.ignoredYellowBox = [
    //         'Setting a timer'
    //     ];
    // }

    onLogoutPress = () => {
        this.props.navigation.navigate('Welcome')
      }

    // componentWillMount() {

    //     var userId = firebase.auth().currentUser.uid;
    //     var db = firebase.firestore();

    //     const settings = { timestampsInSnapshots: true };
    //     db.settings(settings)

    //     db.collection('Users').doc(userId).get().then(function (doc) {

    //         UserAvatar = doc.data().ImageUrl;
    //         Name = doc.data().FullName;

    //         if (UserAvatar == "null") {
    //         }
    //         else {
    //             uri = UserAvatar;
    //             console.log("avatar" + UserAvatar)
    //         }

    //     });

    // }

    // render() {
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
            <ScrollView style={styles.menu}>

                <View style={styles.avatarContainer}>

                    <View style={styles.myAvatar}>
                        <TouchableOpacity
                            onPress={this.onChooseImagePress}
                        >
                            <Image
                                style={styles.avatar}
                                source={{ uri }}
                            />


                        </TouchableOpacity>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.Name}> {Name} </Text>
                    </View>
                </View>


                <View style={styles.listContainer}>


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
                </View>


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
                    <TouchableOpacity
                        onPress={() => onItemSelected('Welcome')}
                        style={styles.help}
                    >
                        <Text> Logout </Text>
                    </TouchableOpacity>
                </View>



            </ScrollView>
        );
    // }
}

Clicked = () => {
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

// export default Menu;

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        // width: window.width,
        // height: window.height,
        backgroundColor: '#ffffff',
    },
    avatarContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        flexDirection: 'row',
        paddingBottom: 20,
        paddingTop: 20,
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 40,
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
        fontSize: 15,
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
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 10,
        paddingBottom: 5
    },
    item: {
        width: '100%',
        padding: 12,
        flexDirection: 'row',
    },
    Title: {
        flex: 1,
        marginLeft: 10,
        fontSize: 18,
    },
    UploadImage: {
        alignItems: 'center',
        color: '#ffffff',
    },
    info: {
        flex: 1,
        // marginTop:20,
    },
    listContainer: {
        flex: 1,
        marginTop: '8%',
    }
    // myAvatar:{
    //     flex:1,
    // }
});





Menu.propTypes = {
    onItemSelected: PropTypes.func.isRequired,
};