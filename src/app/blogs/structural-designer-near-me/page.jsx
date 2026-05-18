import React from 'react';
import Blog from '@/container/blogs';
import { genericBlogsMeta } from '@/container/blogs/blogData';

const blogSlug = 'structural-designer-near-me';
const blogMeta = genericBlogsMeta[blogSlug];

export const metadata = {
  title: blogMeta?.metaTitle || "Structural Designer Near Me | Pearlepp",
  description: blogMeta?.description || "Structural Designer Near Me | Pearlepp offers expert structural design services ensuring safe, compliant, and efficient solutions for all projects.",
  alternates: {
    canonical: '/blogs/structural-designer-near-me',
  },
};

export default function Page() {
  return <Blog blog={blogSlug} title={blogMeta?.title || "Structural Designer Near Me Expert Engineering Solutions You Can Trust"} />;
}
