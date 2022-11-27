import React, { useState } from 'react';
import { Link } from '@react-navigation/native';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Header, Layout } from '../components';

type HomeScreenParamList = {};

type HomeScreenProps = {};

function HomeScreen() {
  const [isModal1Visible, setIsModal1Visible] = useState(false);
  const [isModal2Visible, setIsModal2Visible] = useState(false);

  const handleShowModals = () => {
    setIsModal1Visible(true);

    setTimeout(() => {
      setIsModal1Visible(false);
      setIsModal2Visible(true);

      setTimeout(() => {
        setIsModal2Visible(false);
      }, 5000);
    }, 5000);
  };

  return (
    <Layout>
      <Header title="Home" hideBackButton />

      <Link to="/Profile">Profile</Link>
      <Link to="/Modal">React Navigation Screen Modal</Link>

      <View style={styles.buttonContainer}>
        <Button title="Show modals" onPress={handleShowModals} />
      </View>

      <Modal animationType="fade" transparent={true} visible={isModal1Visible}>
        <SafeAreaProvider>
          <SafeAreaView style={styles.root}>
            <View style={styles.container}>
              <Text>Modal 1</Text>
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      </Modal>
      <Modal animationType="fade" transparent={true} visible={isModal2Visible}>
        <SafeAreaProvider>
          <SafeAreaView style={styles.root}>
            <View style={styles.container}>
              <Text>Modal 2</Text>
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      </Modal>
    </Layout>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(100,100,100,0.6)',
  },
  container: {
    backgroundColor: 'white',
    padding: 20,
  },
  buttonContainer: {
    marginTop: 40,
  },
});

export { HomeScreen };
export type { HomeScreenProps, HomeScreenParamList };
