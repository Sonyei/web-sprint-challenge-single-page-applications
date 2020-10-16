import * as yup from 'yup';

export default yup.object().shape({

name: yup
    .string()
    .required('A name is required')
    .min(3, 'Name must be at least 3 characters long'),

size: yup
    .string()
    .oneOf(['small', 'medium', 'large', 'el'], 'A size is required'),

cheese: yup.boolean(),
pepp: yup.boolean(),
olive: yup.boolean(),
tomat: yup.boolean()


})