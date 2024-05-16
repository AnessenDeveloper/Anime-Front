import { Container } from "semantic-ui-react";
import { size } from "lodash";
import { BasicLayout } from "@/layouts";
import {
  GridClothes,
  Separator,
  NoResult,
  Pagination,
  Seo,
} from "@/components/Shared";

export default function CategoryPage(props) {
  const { clothes, category, pagination } = props;
  const hasProducts = size(clothes) > 0;

  return (
    <>
      <Seo title={`Prendas de ${category.attributes.title}`} />
      <BasicLayout relative>
        <Container>
          <Separator height={50} />

          <h2>{category.attributes.title}</h2>

          {hasProducts ? (
            <>
              <GridClothes clothes={clothes} />
              <Separator height={30} />
              <Pagination
                currentPage={pagination.page}
                totalPages={pagination.pageCount}
              />
            </>
          ) : (
            <NoResult
              text={`La categoria ${category.attributes.title} aun no tiene productos`}
            />
          )}

          <Separator height={100} />
        </Container>
      </BasicLayout>
    </>
  );
}