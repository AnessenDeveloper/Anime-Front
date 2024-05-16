import { BasicLayout } from "@/layouts";
import { Cloth } from "@/components/Cloth";
import { Separator, Seo } from "@/components/Shared";

export default function ClothPage(props) {
  const { cloth } = props;

  const wallpaper = cloth.attributes.wallpaper;

  return (
    <>
      <Seo
        title={cloth.attributes.title}
        description={cloth.attributes.summary}
      />
      <BasicLayout>
        <Cloth.HeaderWallpaper image={wallpaper.data.attributes.url} />
        <Cloth.Panel clothId={cloth.id} cloth={cloth.attributes} />

        <Separator height={50} />

        <Cloth.Info cloth={cloth.attributes} />

        <Separator height={30} />

        <Cloth.Media
          video={cloth.attributes.video}
          screenshots={cloth.attributes.screenshots.data}
        />

        <Separator height={50} />
      </BasicLayout>
    </>
  );
}
