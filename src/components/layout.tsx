import type { ReactNode } from 'react';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <SafeAreaView>
      <View style={styles.root}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
  },
});

export { Layout };
export type { LayoutProps };
