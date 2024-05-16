import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { Address } from "@/api";
import { useAuth } from "@/hooks";
import { initialValues, validationSchema } from "./AddressForm.form";

const addressCtrl = new Address();

export function AddressForm(props) {
  const { onClose, onReload, addressId, address } = props;
    const { user } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(address),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        if (addressId) {
          await addressCtrl.update(formValue, addressId);
        } else {
          await addressCtrl.create(formValue, user.id);
        }

        formik.handleReset();
        onReload();
        onClose();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="title"
        placeholder="Titulo de la dirección"
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.errors.title}
      />

      <Form.Input
        name="address"
        placeholder="Dirección"
        value={formik.values.address}
        onChange={formik.handleChange}
        error={formik.errors.address}
      />
      <Form.Group widths="equal">
        <Form.Input
          name="firstname"
          placeholder="Nombre"
            value={formik.values.firstname}
            onChange={formik.handleChange}
            error={formik.errors.firstname}
        />
        <Form.Input
          name="lastname"
          placeholder="Apellidos"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            error={formik.errors.lastname}
        />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Input
          name="city"
          placeholder="Ciudad"
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.errors.city}
        />
        <Form.Input
          name="state"
          placeholder="Provincia"
            value={formik.values.state}
            onChange={formik.handleChange}
            error={formik.errors.state}
        />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Input
          name="postal_code"
          placeholder="Código postal"
            value={formik.values.postal_code}
            onChange={formik.handleChange}
            error={formik.errors.postal_code}
        />
        <Form.Input
          name="phone"
          placeholder="Telefono"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.errors.phone}
        />
      </Form.Group>

      <Form.Button type="submit" fluid loading={formik.isSubmitting}>Enviar</Form.Button>
    </Form>
  );
}
