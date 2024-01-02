/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux'; // Import Provider
import store from './src/store/store'; // Import your Redux store

const AppWithRedux = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );
  

  AppRegistry.registerComponent(appName, () => AppWithRedux);
