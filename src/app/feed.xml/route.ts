import { getAllBlogs } from "@/function/getAllBlogs";
import RSS from "rss";

import { DefaultMetadata, DefaultOpenGraph } from "../shared-metadata";

export async function GET() {
  const feed = new RSS({
    title: DefaultMetadata.title,
    description: DefaultMetadata.description,
    image_url: `${DefaultOpenGraph.url}/images/profile_large.jpg`,
    feed_url: `${DefaultOpenGraph.url}/feed.xml`,
    site_url: DefaultOpenGraph.url,
    copyright: `Copyright ${new Date().getFullYear().toString()}`,
    language: "ko-KR",
    pubDate: new Date().toUTCString(),
    ttl: 60,
  });

  const blogs = await getAllBlogs();

  blogs.map((post: any) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: post.url,
      date: post.date,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
