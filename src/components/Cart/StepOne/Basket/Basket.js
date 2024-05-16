import { Icon, Image, Dropdown } from "semantic-ui-react";
import { map } from "lodash";
import { fn } from "@/utils";
import { useCart } from "@/hooks";
import styles from "./Basket.module.scss";

export function Basket(props) {
  const { clothes } = props;
  const { changeQuantityItem, deleteItem } = useCart();

  const options = Array.from({ length: 100 }, (_, index) => {
    const number = index + 1;
    return { key: number, text: String(number), value: number };
  });

  return (
    <div className={styles.basket}>
      <h2>Cesta</h2>

      <div className={styles.block}>
        {map(clothes, (cloth) => (
          <div key={cloth.id} className={styles.product}>
            <Image src={cloth.attributes.cover.data.attributes.url} />
            <div>
              <div className={styles.info}>
                <div>
                  <p>{cloth.attributes.title}</p>
                  <p>{cloth.attributes.category.data.attributes.title}</p>
                </div>
                <Icon name="trash alternate online" link onClick={() => deleteItem(cloth.id)} />
              </div>

              <div className={styles.quantity}>
                <Dropdown
                  className="number"
                  options={options}
                  selection
                  value={cloth.quantity}
                  compact
                  onChange={(_, data) =>
                    changeQuantityItem(cloth.id, data.value)
                  }
                />
                <span>
                  {fn.calcDiscountedPrice(
                    cloth.attributes.price,
                    cloth.attributes.discount
                  )}
                  €
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
