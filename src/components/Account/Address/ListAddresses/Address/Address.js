import { useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import { Address as AddressCtrl } from "@/api";
import { BasicModal, Confirm } from "@/components/Shared";
import { AddressForm } from "../../AddressForm";
import styles from "./Address.module.scss";

const addressCtrl = new AddressCtrl();

export function Address(props) {
  const { addressId, address, onReload } = props;
  const [showEdit, setShowEdit] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const openCloseEdit = () => setShowEdit((prevState) => !prevState);
  const openCloseConfirm = () => setShowConfirm((prevState) => !prevState);

  const onDelete = async () => {
    try {
        await addressCtrl.delete(addressId);
        onReload();
    } catch (error) {
        console.error(error);
    }
  }

  return (
    <>
      <div className={styles.address}>
        <div>
          <p className={styles.title}>{address.title}: </p>
          <p className={styles.addressInfo}>
             {address.address}, {address.firstname} {address.lastname},{" "}
            {address.city}, {address.state}, {address.postal_code}
          </p>
        </div>

        <div className={styles.actions}>
          <Button primary icon onClick={openCloseEdit}>
            <Icon name="pencil" />
          </Button>
          <Button primary icon onClick={openCloseConfirm}>
            <Icon name="delete" />
          </Button>
        </div>
      </div>

      <Confirm 
        open={showConfirm}
        onCancel={openCloseConfirm}
        onConfirm={onDelete}
        content="¿ Quieres eliminar esta dirección ?"
        cancelButton="Volver atrás"
        confirmButton="Eliminar dirección"
      />

      <BasicModal
        show={showEdit}
        onClose={openCloseEdit}
        title="Editar dirección"
      >
        <AddressForm onClose={openCloseEdit} onReload={onReload} addressId={addressId} address={address} />
      </BasicModal>
    </>
  );
}
