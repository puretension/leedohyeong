import { Metadata } from "next";

import { getAllBlogs } from "@/function/getAllBlogs";

import { Blogs } from "@/components/Blogs";
import { Container } from "@/components/Container.component";
import { H1 } from "@/components/Typography.component";

import Header from "../header/Header";
import { DefaultOpenGraph } from "../shared-metadata";

export const metadata: Metadata = {
  title: "이도형 - 개발 블로그",
  description: "개발 블로그 - Blog",
  openGraph: {
    ...DefaultOpenGraph,
    url: "https://leedohyeong.com/blog",
    title: "이도형 | 도형 (Dohyeong) Lee",
    description: "이도형 개발 블로그 - Dohyeong LeeDevelopment Blog",
  },
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <div>
      <Header />
      <Container>
        <H1 className='font-black mb-10'>BLOG</H1>
        <div className='flex items-center mb-10'>
          <span className='text-4xl font-Tossface mr-2'>✍🏼</span>
          <H1 className='font-black inline'>BLOG</H1>
        </div>
        <Blogs blogs={data} />
      </Container>
    </div>
  );
}
