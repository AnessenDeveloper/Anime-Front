import classNames from "classnames";
import { Cloth } from "@/api";
import { useState, useEffect } from "react";
import styles from "./DiscountLastPublished.module.scss";

const clothCtrl = new Cloth();

export function DiscountLastPublished(props) {
  const { children, className } = props;

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

  const discount = cloth.attributes.discount;
  const discountAnime = cloth.attributes.discountanniversaryanime;
  const discountCharacter = cloth.attributes.discountanniversarycharacter;

  const anniversaryCharacter = cloth.attributes.anniversarycharacter;
  const fechaCharacter = new Date(anniversaryCharacter);
  const optionsCharacter = { month: "long", day: "numeric" };

  const anniversaryAnime = cloth.attributes.anniversaryAnime;
  const fechaAnime = new Date(anniversaryAnime);
  const optionsAnime = { month: "long", day: "numeric" };

  const fechaHoy = new Date();
  const optionsHoy = { month: "long", day: "numeric" };

  const hoy = fechaHoy.toLocaleDateString("es-ES", optionsHoy);
  const happyCharacter = fechaCharacter.toLocaleDateString(
    "es-ES",
    optionsCharacter
  );
  const happyAnime = fechaAnime.toLocaleDateString("es-ES", optionsAnime);

  const finalDiscount =
    hoy === happyAnime
      ? discountAnime
      : hoy === happyCharacter
      ? discountCharacter
      : discount

  return (
    <span
      className={classNames(styles.labelDiscount, { [className]: className })}
    >
      {finalDiscount}%
    </span>
  );
}
