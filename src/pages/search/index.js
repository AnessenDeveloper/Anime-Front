import { Cloth } from "@/api";

export { default } from "./search";

export async function getServerSideProps(context) {
  const {
    query: { s, page = 1 },
  } = context;

  const clothCtrl = new Cloth();
  const response = await clothCtrl.searchClothes(s, page);

  return {
    props: {
      clothes: response.data,
      pagination: response.meta.pagination,
      searchText: s,
    },
  };
}
