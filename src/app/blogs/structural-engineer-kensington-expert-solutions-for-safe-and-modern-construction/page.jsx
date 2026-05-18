import React from 'react';
import Blog from '@/container/blogs';
import { genericBlogsMeta } from '@/container/blogs/blogData';

const blogSlug = 'structural-engineer-kensington-expert-solutions-for-safe-and-modern-construction';
const blogMeta = genericBlogsMeta[blogSlug];

export const metadata = {
  title: blogMeta?.metaTitle || "Structural Engineer Kensington | Pearlepp",
  description: blogMeta?.description || "Structural Engineer Kensington by Pearlepp. Expert structural design, calculations & surveys for safe, compliant residential and commercial projects.",
  alternates: {
    canonical: '/blogs/structural-engineer-kensington-expert-solutions-for-safe-and-modern-construction',
  },
};

export default function Page() {
  return <Blog blog={blogSlug} title={blogMeta?.title || "Structural Engineer Kensington: Expert Solutions for Safe and Modern Construction"} />;
}
