/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {LogBox} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {PersistGate} from 'redux-persist/es/integration/react';
import {
  SafeAreaProvider,
  initialWindowSafeAreaInsets,
} from 'react-native-safe-area-context';
import RootNavigator from './navigation';
import {store, persistor} from './redux/store/store';

enableScreens();

LogBox.ignoreAllLogs();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider initialSafeAreaInsets={initialWindowSafeAreaInsets}>
          <RootNavigator />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
