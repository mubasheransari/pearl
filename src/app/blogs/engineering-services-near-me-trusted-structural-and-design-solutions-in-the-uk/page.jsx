import React from 'react';
import Blog from '@/container/blogs';
import { genericBlogsMeta } from '@/container/blogs/blogData';

const blogSlug = 'engineering-services-near-me-trusted-structural-and-design-solutions-in-the-uk';
const blogMeta = genericBlogsMeta[blogSlug];

export const metadata = {
  title: blogMeta?.metaTitle || "Engineering Services Near Me | Pearlepp",
  description: blogMeta?.description || "Engineering services near me by PEPP offering expert structural, civil, and design solutions for safe, efficient, and compliant construction projects.",
  alternates: {
    canonical: '/blogs/engineering-services-near-me-trusted-structural-and-design-solutions-in-the-uk',
  },
};

export default function Page() {
  return <Blog blog={blogSlug} title={blogMeta?.title || "Engineering Services Near Me Trusted Structural & Design Solutions in the UK"} />;
}
