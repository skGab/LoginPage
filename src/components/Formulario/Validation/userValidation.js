import * as yup from "yup";

const userSchema = yup.object().shape({
  password: yup
    .string()
    .min(4, "The password cannot be less than 4 characters")
    .max(20)
    .required("The password fild cannot be empty"),
  email: yup
    .string()
    .email("Needs to be a valid email")
    .required("The email fild cannot be empty"),
});

export default userSchema;
