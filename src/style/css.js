import { StyleSheet } from 'react-native'

const colors = {
    'color100': {
        'color': '#ffffff'
    },
    'color300': {
        'color': '#718792'
    },
    'color500': {
        'color': '#455a64'
    },
    'color700': {
        'color': '#1c313a'
    }
}

const PRIMARY = 'color'

// helper function to get colors
export function getColor(string) {
    if (string) {
        if (string.indexOf('#') > -1 || string.indexOf('rgba') > -1
            || string.indexOf('rgb') > -1) {
            return string
        }
        if (colors[string]) {
            return colors[string].color
        }
        if (colors[`${string}500`]) {
            return colors[`${string}500`].color
        }
    }
    return colors[`${PRIMARY}500`].color
}

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logocontainer: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 50,
    },
    logocontainer2: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 50,
    },
    returnLoginContainer: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    formcontainerBttom: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    unleaptitle: {
        alignSelf: 'center',
        marginBottom: 20,
        fontSize: 30,
        marginBottom: 20,
        color: 'rgb(0, 0, 0)'
    },
    initFromBox: {
        height: 150,
        width: 300,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 30
    },
    btnSignup: {
        width: 300,
        height: 50,
        marginTop:10,
        backgroundColor: 'rgb(255, 0, 0)',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        // elevation: 10
    },
    btnSignupTxt: {
        //fontFamily: 'Roboto-Bold',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    btnLogin: {
        width: 300,
        height: 50,
        backgroundColor: getColor('color300'),
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        // elevation: 10
    },
    btnLoginTxt: {
        //fontFamily: 'Roboto-Bold',
        fontSize: 12,
        fontWeight: 'bold',
        color: 'rgb(0, 0, 0)'
    },
    errMsg: {
        width: 280,
        textAlign: 'center',
        alignSelf: 'center',
        color: '#ffffff',
        marginBottom: 10,
        fontSize: 14,
        fontFamily: 'Roboto-Regular'
    },
    message: {
        marginTop: 5,
        marginBottom: 5,
        color: 'rgb(0, 0, 0)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputField: {
        width: 280,
        height: 35,
        marginTop: 5,
        paddingLeft: 15,
        paddingRight: 15,
        borderColor: 'gray',
        borderWidth: 1,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    pickerContainer: {
        width: 280,
        height: 40,
        marginTop: 5,
        marginBottom: 5,
        borderColor: 'gray',
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderColor: 'gray',
    },
    pickerStyle: {
        width: 280,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    },
    loginbtnContainers: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 280
    },
    loginBtnContainer: {
        width: 120,
        height: 40,
        backgroundColor: getColor('color300'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    forgotBtnContainer: {
        width: 180,
        height: 40,
        marginTop: 10,
        marginBottom: 5,
        backgroundColor: getColor('color300'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    signupBtnContainer: {
        width: 120,
        height: 40,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: getColor('color300'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    inputSection:{
        flexDirection:'row',
        borderWidth: 0.7,
        borderRadius: 30,
        marginBottom:5,
        borderColor: '#76A9A6',
    },
    searchIcon:{
        height:10,
        width:10,
        marginTop:50,
    },
    lineStyle:{
        width: '80%',
        borderWidth:0.8,
        borderColor: 'black',
    }

});

