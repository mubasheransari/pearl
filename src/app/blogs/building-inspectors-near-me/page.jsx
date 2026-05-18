import React from 'react';
import Blog from '@/container/blogs';
import { genericBlogsMeta } from '@/container/blogs/blogData';

const blogSlug = 'building-inspectors-near-me';
const blogMeta = genericBlogsMeta[blogSlug];

export const metadata = {
  title: blogMeta?.metaTitle || "Building Inspectors Near Me | Pearlepp",
  description: blogMeta?.description || "Building inspectors near me by Pearlepp offering expert structural inspections, safety checks, and compliant property assessments across the UK.",
  alternates: {
    canonical: '/blogs/building-inspectors-near-me',
  },
};

export default function Page() {
  return <Blog blog={blogSlug} title={blogMeta?.title || "Building Inspectors Near Me Professional Property Inspection & Structural Safety Services"} />;
}
