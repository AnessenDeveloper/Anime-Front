import { Cloth } from "@/api";

export { default } from "./cloth";

export async function getServerSideProps(context) {
  const {
    params: { cloth },
  } = context;

  const clothCtrl = new Cloth();
  const response = await clothCtrl.getBySlug(cloth);

  return {
    props: {
      cloth: response,
    },
  };
}
