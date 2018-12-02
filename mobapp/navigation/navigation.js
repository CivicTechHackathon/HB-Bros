import { createDrawerNavigator, createMaterialTopTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import Login from '../screens/Login/Login';
import Dashboard from '../screens/Dashboard/Dashboard.js';
import Signup from '../screens/Signup/Signup';

const StackNavigator = createStackNavigator({
    Home: {
        screen: Login
    },
    Signup: {
        screen: Signup
    },
    Dashboard: {
        screen: Dashboard
    },
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
}
)
  
// const TabNavigator = createMaterialTopTabNavigator({
//     Home: {
//         screen: StackNavigator
//     },
//     Profile: {
//         screen: Screens.ProfileScreen
//     }
// })


const Navigator = createAppContainer(StackNavigator)
 export default Navigator;