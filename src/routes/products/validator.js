import * as yup from 'yup';

const locationSchema = yup.object({
  city: yup.string().required(),
  state: yup
    .string()
    .matches(/^[A-Z]{2}$/)
    .required(),
});

const productSchema = yup.object({
  name: yup.string().required(),
  description: yup.string(),
  price: yup.number().positive().required(),
  category: yup.string().required(),
  subCategory: yup
    .string()
    .when('category', {
      is: 'sporting goods',
      then: yup.string().required(),
    })
    .when('category', {
      is: 'electronics',
      then: yup.string().required(),
    }),
  locations: yup.array().of(locationSchema),
});

export default productSchema;
