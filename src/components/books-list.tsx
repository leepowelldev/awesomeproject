import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Book as BookComponent } from './book';
import type { Book } from '../types';

export type BooksListProps = {
  isLoading: boolean;
  error?: Error;
  books: Array<Book>;
};

export function BooksList({ isLoading, error, books }: BooksListProps) {
  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <View>
      {books.map((book) => {
        return (
          <View key={book.id} style={styles.container}>
            <BookComponent title={book.title} author={book.author} />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: 'grey',
    paddingVertical: 10,
  },
});
