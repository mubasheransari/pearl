import React from 'react';
import Blog from '@/container/blogs';
import { genericBlogsMeta } from '@/container/blogs/blogData';

export async function generateMetadata({ params }) {
  const blogMeta = genericBlogsMeta[params.blog];
  return {
    title: blogMeta?.metaTitle || blogMeta?.title || 'Blog | Pearlepp',
    description: blogMeta?.description || 'Pearlepp blog article.',
    alternates: { canonical: `/blogs/${params.blog}` },
  };
}

export default function Page({ params }) {
  const blogMeta = genericBlogsMeta[params.blog];
  return <Blog blog={params.blog} title={blogMeta?.title} />;
}
