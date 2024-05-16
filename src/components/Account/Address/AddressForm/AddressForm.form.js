import * as Yup from "yup";

export function initialValues(address) {
    return {
        title: address?.title || "",
        address: address?.address || "",
        firstname: address?.firstname || "",
        lastname: address?.lastname || "",
        city: address?.city || "",
        state: address?.state || "",
        postal_code: address?.postal_code || "",
        phone: address?.phone || "",
    };
}

export function validationSchema() {
    return Yup.object({
        title: Yup.string().required(true),
        address: Yup.string().required(true),
        firstname: Yup.string().required(true),
        lastname: Yup.string().required(true),
        city: Yup.string().required(true),
        state: Yup.string().required(true),
        postal_code: Yup.number().required(true),
        phone: Yup.number().required(true).min(9, "El número de Teléfono deberá tener almenos 9 dígitos"),
    });
}