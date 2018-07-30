import React from 'react';
import { Image, StyleSheet, Button, Text, View, Alert, } from 'react-native';
import { ImagePicker } from 'expo';
import * as firebase from 'firebase';

var Url = '';

export default class Profile extends React.Component {
  static navigationOptions = {
    header: null,
  };

  onChooseImagePress = async () => {
    // const { Permissions } = Expo;
    // Permissions.getAsync(Expo.Permissions.CAMERA);

    // // let result = await ImagePicker.launchCameraAsync();
    // Permissions.getAsync(Expo.Permissions.CAMERA_ROLL)

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 4],
    });

    console.log(result.uri)

    if (!result.cancelled) {

      const response = await fetch(result.uri);
      const blob = await response.blob();
      var user = firebase.auth().currentUser.uid;
      firebase.storage().ref().child('images/' + user).put(blob);

      firebase.storage().ref().child('images/' + user).getDownloadURL()
        .then((url) => {
          var db = firebase.firestore();

          const settings = { timestampsInSnapshots: true };
          db.settings(settings)

          db.collection('Users').doc(user).update(
            { ImageUrl: url }
          );
          console.log(url);
        });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Choose image..." onPress={this.onChooseImagePress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, alignItems: "center", },
});