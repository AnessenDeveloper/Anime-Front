import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    repeatEmail: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string().email(true).required("Campo Obligatorio"),
    repeatEmail: Yup.string()
      .email(true)
      .required("Campo Obligatorio")
      .oneOf([Yup.ref("email")], "Los emails no coinciden"),
  });
}
