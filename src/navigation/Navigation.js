import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DogListScreen from '../screens/DogList/DogList';
import DogDetailsScreen from '../screens/DogDetails/DogDetails';

const RootStack = createNativeStackNavigator();

export function RootStackScreen() {
  return (
    <RootStack.Navigator>
      <RootStack.Group screenOptions={{headerShown: false}}>
        <RootStack.Screen name="DogList" component={DogListScreen} />
      </RootStack.Group>

      <RootStack.Group
        screenOptions={{
          presentation: 'modal',
          headerShown: true,
          title: 'Dog Details',
        }}>
        <RootStack.Screen name="DogDetails" component={DogDetailsScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}
