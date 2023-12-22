import { Image } from "@mantine/core";

export const ImageHolder = ({
  src,
  height,
  width,
}: {
  src: string;
  height?: string;
  width: string;
}) => {
  return (
    <Image
      src={src}
      height={
        // If height is 'full, then dont use rem
        height?.replace(/\s/g, "") === "full"
          ? height?.replace(/\s/g, "")
          : height?.replace(/\s/g, "") + "rem"
      }
      width={
        // If width is 'full, then dont use rem
        width?.replace(/\s/g, "") === "full"
          ? width?.replace(/\s/g, "")
          : width?.replace(/\s/g, "") + "rem"
      }
      fallbackSrc="https://placehold.co/600x400?text=Placeholder"
      fit="contain"
    />
  );
};
