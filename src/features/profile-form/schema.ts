// import { yupResolver } from '@hookform/resolvers/yup';
import { zodResolver } from '@hookform/resolvers/zod';
// import * as yup from 'yup';
import { z } from 'zod';
import { titles } from './titles';

// const schema = yup
//   .object({
//     title: yup
//       .string()
//       .required()
//       .oneOf([...titles]),
//     firstName: yup
//       .string()
//       .required()
//       .matches(/^[A-Z]+$/i),
//     lastName: yup
//       .string()
//       .required()
//       .matches(/^[A-Z]+$/i),
//     email: yup.string().required().email(),
//     telephone: yup
//       .string()
//       .required()
//       .matches(/^[0-9]+$/),
//   })
//   .strict(true);

// const resolver = yupResolver(schema);

const schema = z.object({
  title: z.enum(titles),
  firstName: z.string().regex(/^[A-Z]+$/i),
  lastName: z.string().regex(/^[A-Z]+$/i),
  email: z.string().email(),
  telephone: z.string().regex(/^[0-9]+$/),
});

const resolver = zodResolver(schema);

export { schema, resolver };
