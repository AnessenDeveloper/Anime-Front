import { useState, useEffect } from "react";
import { Container, Image } from "semantic-ui-react";
import { DateTime } from "luxon";
import Link from "next/link";
import { Cloth } from "@/api";
import { fn } from "@/utils";
import { Label, Price } from "@/components/Shared";
import styles from "./BannerLastClothPublished.module.scss";

const clothCtrl = new Cloth();


export function BannerLastClothPublished() {
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

  const wallpaper = cloth.attributes.wallpaper;
  const releaseDate = new Date(cloth.attributes.releaseDate).toISOString();

  return (
    <div className={styles.container}>
      <Image src={wallpaper.data.attributes.url} className={styles.wallpaper} />

      <Link className={styles.infoContainer} href={cloth.attributes.slug}>
        <Container>
          <span className={styles.date}>
            {DateTime.fromISO(releaseDate).minus({ days: 1 }).toRelative()}
          </span>

          <h2>{cloth.attributes.title}</h2>

          <p className={styles.price}>
            <Label.DiscountLastPublished />
            <Price />
          </p>
        </Container>
      </Link>
    </div>
  );
}
