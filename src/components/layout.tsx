import type { ReactNode } from 'react';
import React from 'react';
import { useBackHandler } from '@react-native-community/hooks';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from '@react-navigation/native';
import { Header } from './header';

type LayoutProps = {
  title: string;
  children: ReactNode;
};

function Layout({ title, children }: LayoutProps) {
  useBackHandler(() => {
    return true;
  });

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <SafeAreaView style={styles.root}>
        <Header title={title} hideBackButton />
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/Modal">Modal</Link>
        <View style={styles.container}>{children}</View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'lightgrey',
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
  },
});

export { Layout };
export type { LayoutProps };
