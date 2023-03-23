import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useHardwareBackButton } from '../hooks/use-hardware-back-button';

function OfflineScreen() {
  const { disable: disableHardwareBackButton } = useHardwareBackButton();

  useEffect(() => {
    disableHardwareBackButton();
  }, [disableHardwareBackButton]);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text>You are offline...</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    backgroundColor: 'rgba(100,100,100,0.6)',
  },
  container: {
    padding: 16,
    width: '90%',
    maxWidth: 400,
    borderRadius: 3,
    backgroundColor: 'white',
  },
});

export { OfflineScreen };
