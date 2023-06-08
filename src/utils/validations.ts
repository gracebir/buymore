import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().email().required("Required"),
    phone: yup.string().min(10),
    password: yup.string().min(6).required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref("password")]).required("Required")
})