import React from 'react';
import Blog from '@/container/blogs';
import { genericBlogsMeta } from '@/container/blogs/blogData';

const blogSlug = 'structural-engineer-westminster-for-modern-and-heritage-projects';
const blogMeta = genericBlogsMeta[blogSlug];

export const metadata = {
  title: blogMeta?.metaTitle || "Structural Engineer Westminster | Pearlepp",
  description: blogMeta?.description || "Structural Engineer Westminster by Pearlepp. Expert design, calculations & surveys for safe, compliant residential and commercial projects.",
  alternates: {
    canonical: '/blogs/structural-engineer-westminster-for-modern-and-heritage-projects',
  },
};

export default function Page() {
  return <Blog blog={blogSlug} title={blogMeta?.title || "Structural Engineer Westminster for Modern & Heritage Projects"} />;
}
