import localFont from "next/font/local";
import React from "react";

import { twMerge } from "tailwind-merge";

const AppleSDGothic = localFont({
  src: [{ path: "../../public/fonts/AppleSDGothicNeoSB.ttf" }],
  display: "swap",
});

type TypographyProps = {
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
};

export const H1 = ({ className, children, as: Tag = "h1" }: TypographyProps) => (
  <Tag className={twMerge(AppleSDGothic.className, "text-3xl md:text-4xl font-bold text-black", className)}>
    {children}
  </Tag>
);

export const H2 = ({ className, children, as: Tag = "h2" }: TypographyProps) => (
  <Tag className={twMerge(AppleSDGothic.className, "text-2xl md:text-3xl font-semibold text-black", className)}>
    {children}
  </Tag>
);

export const H3 = ({ className, children, as: Tag = "h3" }: TypographyProps) => (
  <Tag className={twMerge(AppleSDGothic.className, "text-xl md:text-2xl font-medium text-black", className)}>
    {children}
  </Tag>
);

export const H4 = ({ className, children, as: Tag = "h4" }: TypographyProps) => (
  <Tag className={twMerge(AppleSDGothic.className, "text-lg md:text-xl font-normal text-black", className)}>
    {children}
  </Tag>
);

//  본문 스타일
export const BodyText = ({ className, children, as: Tag = "p" }: TypographyProps) => (
  <Tag className={twMerge(AppleSDGothic.className, "text-base text-gray-700", className)}>{children}</Tag>
);

export const DetailText = ({ className, children, as: Tag = "span" }: TypographyProps) => (
  <Tag className={twMerge(AppleSDGothic.className, "text-sm text-gray-500", className)}>{children}</Tag>
);

export const SmallText = ({ className, children, as: Tag = "span" }: TypographyProps) => (
  <Tag className={twMerge(AppleSDGothic.className, "text-xs text-gray-500", className)}>{children}</Tag>
);
