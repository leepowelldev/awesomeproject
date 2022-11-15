import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { ProfileForm } from '../features';
import { Header, Layout } from '../components';

type ProfileScreenParamList = {};

type ProfileScreenProps = {};

function ProfileScreen() {
  useEffect(() => {
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        return true;
      }
    );
    return subscription.remove;
  }, []);

  return (
    <Layout>
      <Header title="Profile" />
      <ProfileForm />
    </Layout>
  );
}

export { ProfileScreen };
export type { ProfileScreenProps, ProfileScreenParamList };
