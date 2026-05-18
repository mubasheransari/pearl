import React from 'react';
import Blog from '@/container/blogs';
import { genericBlogsMeta } from '@/container/blogs/blogData';

const blogSlug = 'commercial-building-structural-design';
const blogMeta = genericBlogsMeta[blogSlug];

export const metadata = {
  title: blogMeta?.metaTitle || "Commercial Building Structural Design | Pearlepp",
  description: blogMeta?.description || "Commercial building structural design by Pearlepp ensuring safe, durable, and cost-efficient solutions for modern, high-performance structures.",
  alternates: {
    canonical: '/blogs/commercial-building-structural-design',
  },
};

export default function Page() {
  return <Blog blog={blogSlug} title={blogMeta?.title || "Smart Structural Planning for Commercial Buildings That Last"} />;
}
