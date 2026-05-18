import React from 'react';
import Blog from '@/container/blogs';
import { genericBlogsMeta } from '@/container/blogs/blogData';

const blogSlug = 'architect-engineer-kensington';
const blogMeta = genericBlogsMeta[blogSlug];

export const metadata = {
  title: blogMeta?.metaTitle || "Architect Engineer Kensington | PEPP Design & Structural Experts",
  description: blogMeta?.description || "Architect engineer Kensington by PEPP offering bespoke design, planning, and structural solutions for safe, compliant, and high-end construction projects.",
  alternates: {
    canonical: '/blogs/architect-engineer-kensington',
  },
};

export default function Page() {
  return <Blog blog={blogSlug} title={blogMeta?.title || "Architect Engineer Kensington \u2013 Premium Design & Structural Solutions by PEPP"} />;
}
