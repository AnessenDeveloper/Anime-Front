import Link from "next/link";
import { map } from "lodash";
import { Label, WishlistIcon } from "@/components/Shared";
import { fn } from "@/utils";
import styles from "./GridGames.module.scss";

export function GridClothes(props) {
  const { wishlist, onReload } = props;
  return (
    <div className={styles.gridClothes}>
      {map(wishlist, (item) => {
        const cloth = item.attributes.cloth.data;
        const cover = cloth.attributes.cover.data;

        return (
          <div key={item.id} className={styles.cloth}>
            <Link href={`/${cloth.attributes.slug}`}>
              <div>
                <img src={cover.attributes.url} />

                {cloth.attributes.discount > 0 && (
                  <Label.Discount className={styles.discount}>
                    {`-${cloth.attributes.discount}%`}
                  </Label.Discount>
                )}
              </div>

              <div>
                <span>{cloth.attributes.title}</span>
                <span className={styles.price}>
                  {fn.calcDiscountedPrice(
                    cloth.attributes.price,
                    cloth.attributes.discount
                  )}
                  €
                </span>
              </div>
            </Link>

            <WishlistIcon
              clothId={cloth.id}
              className={styles.wishlistIcon}
              removeCallback={onReload}
            />
          </div>
        );
      })}
    </div>
  );
}
