import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Cloth } from "@/api";
import { CartLayout } from "@/layouts";
import { useCart } from "@/hooks";
import { Cart } from "@/components/Cart";
import { Seo } from "@/components/Shared";

const clothCtrl = new Cloth();

export default function CartPage() {
  const {
    query: { step = 1 },
  } = useRouter();
  const currentStep = Number(step);
  const [clothes, setClothes] = useState(null);
  const { cart } = useCart();

  useEffect(() => {
    (async () => {
      try {
        const data = [];
        for await (const item of cart) {
          const response = await clothCtrl.getClothById(item.id);
          data.push({ ...response.data, quantity: item.quantity });
        }
        setClothes(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [cart]);

  return (
    <>
      <Seo title="Carrito" />
      <CartLayout>
        {currentStep === 1 && <Cart.StepOne clothes={clothes} />}
        {currentStep === 2 && <Cart.StepTwo clothes={clothes} />}
        {currentStep === 3 && <Cart.StepThree />}
      </CartLayout>
    </>
  );
}
