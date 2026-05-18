import React from 'react';
import Blog from '@/container/blogs';
import { genericBlogsMeta } from '@/container/blogs/blogData';

const blogSlug = 'architect-engineer-oxford';
const blogMeta = genericBlogsMeta[blogSlug];

export const metadata = {
  title: blogMeta?.metaTitle || "Architect Engineer Oxford | Professional Structural & Architectural Services",
  description: blogMeta?.description || "Trusted architect engineer Oxford services offering structural design, planning, and building solutions for residential and commercial projects in Oxford.",
  alternates: {
    canonical: '/blogs/architect-engineer-oxford',
  },
};

export default function Page() {
  return <Blog blog={blogSlug} title={blogMeta?.title || "Architect Engineer Oxford: Complete Design & Structural Solutions for Modern Buildings"} />;
}
