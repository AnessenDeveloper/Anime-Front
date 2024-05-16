import { useState, useEffect } from "react";
import { Cloth } from "@/api";
import { GridClothes } from "@/components/Shared";

const clothCtrl = new Cloth();

export function LatestClothes(props) {
  const { title, limit = 9, categoryId = null } = props;
  const [clothes, setClothes] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await clothCtrl.getLatestPublished({
          limit,
          categoryId,
        });
        setClothes(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!clothes) return null;

  return (
    <div>
      <h2>{title}</h2>
      <GridClothes clothes={clothes} />
    </div>
  );
}
