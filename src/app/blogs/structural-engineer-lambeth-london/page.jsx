import React from 'react';
import Blog from '@/container/blogs';
import { genericBlogsMeta } from '@/container/blogs/blogData';

const blogSlug = 'structural-engineer-lambeth-london';
const blogMeta = genericBlogsMeta[blogSlug];

export const metadata = {
  title: blogMeta?.metaTitle || "Structural Engineer Lambeth London | Expert Structural Design Services",
  description: blogMeta?.description || "Professional structural engineer in Lambeth London offering expert design, inspections, and consultancy for residential and commercial projects.",
  alternates: {
    canonical: '/blogs/structural-engineer-lambeth-london',
  },
};

export default function Page() {
  return <Blog blog={blogSlug} title={blogMeta?.title || "Structural Engineer Lambeth London Reliable Structural Engineering Solutions"} />;
}
