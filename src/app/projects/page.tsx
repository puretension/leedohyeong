import { Metadata } from "next";

import { Container } from "@/components/Container.component";
import { Products } from "@/components/Products";
import { H1 } from "@/components/Typography.component";

import Header from "../header/Header";
import { DefaultOpenGraph } from "../shared-metadata";

export const metadata: Metadata = {
  title: "이도형 - 프로젝트 & 포트폴리오",
  description: "프로젝트 & 포트폴리오 - Project & Portfolio",
  openGraph: {
    ...DefaultOpenGraph,
    url: "https://leedohyeong.com/projects",
    title: "이도형 | 도형 (Dohyeong) Lee",
    description: "프로젝트 & 포트폴리오 - Project & Portfolio",
  },
};

export default function Projects() {
  return (
    // 중앙 배치
    <div>
      <Header />
      <Container>
        <H1 className='font-black mb-10'>PROJECTS</H1>
        <div className='flex items-center mb-10'>
          <span className='text-4xl font-Tossface mr-2'>💻</span>
          <H1 className='font-black inline'>PROJECTS</H1>
        </div>
        <Products />
      </Container>
    </div>
  );
}
