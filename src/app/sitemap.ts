import type { MetadataRoute } from "next";

import { products } from "../constants/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = products.map((project) => ({
    url: `https://leedohyeong.com/projects/${project.slug}`,
    lastModified: new Date(project.modified_at),
    changeFrequency: "weekly",
    priority: 0.8,
  })) as MetadataRoute.Sitemap;

  return [
    {
      url: "https://leedohyeong.com/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://leedohyeong.com/info",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://leedohyeong.com/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projects,
    {
      url: "https://leedohyeong.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
