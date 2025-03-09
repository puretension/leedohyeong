import { prefix } from "@/constants/prefix";

export const defaultImages = [
  {
    url: `${prefix}/images/profile.jpg`,
    width: 1200,
    height: 630,
    alt: "Dohyeong Lee",
  },
];

export const DefaultOpenGraph = {
  type: "website",
  locale: "ko_KR",
  url: "https://leedohyeong.com",
  title: "Dohyeong Lee",
  description: "Dohyeong Lee ",
  images: defaultImages,
};

export const DefaultMetadata = {
  title: "Dohyeong Lee",
  description: "Dohyeong Lee",
};
