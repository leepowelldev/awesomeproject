import React, { Fragment } from 'react';
import { useMutation } from '@apollo/client';
import { Button, Text } from 'react-native';
import { useSetState } from 'rooks';
import { Layout } from '../components';
import { ADD_BOOK } from '../graphql';
import { Book } from '../components/book';

export type AboutScreenParamsList = {};

export type AboutScreenProps = {};

export function AboutScreen() {
  const [books, booksControls] = useSetState(booksToAdd);
  const [addBook, { loading }] = useMutation(ADD_BOOK, {
    refetchQueries: 'active',
    awaitRefetchQueries: true,
  });

  function composeHandleAddBook(book: { title: string; author: string }) {
    return async function handleAddBook() {
      try {
        await addBook({
          variables: {
            title: book.title,
            author: book.author,
          },
        });
        booksControls.delete(book);
      } catch (error) {
        console.log(error);
      }
    };
  }

  return (
    <Layout title="About">
      <Text>About</Text>
      {loading && <Text>Adding...</Text>}
      {Array.from(books).map((book) => (
        <Fragment key={`${book.title}:${book.author}`}>
          <Book title={book.title} author={book.author} />
          <Button onPress={composeHandleAddBook(book)} title="Add book" />
        </Fragment>
      ))}
    </Layout>
  );
}

const booksToAdd = new Set([
  {
    title: 'The Forgiven',
    author: 'James Durrant',
  },
  {
    title: 'Apples never fall',
    author: 'Liane Moriarty',
  },
  {
    title: 'Thrown',
    author: 'Sara Cox',
  },
]);
