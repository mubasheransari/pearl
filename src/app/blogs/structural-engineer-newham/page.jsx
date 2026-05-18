import React from 'react';
import Blog from '@/container/blogs';
import { genericBlogsMeta } from '@/container/blogs/blogData';

const blogSlug = 'structural-engineer-newham';
const blogMeta = genericBlogsMeta[blogSlug];

export const metadata = {
  title: blogMeta?.metaTitle || "Structural Engineer Newham | PEPP Structural Design Experts",
  description: blogMeta?.description || "Structural engineer Newham by PEPP offering expert design, calculations, and inspections for safe, compliant, and efficient construction projects.",
  alternates: {
    canonical: '/blogs/structural-engineer-newham',
  },
};

export default function Page() {
  return <Blog blog={blogSlug} title={blogMeta?.title || "Structural Engineer Newham \u2013 Expert Structural Design & Engineering Solutions"} />;
}
