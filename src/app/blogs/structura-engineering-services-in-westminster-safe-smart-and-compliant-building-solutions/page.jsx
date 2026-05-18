import React from 'react';
import Blog from '@/container/blogs';
import { genericBlogsMeta } from '@/container/blogs/blogData';

const blogSlug = 'structura-engineering-services-in-westminster-safe-smart-and-compliant-building-solutions';
const blogMeta = genericBlogsMeta[blogSlug];

export const metadata = {
  title: blogMeta?.metaTitle || "Structural Engineering Services in Westminster | Pearlepp",
  description: blogMeta?.description || "Structural Engineering Services in Westminster by Pearlepp. Expert design, calculations & surveys for safe, compliant residential and commercial projects.",
  alternates: {
    canonical: '/blogs/structura-engineering-services-in-westminster-safe-smart-and-compliant-building-solutions',
  },
};

export default function Page() {
  return <Blog blog={blogSlug} title={blogMeta?.title || "Structural Engineering Services in Westminster: Safe, Smart & Compliant Building Solutions"} />;
}
