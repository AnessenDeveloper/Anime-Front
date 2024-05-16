import { Container } from "semantic-ui-react";
import { BasicLayout } from "@/layouts";
import { Home } from "@/components/Home";
import { Separator, BarTrust, BannerAd, Seo } from "@/components/Shared";

const categoriesId = {
  sudaderas: 1,
  camisetas: 2,
  calcetines: 3,
  sport: 4,
};

export default function HomePage() {
  return (
    <>
      <Seo />
      <BasicLayout>
        <Home.BannerLastClothPublished />
        <Separator height={100} />
        <Container>
          <Home.LatestClothes title="Ultimos lanzamientos" />
        </Container>
        <Separator height={100} />

        <BarTrust />

        <Separator height={100} />

        <Container>
          <Home.LatestClothes
            title="Sudaderas"
            limit={3}
            categoryId={categoriesId.sudaderas}
          />
        </Container>

        <Separator height={100} />

        <BannerAd
          title="Registrate y obtén los mejores precios"
          subtitle="Compara elige tu prenda favorita"
          btnTitle="Entrar Ahora"
          btnLink="/account"
          image="/images/img01.png"
        />

        <Separator height={100} />

        <Container>
          <Home.LatestClothes
            title="Calcetines"
            limit={3}
            categoryId={categoriesId.calcetines}
          />
        </Container>

        <Separator height={50} />
      </BasicLayout>
    </>
  );
}
