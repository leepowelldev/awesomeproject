import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Router } from './router';
import { OfflineController } from './components/offline-controller';
import { Toast } from './components/toast';
import { ToastControllerProvider } from './contexts/toast-controller';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <GestureHandlerRootView style={styles.root}>
        <SafeAreaProvider>
          <NavigationContainer>
            <ToastControllerProvider>
              <OfflineController>
                <Router />
                <Toast />
              </OfflineController>
            </ToastControllerProvider>
          </NavigationContainer>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export { App };
