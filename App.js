import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
// import {store} from 'store';
import {store} from './src/store/index';
import persistor from './src/store/index';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
// import {PersistGate} from 'redux-persist/es/integration/react';
import DogList from './src/screens/DogList/DogList';
import {RootStackScreen} from './src/navigation/Navigation';
// import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <NavigationContainer>
        {/* <DogList /> */}
        <RootStackScreen />
      </NavigationContainer>
      {/* </PersistGate> */}
    </Provider>
  );
};

export default App;
