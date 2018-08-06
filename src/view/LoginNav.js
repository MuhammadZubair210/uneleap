import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import InitView from './InitView'
import LoginView from './LoginView'
import ForgotPassView from './ForgotPassView';
import SignupView from './SignupView';
import SignupstepView from './SignupstepView';
import Main from './Main';
import Welcome from './Welcome';
import Splash from './Splash';
import SignupPremium from './SignupPremium'
import Menu from './Menu'
import Profile from './Profile'
import Webview from './RegistrationWebview'
import App from './App'

const LoginNav = createStackNavigator({
  Splash:{
    screen: Splash,
    navigationOptions: () => ({
      header: null
    }),
  },
  Welcome:{
    screen: Welcome,
    navigationOptions: ({navigation}) => ({
      title: 'Welcome',
      headerTitleStyle: styles.titleMenu,
      headerLeft: null          
  }), 
  },
  Init: {
    screen: InitView,
    navigationOptions: () => ({
      header: null
    }),
  },
  Menu: {
    screen: Menu,
    navigationOptions: () => ({
      header: null
    }),
  },
  Login: {
    screen: LoginView,
    navigationOptions: () => ({
      header: null
    }),
  },
  Forgot: {
    screen: ForgotPassView,
    navigationOptions: () => ({
      header: null
    }),
  },
  Signupstep: {
    screen: SignupstepView,
    navigationOptions: () => ({
      header: null
    }),
  },
  Signup: {
    screen: SignupView,
    navigationOptions: () => ({
      header: null
    }),
  },
  Welcome:{
    screen: Welcome,
    navigationOptions: () => ({
      header: null
    }),
  },
  Main:{
    screen:Main,
    navigationOptions: () => ({
      header: null
    }),
  },
  Profile:{
    screen: Profile,
    navigationOptions: () => ({
      header: null
    }),
  },
  SignupPremium:{
    screen: SignupPremium,
    navigationOptions: () => ({
      header: null
    }),
  },
  Webview:{
    screen: Webview,
    navigationOptions: () => ({
      header: null
    }),
  },
  App:{
    screen: App,
    navigationOptions: () => ({
      header: null
    }),
  },
});


export default LoginNav;