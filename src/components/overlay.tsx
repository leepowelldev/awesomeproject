import React, { useEffect, useState } from 'react';
import { useBackHandler } from '@react-native-community/hooks';
import { BackHandler, Dimensions, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface OverlayProps {
  isVisible: boolean;
}

function Overlay({ isVisible }: OverlayProps) {
  const { top: safeAreaTop } = useSafeAreaInsets();

  useBackHandler(() => {
    console.log('OVERLAY HANDLER');
    return true;
  });

  return (
    <View style={[styles.root, { top: safeAreaTop * -1 }]}>
      <View style={styles.text}>
        <Text>Hello</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
});

export type { OverlayProps };
export { Overlay };
