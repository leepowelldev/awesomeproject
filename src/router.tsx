import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ModalScreen, ProfileScreen } from './screens';

const { Navigator, Screen, Group } = createStackNavigator();

const screenOptions = {
  animationEnabled: true,
  gestureEnabled: true,
  headerShown: false,
};

function Router(): JSX.Element {
  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Profile" component={ProfileScreen} />
      <Group
        screenOptions={{
          presentation: 'transparentModal',
        }}
      >
        <Screen name="Modal" component={ModalScreen} />
      </Group>
    </Navigator>
  );
}

export { Router };
