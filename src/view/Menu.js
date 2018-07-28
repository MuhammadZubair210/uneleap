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
    ImageBackground

} from 'react-native';
import { Icon, Card, ListItem } from 'react-native-elements'
import { ImagePicker } from 'expo';
import * as firebase from 'firebase'
import firestore from 'firebase/firestore'

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

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

    },
    avatar: {
        justifyContent: 'center',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 15,
    },
    button: {
        marginTop: 5,
        alignItems: 'flex-end'
    },
    upload: {
        color: '#ffffff'
    },
    Background: {
        width: '100%',
        height: 170,
        position: 'absolute',
    },
    card: {
        marginTop: 10,
        width: '100%'
    },
    Information: {
        alignItems: 'center',
        marginTop: 10,
    },
    Name: {
        // fontFamily: 'Sans-Serif',
        fontSize: 25,
        fontWeight: 'bold',
    },
    vefi: {
        // fontFamily: 'Sans-Serif',
        fontSize: 12,
    },
    listitem: {
        flex: 1,
    }
});


state = {
    image: null,
    Name: null,
    Verification: null,
};

const list = [
    {
        title: 'Forum',
        icon: 'forum'
    },
    {
        title: 'Event',
        icon: 'event'
    },
    {
        title: 'Cloud',
        icon: 'cloud_queue'
    },
    {
        title: 'Library',
        icon: 'local_library'
    },
    {
        title: 'Brainbox',
        icon: 'flight-takeoff'
    },
    {
        title: 'Messages',
        icon: 'message'
    },
    {
        title: 'News and TV',
        icon: 'tv'
    },
    {
        title: 'Social',
        icon: 'people'
    },
    {
        title: 'Market',
        icon: 'flight-takeoff'
    },
    {
        title: 'Rewards',
        icon: 'flight-takeoff'
    },
]


export default function Menu({ onItemSelected }) {


    var userId = firebase.auth().currentUser.uid;
    var db = firebase.firestore();

    const settings = { timestampsInSnapshots: true };
    db.settings(settings)

    db.collection('Users').doc(userId).get().then(function (doc) {

        this.state.Name = doc.data().FullName;
        this.state.Verification = doc.data().Verification;

    });


    let { image } = this.state;
    let { Name } = this.state;
    let { Verification } = this.state;
    return (
        <ScrollView style={styles.menu}>

            <ImageBackground style={styles.Background}
                source={require('../image/background.jpg')}>
            </ImageBackground>

            <View style={styles.avatarContainer}>
                <Image
                    style={styles.avatar}
                    source={{ uri }}
                />
                <TouchableOpacity
                    onPress={this._pickImage}
                    style={styles.button}
                >
                    <Icon
                        name='edit'
                        reverse
                        color='#FF0000'
                        size={16} />


                </TouchableOpacity>
                <Text style={styles.Name}> {this.state.Name} </Text>
                <Text style={styles.veri}> {this.state.Verification} </Text>
            </View>



            <View style={styles.listitem}>
                {
                    list.map((item, i) => (
                        <ListItem
                            key={i}
                            title={item.title}
                            leftIcon={{ name: item.icon }}
                        />
                    ))
                }
            </View>

        </ScrollView>
    );
}

_pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
        this.setState({ image: result.uri });
    }
    let user = firebase.auth().currentUser;
    firebase.storage().ref('Images/' + user.uid).put(this.state.image).then(
        snapshot => {
            Alert.alert('Uploaded' + this.state.image);
        }
    )
};

Menu.propTypes = {
    onItemSelected: PropTypes.func.isRequired,
};