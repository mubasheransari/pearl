import React from 'react';
import Blog from '@/container/blogs';
import { genericBlogsMeta } from '@/container/blogs/blogData';

const blogSlug = 'planners-and-engineers-kensington';
const blogMeta = genericBlogsMeta[blogSlug];

export const metadata = {
  title: blogMeta?.metaTitle || "Planners and Engineers Kensington | Structural & Architectural Design Experts",
  description: blogMeta?.description || "Professional planners and engineers Kensington services offering structural design, architectural planning, and approval support for UK residential and commercial projects.",
  alternates: {
    canonical: '/blogs/planners-and-engineers-kensington',
  },
};

export default function Page() {
  return <Blog blog={blogSlug} title={blogMeta?.title || "High-End Construction Planning in Kensington \u2013 Structural & Design Expertise"} />;
}
