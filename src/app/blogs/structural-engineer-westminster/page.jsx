import React from 'react';
import Blog from '@/container/blogs';
import { genericBlogsMeta } from '@/container/blogs/blogData';

const blogSlug = 'structural-engineer-westminster';
const blogMeta = genericBlogsMeta[blogSlug];

export const metadata = {
  title: blogMeta?.metaTitle || "Structural Engineer Westminster | Expert Structural Design Services London",
  description: blogMeta?.description || "Professional structural engineer in Westminster offering expert design, inspections, and consultancy for residential and commercial building projects in London.",
  alternates: {
    canonical: '/blogs/structural-engineer-westminster',
  },
};

export default function Page() {
  return <Blog blog={blogSlug} title={blogMeta?.title || "Structural Engineer Westminster \u2013 Expert Structural Design & Consultancy Services"} />;
}
