import Link from "next/link";
import { map } from "lodash";
import { fn } from "@/utils";
import { Label } from "@/components/Shared";
import styles from "./GridClothes.module.scss";
import { forEach } from "lodash";

export function GridClothes(props) {
  
  const { clothes } = props;
  
  
   clothes.forEach((element) => {

    const price = fn.calcDiscountedPrice(
      element.attributes.price,
      element.attributes.discount
    );
  
    const priceCharacter = fn.calcDiscountedPrice(
      element.attributes.price,
      element.attributes.discountanniversarycharacter
    );
  
    const priceAnime = fn.calcDiscountedPrice(
      element.attributes.price,
      element.attributes.discountanniversaryanime
    );
    
  
  
    const anniversaryCharacter = element.attributes.anniversarycharacter;
    const fechaCharacter = new Date(anniversaryCharacter);
    const optionsCharacter = { month: "long", day: "numeric" };
  
    const anniversaryAnime = element.attributes.anniversaryAnime
    const fechaAnime = new Date(anniversaryAnime);
    const optionsAnime = { month: "long", day: "numeric" };
  
    const fechaHoy = new Date();
    const optionsHoy = { month: "long", day: "numeric" };
  
    const hoy = (fechaHoy.toLocaleDateString("es-ES", optionsHoy));
    const happyCharacter = fechaCharacter.toLocaleDateString("es-ES", optionsCharacter);
    const happyAnime = fechaAnime.toLocaleDateString("es-ES", optionsAnime);
  
    const descuento =
         hoy === happyAnime ? priceAnime :
         hoy === happyCharacter ? priceCharacter : 
         price
  });

  

  

  return (
    <div className={styles.gridClothes}>
      {map(clothes, (cloth) => (
        <Link
          key={cloth.id}
          href={`/${cloth.attributes.slug}`}
          className={styles.cloth}
        >
          <div>
            <img src={cloth.attributes.cover.data.attributes.url} />
            {cloth.attributes.discount > 0 && (
              <Label.Discount className={styles.discount}>
                {`-${cloth.attributes.discount}%`}
              </Label.Discount>
            )}
            {/* <Label.DiscountLatestPublished className={styles.discount} /> */}
          </div>

          <div>
            <span>{cloth.attributes.title}</span>
            <span className={styles.price}>
              {fn.calcDiscountedPrice(
                cloth.attributes.price,
                cloth.attributes.discount
              ).toFixed(2)}
              {
                
              }
              €
            </span>
          </div>
        </Link>
      ))}
    </div>
  );

}
