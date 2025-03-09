"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { formatDate } from "@/function/formatDate";

import { Container } from "./Container.component";
import { Paragraph } from "./Paragraph";
import { Prose } from "./Prose";
import { H1 } from "./Typography.component";

function ArrowLeftIcon(props: any) {
  return (
    <svg viewBox='0 0 16 16' fill='none' aria-hidden='true' {...props}>
      <path
        d='M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

// export function BlogLayout({ children, meta, isRssFeed = false, previousPathname }: any) {
//   let router = useRouter();

//   return (
//     <Container>
//       <article>
//         <header className='flex flex-col'>
//           <Link
//             type='button'
//             href='/blog'
//             aria-label='Go back to articles'
//             className='group mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition  '
//           >
//             <ArrowLeftIcon className='h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 d' />
//           </Link>

//           <H1 className=' py-4'>{meta.title}</H1>
//           <time dateTime={meta.date} className='flex items-center text-base text-zinc-400 '>
//             <Paragraph className=' text-gray-700'>{formatDate(meta.date)}</Paragraph>
//           </time>
//         </header>
//         <Prose className='mt-8'>{children}</Prose>
//       </article>
//     </Container>
//   );
// }

// ... existing code ...

export function BlogLayout({ children, meta, isRssFeed = false, previousPathname }: any) {
  let router = useRouter();

  return (
    <Container>
      <article>
        <header className='flex flex-col'>
          <div className='flex items-center mb-4'>
            <Link
              type='button'
              href='/blog'
              aria-label='Go back to articles'
              className='group flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition mr-2'
            >
              <ArrowLeftIcon className='h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 d' />
            </Link>

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
  );
}
