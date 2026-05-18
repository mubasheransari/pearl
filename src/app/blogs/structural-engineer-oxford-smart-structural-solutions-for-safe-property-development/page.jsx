import React from 'react';
import Blog from '@/container/blogs';
import { genericBlogsMeta } from '@/container/blogs/blogData';

const blogSlug = 'structural-engineer-oxford-smart-structural-solutions-for-safe-property-development';
const blogMeta = genericBlogsMeta[blogSlug];

export const metadata = {
  title: blogMeta?.metaTitle || "Structural Engineer Oxford | Pearlepp",
  description: blogMeta?.description || "Structural Engineer Oxford by Pearlepp. Expert structural design, calculations & surveys for safe, compliant residential and commercial building projects.",
  alternates: {
    canonical: '/blogs/structural-engineer-oxford-smart-structural-solutions-for-safe-property-development',
  },
};

export default function Page() {
  return <Blog blog={blogSlug} title={blogMeta?.title || "Structural Engineer Oxford Smart Structural Solutions for Safe Property Development"} />;
}
