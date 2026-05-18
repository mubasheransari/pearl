import React from 'react';
import Blog from '@/container/blogs';
import { genericBlogsMeta } from '@/container/blogs/blogData';

const blogSlug = 'structural-engineer-southwark';
const blogMeta = genericBlogsMeta[blogSlug];

export const metadata = {
  title: blogMeta?.metaTitle || "Structural Engineer Southwark | PEPP Structural Design Experts",
  description: blogMeta?.description || "Structural engineer Southwark by PEPP offering expert design, calculations, and inspections for safe, compliant, and efficient construction projects.",
  alternates: {
    canonical: '/blogs/structural-engineer-southwark',
  },
};

export default function Page() {
  return <Blog blog={blogSlug} title={blogMeta?.title || "Structural Engineer Southwark \u2013 Expert Structural Design & Engineering Solutions"} />;
}
