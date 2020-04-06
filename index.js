/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Login from './src/screens/Login';
import {name as appName} from './app.json';
import Register from './src/screens/Register'

AppRegistry.registerComponent(appName, () => Login);
