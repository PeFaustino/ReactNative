import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main/Index';
import User from './pages/User/Index';
import MyWeb from './pages/Webview/index';

const Routes = createAppContainer(
    createStackNavigator({
        Main,
        User,
        MyWeb
    },{
        headerLayoutPreset: 'center',
        headerBackTitleVisible: false,
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#7159c1',
            },
            headerTintColor: '#FFF'
        }
    })
);

export default Routes;