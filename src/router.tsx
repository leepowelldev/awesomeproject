import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  HomeScreen,
  ModalScreen,
  ProfileScreen,
  OfflineScreen,
  AboutScreen,
  ErrorScreen,
} from './screens';

const screenOptions = {
  animationEnabled: false,
  gestureEnabled: true,
  headerShown: false,
};

const { Navigator, Screen, Group } = createStackNavigator();

export function Router(): JSX.Element {
  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Profile" component={ProfileScreen} />
      <Screen name="About" component={AboutScreen} />
      <Screen name="Error" component={ErrorScreen} />
      <Group
        screenOptions={{
          presentation: 'transparentModal',
        }}
      >
        <Screen name="Modal" component={ModalScreen} />
        <Screen name="Offline" component={OfflineScreen} />
      </Group>
    </Navigator>
  );
}
