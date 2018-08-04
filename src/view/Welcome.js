import React from 'react';
// import styles from '../src/style/css'
import Infoslider from 'react-native-infoslider'
import { StyleSheet, Dimensions, Text, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import ImageSlider from 'react-native-image-slider';
import { Button, icons } from 'react-native-elements';
// import AppIntro from 'react-native-app-intro-slider';
import Appintro from 'react-native-app-intro-slider'
const { width, height } = Dimensions.get('window');




const styles = StyleSheet.create({

    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        margin: 0,
        padding: 0,
    },
    slider: {
        marginTop: '12%',
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center',
        

    },
    text: {
        backgroundColor: '#ffffff',
        flex: 1,
        flexDirection: 'row',
    },
    SignUp: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    LogIn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }


});



// const slides = [
//     {
//         key: 'First',

//         image: require('../image/First.jpg'),
//         imageStyle: styles.image,
//         backgroundColor: '#59b2ab',
//     },
//     {
//         key: 'Second',

//         image: require('../image/Seventh.jpg'),
//         imageStyle: styles.image,
//         backgroundColor: '#febe29',
//     },
//     {
//         key: 'Third',

//         image: require('../image/First.jpg'),
//         imageStyle: styles.image,
//         backgroundColor: '#22bcb5',
//     },
//     {
//         key: 'Forth',

//         image: require('../image/Fifth.jpg'),
//         imageStyle: styles.image,
//         backgroundColor: '#22bcb5',
//     },
//     {
//         key: 'Fifth',

//         image: require('../image/Sixth.jpg'),
//         imageStyle: styles.image,
//         backgroundColor: '#22bcb5',
//     }
// ];






export default class Welcome extends React.Component {


    constructor(props) {
        super(props);
        console.ignoredYellowBox = [
            'Setting a timer'
        ];

        this.state = {
            data: [
                {
                    title: "Learning on the Go",
                    text: "Education simplified at the touch of your fingers",
                    image: require('../image/posterlogo.jpg'),
                },
                {
                    title: "Find Solutions",
                    text: "Use our E-learning Q&A forum to get answers to all your questions",
                    image: require('../image/launch1.jpg'),
                },
                {
                    title: "Connect",
                    text: "Global connection with other active students on several interest matters to improve and achieve learning excellence",
                    image: require('../image/connect.jpg'),
                },
                {
                    title: "Engage",
                    text: "Try out all the engaging features we have available to help improve your daily learning lifestyle",
                    image: require('../image/launch3.jpg'),
                },

            ]
        };
    }

    componentDidMount() {
        StatusBar.setHidden(true);
    }



    Login = () => {
        this.props.navigation.navigate('Login')
    }

    signup = () => {
        this.props.navigation.navigate('Signupstep')
    }
    static navigationOptions = { header: null }







    render() {

        // const pageArray = [{
        //     title: 'Page 1',
        //     description: 'Description 1',
        //     img: 'https://goo.gl/Bnc3XP',
        //     imgStyle: {
        //       height: 80 * 2.5,
        //       width: 109 * 2.5,
        //     },
        //     backgroundColor: '#fa931d',
        //      // If you don't specify, a 30% darker color will be inferred from your background color.
        //     fontColor: '#fff',
        //     level: 10,
        //   }, {
        //     title: 'Page 2',
        //     description: 'Description 2',
        //     img: require('../image/Fifth.jpg'),
        //     imgStyle: {
        //       height: 93 * 2.5,
        //       width: 103 * 2.5,
        //     },
        //     backgroundColor: '#a4b602',
        //     fontColor: '#fff',
        //     level: 10,
        //   }];









        return (

            <View style={styles.container}>

                <View style={styles.slider}>

                    <Infoslider
                        data={this.state.data}
                        showDots={true}
                        activeDotColor="#04B4AE"
                        titleColor="#000"
                        textColor="#666"
                        loop={true}
                        autoplay={true}
                        autoplayTimeout={3} />
                </View>


                <View style={styles.text}>

                    <TouchableOpacity style={styles.SignUp}
                        onPress={() => this.props.navigation.navigate('Signupstep')}>

                        <Text style={styles.TextStyle}> SIGN UP </Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.LogIn}
                        onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.TextStyle}> LOG IN </Text>
                    </TouchableOpacity>
                </View>

            </View >
        );


        // <View style={styles.container}>
        // <View style={styles.slider}>
        //     <Infoslider
        //         data={this.state.data}
        //         showDots={true}
        //         activeDotColor="#04B4AE"
        //         loop={true}
        //         autoplay={true}
        //         autoplayTimeout={3} />
        //         </View>

        //     <View style={styles.text}>
        //     <TouchableOpacity style={styles.SignUp}
        //     onPress={ ()=> this.props.navigation.navigate ('Signupstep')}>

        //         <Text> SIGN UP </Text>

        //         </TouchableOpacity>

        //     <TouchableOpacity style={styles.LogIn}
        //     onPress={ ()=> this.props.navigation.navigate ('Login')}>
        //         <Text> LOG IN </Text>
        //     </TouchableOpacity>
        //     </View>
        // </View>
    }

}



