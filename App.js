import React from 'react';
import {store} from './src/store/index';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackScreen} from './src/navigation/Navigation';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
