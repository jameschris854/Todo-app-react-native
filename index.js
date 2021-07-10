/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TodosList from './store';
import {Provider} from 'mobx-react';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

const Root = () => (
  <Provider TodosList={TodosList}>
    <NavigationContainer>
      <App />
    </NavigationContainer>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
