import React from 'react';
import Blog from '@/container/blogs';
import { genericBlogsMeta } from '@/container/blogs/blogData';

const blogSlug = 'engineer-and-planners-oxford-london';
const blogMeta = genericBlogsMeta[blogSlug];

export const metadata = {
  title: blogMeta?.metaTitle || "Engineer and Planners Oxford London | Structural Design & Planning Experts UK",
  description: blogMeta?.description || "Trusted engineer and planners Oxford London services providing structural design, planning approval, and architectural solutions for homes and businesses.",
  alternates: {
    canonical: '/blogs/engineer-and-planners-oxford-london',
  },
};

export default function Page() {
  return <Blog blog={blogSlug} title={blogMeta?.title || "Building Smarter Projects in Oxford & London"} />;
}
