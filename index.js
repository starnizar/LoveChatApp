import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import {
  MD3Theme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';

const theme = {
  ...DefaultTheme,
};

const ProvidedApp = () => (
  <Provider store={store}>
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => ProvidedApp);
