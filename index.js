/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';
import Keypad from './Keypad';

AppRegistry.registerComponent(appName, () => App);

const App = () => {
  return <Keypad />;
};
