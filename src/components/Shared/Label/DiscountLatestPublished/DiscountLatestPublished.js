import classNames from "classnames";
import { Cloth } from "@/api";
import { useState, useEffect } from "react";
import styles from "./DiscountLatestPublished.module.scss";

const clothCtrl = new Cloth();

export function DiscountLatestPublished(props) {
  const { className, title, limit = 9, categoryId = null } = props;
  const [cloth, setCloth] = useState(null);
  const [clothes, setClothes] = useState(null);
  

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await clothCtrl.getLatestPublished({
  //         limit,
  //         categoryId,

  //       });
  //       setClothes(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })();
  // }, []);
  
  // clothes.forEach(cloth => {
  //   console.log(cloth);
  // });

  useEffect(() => {
    (async () => {
      try {
        const response = await clothCtrl.getLastPublished();
        setCloth(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  
  if (!cloth) return null;

  // console.log(cloth.length);
  

  // const discount = clothes.attributes.discount;
  // const discountAnime = clothes.attributes.discountanniversaryanime;
  // const discountCharacter = clothes.attributes.discountanniversarycharacter;

  // const anniversaryCharacter = clothes.attributes.anniversarycharacter;
  // const fechaCharacter = new Date(anniversaryCharacter);
  // const optionsCharacter = { month: "long", day: "numeric" };

  // const anniversaryAnime = cloth.attributes.anniversaryAnime;
  // const fechaAnime = new Date(anniversaryAnime);
  // const optionsAnime = { month: "long", day: "numeric" };

  // const fechaHoy = new Date();
  // const optionsHoy = { month: "long", day: "numeric" };

  // const hoy = fechaHoy.toLocaleDateString("es-ES", optionsHoy);
  // const happyCharacter = fechaCharacter.toLocaleDateString(
  //   "es-ES",
  //   optionsCharacter
  // );
  // const happyAnime = fechaAnime.toLocaleDateString("es-ES", optionsAnime);

  // const finalDiscount =
  //   hoy === happyAnime
  //     ? discountAnime
  //     : hoy === happyCharacter
  //     ? discountCharacter
  //     : discount;


  return (
    <span
      clothes={clothes}
      className={classNames(styles.labelDiscount, { [className]: className })}
    >
      {/* {finalDiscount}% */}
      {/* {cloth.attributes.discount} */}
      {/* {hoy === happyAnime
      ? discountAnime
      : hoy === happyCharacter
      ? discountCharacter
      : discount} */}
      Holaaa
    </span>
  );
}
