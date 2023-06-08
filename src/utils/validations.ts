import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().email().required("Required"),
    password: yup.string().min(6).required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref("password")]).required("Required")
})

export const signInSchema = yup.object().shape({
    email: yup.string().email().required("Required"),
    password: yup.string().min(8).required("Required"),
})