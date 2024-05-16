import * as Yup from "yup";

export function initialValues() {
  return {
    password: "",
    repeatPassword: "",
  };
}

export function validationSchema() {
  return Yup.object({
    password: Yup.string().required("Campo Obligatorio").min(6, "La contraseña debe tener almenos 6 caracteres"),
    repeatPassword: Yup.string()
      .required("Campo Obligatorio")
      .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
  });
}
