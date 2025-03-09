"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Header from "@/app/header/Header";
import { formatDate } from "@/function/formatDate";

import { Container } from "./Container.component";
import { Paragraph } from "./Paragraph";
import { Prose } from "./Prose";
import { H1 } from "./Typography.component";

export function BlogLayout({ children, meta, isRssFeed = false, previousPathname }: any) {
  let router = useRouter();

  return (
    <>
      <Header />
      <Container>
        <article>
          <header className='flex flex-col'>
            <div className='flex items-center mb-4'>
              {meta.category && (
                <Link
                  href={`/blog/category/${meta.category.toLowerCase()}`}
                  className='text-sm px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 hover:bg-zinc-200 transition'
                >
                  {meta.category}
                </Link>
              )}
            </div>

            <H1 className='py-4'>{meta.title}</H1>
            <time dateTime={meta.date} className='flex items-center text-base text-zinc-400 '>
              <Paragraph className='text-gray-700'>{formatDate(meta.date)}</Paragraph>
            </time>
          </header>
          <Prose className='mt-8'>{children}</Prose>
        </article>
      </Container>
    </>
  );
}
