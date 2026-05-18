import React from 'react';
import Blog from '@/container/blogs';
import { genericBlogsMeta } from '@/container/blogs/blogData';

const blogSlug = 'structural-engineer-cambridge-uk-smart-engineering-for-safe-and-long-lasting-buildings';
const blogMeta = genericBlogsMeta[blogSlug];

export const metadata = {
  title: blogMeta?.metaTitle || "Structural Engineer Cambridge UK | Pearlepp",
  description: blogMeta?.description || "Structural Engineer Cambridge UK by Pearlepp. Expert structural design, calculations & surveys for safe, compliant residential and commercial projects.",
  alternates: {
    canonical: '/blogs/structural-engineer-cambridge-uk-smart-engineering-for-safe-and-long-lasting-buildings',
  },
};

export default function Page() {
  return <Blog blog={blogSlug} title={blogMeta?.title || "Structural Engineer Cambridge UK Smart Engineering for Safe & Long-Lasting Buildings"} />;
}
