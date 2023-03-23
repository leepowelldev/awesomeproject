import React from 'react';
import { useQuery } from '@apollo/client';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Layout } from '../components';
import { useToast } from '../contexts/toast-controller';
import { GET_BOOKS } from '../graphql';
import { BooksList } from '../components/books-list';

export type HomeScreenParamsList = {};

export type HomeScreenProps = {};

export function HomeScreen() {
  const showToast = useToast();
  const navigation = useNavigation();
  const {
    data: queryData,
    error: queryError,
    loading: isQueryLoading,
  } = useQuery(GET_BOOKS, {
    onError(error) {
      console.error(error);
      showToast();
      navigation.navigate('Error');
    },
  });

  return (
    <Layout title="Home">
      <Text>Home</Text>
      <BooksList
        books={queryData?.books ?? []}
        isLoading={isQueryLoading}
        error={queryError}
      />
    </Layout>
  );
}
