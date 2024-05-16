import { useState } from "react";
import { Button, Container, Icon, Image, Form, Radio } from "semantic-ui-react";
import { fn } from "@/utils";
import { useCart } from "@/hooks";
import { WishlistIcon } from "@/components/Shared";
import { Size } from "../Sizes";
import { Formik } from "formik";
import styles from "./Panel.module.scss";

export function Panel(props) {
  const { clothId, cloth } = props;
  const [loading, setLoading] = useState(false);
  const { addCart } = useCart();

  const category = cloth.category.data;
  const buyPrice = fn.calcDiscountedPrice(cloth.price, cloth.discount);

  const [handleChange, setHandleChange] = useState(null);

  const addCartWrapper = () => {
    setLoading(true);
    addCart(clothId);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <Form>
      <Container className={styles.panel}>
        <div className={styles.imgContainer}>
          <Image src={cloth.cover.data.attributes.url} />
        </div>

        <div className={styles.actionsContainer}>
          <div>
            <h2>{cloth.title}</h2>

            <div className={styles.moreInfo}>
              <span>
                <Image src={category.attributes.icon.data.attributes.url} />
                {category.attributes.title}
              </span>
              <span>
                <Icon name="check" />
                En stock
              </span>
            </div>

            <div>
              <Button
                style={{
                  backgroundColor: "LightSkyBlue",
                  marginBottom: 20,
                  marginTop: -10,
                }}
              >
                {cloth.tallaxs}
              </Button>
              <Button
                style={{
                  backgroundColor: "LightSkyBlue",
                  marginBottom: 20,
                  marginTop: -10,
                }}
              >
                {cloth.tallas}
              </Button>
            </div>

            {/* <div>
              <Size />
            </div> */}

            <div className={styles.price}>
              {cloth.discount > 0 && (
                <>
                  <span className={styles.originalPrice}>
                    <Icon name="tag" />
                    {cloth.price}€
                  </span>
                  <span className={styles.discount}>-{cloth.discount}%</span>
                </>
              )}

              <span className={styles.price}>{buyPrice.toFixed(2)}€</span>
            </div>

            <Button
              type="submit"
              primary
              fluid
              onClick={addCartWrapper}
              loading={loading}
            >
              Añadir al carrito
            </Button>

            <WishlistIcon clothId={clothId} className={styles.heart} />
          </div>
        </div>
      </Container>
    </Form>
  );
}
