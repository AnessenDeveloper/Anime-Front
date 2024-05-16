import * as Yup from "yup";

export function initialValues() {
    return {
        identifier: "",
        password:"",
    }
}


export function validationSchema() {
    return Yup.object({
        identifier: Yup.string().required("Campo Obligatorio"),
        password: Yup.string().required("Campo Obligatorio")
    })
}