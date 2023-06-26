import React from "react";
import { useFormik } from "formik";
import style from "./Form.module.sass";
import { PatternFormat } from "react-number-format";
import { validationSchema } from "./validation";
import { useDispatch } from "react-redux";
import { orderBasket } from "../../redux/pages/basket/actions";
import { openModalBuy } from "../../redux/components/modal/actions";

export default function Form(props) {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            age: "",
            address: "",
            phone: ""
        },
        validationSchema,
        onSubmit: (values) => {
            dispatch(orderBasket())
            dispatch(openModalBuy(values))
            values.firstName = "";
            values.lastName = "";
            values.age = "";
            values.address = "";
            values.phone = ""
        },
    })
    return(
        <form onSubmit={formik.handleSubmit} className={`${style.form}`} data-testid={`form-${props.id}`}>
            <div className={`${style.title}`}>Ordering</div>
            <div><input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="FirstName"
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                onChange={formik.handleChange}>
            </input>
            {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p>:null}
            </div>
            <div><input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="LastName"
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                onChange={formik.handleChange}>
            </input>
            {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p>:null}
            </div>
            <div><input
                type="number"
                id="age"
                name="age"
                placeholder="Age"
                onBlur={formik.handleBlur}
                value={formik.values.age}
                onChange={formik.handleChange}>
            </input>
            {formik.touched.age && formik.errors.age ? <p>{formik.errors.age}</p>:null}
            </div>
            <div><input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                onBlur={formik.handleBlur}
                value={formik.values.address}
                onChange={formik.handleChange}>
            </input>
            {formik.touched.address && formik.errors.address ? <p>{formik.errors.address}</p>:null}
            </div>
            <div>
            <PatternFormat 
                format="+# (###) #### ###" 
                allowEmptyFormatting mask="_" 
                id="phone"
                name="phone"  
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                onChange={formik.handleChange}/>
            {formik.touched.phone && formik.errors.phone ? <p>{formik.errors.phone}</p>:null}
            </div>
            <button type="submit">Checkout</button>
        </form>)
}