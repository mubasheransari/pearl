import React from 'react';
import Blog from '@/container/blogs';
import { genericBlogsMeta } from '@/container/blogs/blogData';

const blogSlug = 'commercial-structural-engineering-company-in-london';
const blogMeta = genericBlogsMeta[blogSlug];

export const metadata = {
  title: blogMeta?.metaTitle || "Commercial Structural Engineering Company in London",
  description: blogMeta?.description || "Commercial structural engineering company in London offering expert design, analysis, and safe, cost-effective solutions for all business projects.",
  alternates: {
    canonical: '/blogs/commercial-structural-engineering-company-in-london',
  },
};

export default function Page() {
  return <Blog blog={blogSlug} title={blogMeta?.title || "Commercial Structural Engineering London Expert Solutions for Modern Construction"} />;
}
