import { Metadata } from "next";
import { usePathname } from "next/navigation";

import { DefaultOpenGraph } from "@/app/shared-metadata";

import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "리액트 네이티브 - 이도형 블로그",
  description: "리액트 네이티브 관련 개발 블로그 글 모음",
  keywords: ["React Native", "모바일 앱 개발"],
  openGraph: {
    ...DefaultOpenGraph,
    url: "https://leedohyeong.com/blog/react-native",
    title: "리액트 네이티브 - 이도형 블로그",
    description: "리액트 네이티브 관련 개발 블로그 글 모음",
    images: [
      {
        url: "https://leedohyeong.com/api/og?path=/blog/react-native",
        width: 1200,
        height: 630,
        alt: "리액트 네이티브 - 이도형 블로그",
      },
    ],
  },
};

export default function Page() {
  return <Content />;
}
