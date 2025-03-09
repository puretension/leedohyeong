import { Metadata } from "next";
import { usePathname } from "next/navigation";

import { DefaultOpenGraph } from "@/app/shared-metadata";

import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "리액트 네이티브 로컬 상태 관리 최적화",
  description: "리액트 네이티브 로컬 상태 관리 최적화 방법",
  keywords: ["React Native", "useContext", "useReducer", "지역 상태 관리"],
  openGraph: {
    ...DefaultOpenGraph,
    url: "https://leedohyeong.com/blog/react-native",
    title: "리액트 네이티브 로컬 상태 관리 최적화",
    description: "리액트 네이티브 로컬 상태 관리 최적화 방법",
    images: [
      {
        url: "/blog/1-react-native-optimize-local-state-management/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "리액트 네이티브 로컬 상태 관리 최적화",
      },
    ],
  },
};

export default function Page() {
  return <Content />;
}
