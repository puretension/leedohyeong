import { prefix } from "@/constants/prefix";

export const defaultImages = [
  {
    url: `${prefix}/images/profile.jpg`,
    width: 1200,
    height: 630,
    alt: "LeeDohyeong",
  },
];

export const DefaultOpenGraph = {
  type: "website",
  locale: "ko_KR",
  url: "https://leedohyeong.com",
  title: "이도형 | 도형 (Dohyeong) Lee",
  description: "이도형 | LeeDohyeong",
  images: defaultImages,
};

export const DefaultMetadata = {
  title: "이도형 | 도형 (Dohyeong) Lee",
  description: "이도형 | LeeDohyeong",
};
