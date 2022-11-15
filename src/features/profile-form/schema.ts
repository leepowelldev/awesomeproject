import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { titles } from './titles';

const schema = yup
  .object({
    title: yup
      .string()
      .required()
      .oneOf([...titles]),
    firstName: yup
      .string()
      .required()
      .matches(/^[A-Z]+$/i),
    lastName: yup
      .string()
      .required()
      .matches(/^[A-Z]+$/i),
    email: yup.string().required().email(),
    telephone: yup
      .string()
      .required()
      .matches(/^[0-9]+$/),
  })
  .strict(true);

const resolver = yupResolver(schema);

export { schema, resolver };
