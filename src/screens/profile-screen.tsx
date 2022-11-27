import React from 'react';
import { ProfileForm } from '../features';
import { Header, Layout } from '../components';

type ProfileScreenParamList = {};

type ProfileScreenProps = {};

function ProfileScreen() {
  return (
    <Layout>
      <Header title="Profile" />
      <ProfileForm />
    </Layout>
  );
}

export { ProfileScreen };
export type { ProfileScreenProps, ProfileScreenParamList };
