import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  query GET_BOOKS {
    books {
      id
      title
      author
    }
  }
`;

export const ADD_BOOK = gql`
  mutation ADD_BOOK($title: String!, $author: String!) {
    addBook(title: $title, author: $author) {
      id
      title
      author
    }
  }
`;
