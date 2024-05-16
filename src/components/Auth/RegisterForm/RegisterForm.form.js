import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    username: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string().email("Correo electrónico inválido").required("Campo Obligatorio"),
    username: Yup.string().min(4, "El Nombre de Usuario debe tener almenos 4 caracteres").max(15, "Máximo de 15 caracteres").required("Campo Obligatorio"),
    firstname: Yup.string().required("Campo Obligatorio").min(4, "El Nombre debe tener almenos 4 caracteres").max(15, "Máximo de 15 caracteres"),
    lastname: Yup.string().required("Campo Obligatorio").min(4, "Los Apellidos deben tener almenos 4 caracteres").max(15, "Máximo de 15 caracteres"),
    password: Yup.string().required("Campo Obligatorio").min(6, "La Contraseña debe tener almenos 6 caracteres").max(20, "Contraseña demasiado larga"),
    confirmPassword: Yup.string().required("Campo Obligatorio").oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden"),
  });
}
