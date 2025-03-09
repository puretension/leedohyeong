import { Metadata } from "next";
import { redirect } from "next/navigation";

import { DefaultMetadata, DefaultOpenGraph } from "@/app/shared-metadata";
import { products } from "@/constants/products";
import { Product } from "@/types/products";

import { Container } from "@/components/Container.component";
import { SingleProduct } from "@/components/Product";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug) as Product | undefined;

  if (product) {
    return {
      title: `이도형 | ${product.title}`,
      description: product.description,
      openGraph: {
        title: `이도형 | ${product.title}`,
        description: product.description,
        images: [
          {
            url: product.thumbnail.src,
            width: 1200,
            height: 630,
            alt: product.title,
          },
        ],
      },
    };
  } else {
    return {
      ...DefaultMetadata,
      openGraph: DefaultOpenGraph,
    };
  }
}

export default function SingleProjectPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    redirect("/portfolio");
  }
  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  );
}
