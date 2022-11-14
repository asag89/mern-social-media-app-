
import * as yup from "yup"

export const registerSchema = yup.object().shape({
    username: yup.string().required("username is required").min(3).trim().lowercase().matches("^([a-z](?:(?:[a-z0-9_]|(?:.(?!.))){0,16}(?:[a-z0-9]))?)$"),
    email: yup.string().email().required("email is required"),
    password: yup.string().required("password is required").min(6)
});