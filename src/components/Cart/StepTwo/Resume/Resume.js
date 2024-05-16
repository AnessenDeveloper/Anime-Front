import { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
import { forEach, map } from "lodash";
import { Cart } from "@/api";
import { useAuth, useCart } from "@/hooks";
import { fn } from "@/utils";
import styles from "./Resume.module.scss";

const cartCtrl = new Cart();

export function Resume(props) {
  const { clothes, addressSelected } = props;
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elemets = useElements();
  const { user } = useAuth();
  const { deleteAllItems } = useCart();
  const router = useRouter();

  useEffect(() => {
    let totalTemp = 0;

    forEach(clothes, (cloth) => {
      const price = fn.calcDiscountedPrice(
        cloth.attributes.price,
        cloth.attributes.discount
      );
      totalTemp += price * cloth.quantity;
    });

    setTotal(totalTemp.toFixed(2));
  }, [clothes]);

  const onPay = async () => {
    setLoading(true);

    if (!stripe || !elemets) {
      setLoading(false);
      return;
    }

    const cardElement = elemets.getElement(CardElement);
    const result = await stripe.createToken(cardElement);

    if (result.error) {
      console.error(result.error.message);
    } else {
      const response = await cartCtrl.paymentCart(
        result.token,
        clothes,
        user.id,
        addressSelected
      );

      if(response.status === 200) {
        deleteAllItems();
        goToStepEnd();
      } else {
        console.error("ERROR AL REALIZAR EL PEDIDO")
      }
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const goToStepEnd = () => {
    router.replace({ query: { ...router.query, step: 3 } });
  };

  if (!total) return null;

  return (
    <div className={styles.resume}>
      <h2>Resumen</h2>

      <div className={styles.block}>
        <div className={styles.products}>
          {map(clothes, (cloth) => (
            <div key={cloth.id} className={styles.product}>
              <div>
                <p>{cloth.attributes.title}</p>
                <span>{cloth.attributes.category.data.attributes.title}</span>
              </div>
              <span>
                {cloth.quantity > 0 && `${cloth.quantity}x`}
                {fn.calcDiscountedPrice(
                  cloth.attributes.price,
                  cloth.attributes.discount
                )}
                €
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.blockTotal}>
        <div>
          <span>Total</span>
          <span>{total}€</span>
        </div>
        <Button
          primary
          fluid
          disabled={!addressSelected}
          onClick={onPay}
          loading={loading}
        >
          Pagar
        </Button>
      </div>
    </div>
  );
}
