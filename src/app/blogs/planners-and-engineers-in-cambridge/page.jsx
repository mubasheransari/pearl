import React from 'react';
import Blog from '@/container/blogs';
import { genericBlogsMeta } from '@/container/blogs/blogData';

const blogSlug = 'planners-and-engineers-in-cambridge';
const blogMeta = genericBlogsMeta[blogSlug];

export const metadata = {
  title: blogMeta?.metaTitle || "Planners and Engineers in Cambridge | Structural Design & Planning Experts UK",
  description: blogMeta?.description || "Expert planners and engineers in Cambridge offering structural design, architectural planning, and approval services for residential and commercial projects.",
  alternates: {
    canonical: '/blogs/planners-and-engineers-in-cambridge',
  },
};

export default function Page() {
  return <Blog blog={blogSlug} title={blogMeta?.title || "Designing Modern Buildings in Cambridge with Precision"} />;
}
