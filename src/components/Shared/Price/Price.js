import { Cloth } from "@/api";
import { fn } from "@/utils";
import { useState, useEffect } from "react";
import styles from "./Price.module.scss";

const clothCtrl = new Cloth();

export function Price() {
  const [cloth, setCloth] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await clothCtrl.getLastPublished();
        setCloth(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!cloth) return null;

  const price = fn.calcDiscountedPrice(
    cloth.attributes.price,
    cloth.attributes.discount
  );

  const priceCharacter = fn.calcDiscountedPrice(
    cloth.attributes.price,
    cloth.attributes.discountanniversarycharacter
  );

  const priceAnime = fn.calcDiscountedPrice(
    cloth.attributes.price,
    cloth.attributes.discountanniversaryanime
  );
  


  const anniversaryCharacter = cloth.attributes.anniversarycharacter;
  const fechaCharacter = new Date(anniversaryCharacter);
  const optionsCharacter = { month: "long", day: "numeric" };

  const anniversaryAnime = cloth.attributes.anniversaryAnime
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

  return (
    <div>
       <span className={styles.finalPrice}>{descuento.toFixed(2)}€</span>
    </div>
  );
}
