import React from 'react';
import Blog from '@/container/blogs';
import { genericBlogsMeta } from '@/container/blogs/blogData';

const blogSlug = 'structural-engineer-kensington';
const blogMeta = genericBlogsMeta[blogSlug];

export const metadata = {
  title: blogMeta?.metaTitle || "Structural Engineer Kensington | Expert Structural Engineering Services London",
  description: blogMeta?.description || "Trusted structural engineer in Kensington offering safe, compliant, and innovative structural design, inspections, and consultancy for residential & commercial projects.",
  alternates: {
    canonical: '/blogs/structural-engineer-kensington',
  },
};

export default function Page() {
  return <Blog blog={blogSlug} title={blogMeta?.title || "Structural Engineer Kensington \u2013 Expert Structural Design & Consultancy"} />;
}
