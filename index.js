/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux'; // Import Provider
import {store} from './src/redux/Store';
import FlashMessage from 'react-native-flash-message';

const AppWithRedux = () => (
  <Provider store={store}>
    <App />
    <FlashMessage animationDuration={1000} duration={2000} position="top" />
  </Provider>
);
AppRegistry.registerComponent(appName, () => AppWithRedux);
