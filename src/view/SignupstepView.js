import React from 'react'
import { View, Image, Alert, Text, TouchableOpacity, BackHandler,StatusBar } from 'react-native'
import styles from '../style/css'
import * as Animatable from 'react-native-animatable'

export default class SignupstepView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            init: true,
            navigate: null,
        }
    }

    componentDidMount() {
        StatusBar.setHidden(true);
     }


    render() {
        const animationTop = this.state.init ? 'bounceInDown' : 'bounceOutUp'
        const animationBottom = this.state.init ? 'bounceInUp' : 'bounceOutDown'
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Animatable.View
                    animation={animationTop}
                    style={styles.logocontainer}
                >
                    <TouchableOpacity
                        style={{ alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => {
                            this.setState({ init: false, navigate: 'Signup' })
                        }
                        }
                    >
                        <Image style={{ width: 150, height: 150 }}
                            source={require('../image/studenticon.png')}
                        />
                        <Text style={[styles.message, { fontWeight: 'bold' }]}>FREE ACCOUNT</Text>
                        <Text style={styles.message}>For all Students, Alumni and Faculty members</Text>
                    </TouchableOpacity>
                </Animatable.View>
                <Animatable.View
                    animation={animationBottom}
                    style={styles.logocontainer2}
                    onAnimationEnd={() => {
                        if (!this.state.init) {
                            if (this.state.navigate != null) {
                                navigate(this.state.navigate)
                                this.setState({ init: true, navigate: null })
                            }
                        }
                    }
                    }
                >
                    <TouchableOpacity
                        style={{ alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => {
                            this.setState({ init: false, navigate: 'SignupPremium' })
                        }
                        }
                    >
                        <Image style={{ width: 150, height: 150 }}
                            source={require('../image/corporateicon.png')}
                        />
                        <Text style={[styles.message, { fontWeight: 'bold' }]}>PREMIUM ACCOUNT</Text>
                        <Text style={styles.message}>For all Universities, Institutions and Corporate members</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </View>
        )
    }
}