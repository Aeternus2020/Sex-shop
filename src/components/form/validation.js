import * as Yup from 'yup';

export const validationSchema = Yup.object({
    firstName: Yup.string()
        .min(2, "Min 2 letters required")
        .max(15, "Max 15 letters allowed")
        .required("This field is required!"),
    lastName: Yup.string()
        .min(2, "Min 2 letters required")
        .max(15, "Max 15 letters allowed")
        .required("This field is required!"),
    age: Yup.number()
        .min(2, "Min 2 letters required")
        .max(120, "Maximum 120 years")
        .positive("Age cannot be a negative number")
        .integer("The number must be an integer")
        .required("This field is required!"),
    address: Yup.string()
        .min(2, "Min 2 letters required")
        .max(100, "Max 100 letters allowed")
        .required("This field is required!"),
    phone: Yup.string()
        .matches(/^\+?[0-9]+\s?\(\d{3}\)\s?\d{4}\s?\d{3}$/, "Invalid phone number")
        .required("This field is required!"),
})
