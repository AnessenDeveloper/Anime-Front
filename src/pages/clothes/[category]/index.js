import { Category, Cloth } from "@/api";

export { default } from "./category";

export async function getServerSideProps(context) {
    const { query, params } = context;
    const { page = 1 } = query;
    const { category } = params;

        const categoryCtrl = new Category();
        const responseCategory = await categoryCtrl.getBySlug(category);

        const clothCtrl = new Cloth();
        const responseCloth = await clothCtrl.getClothesByCategorySlug(category, page)

  return {
    props: {
      category: responseCategory,
      clothes: responseCloth.data,
      pagination: responseCloth.meta.pagination,
    },
  };
}
