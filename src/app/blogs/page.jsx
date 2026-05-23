import React from 'react';
import Link from 'next/link';
import { genericBlogsMeta } from '@/container/blogs/blogData';

export const metadata = {
  title: 'Blogs | Pearlepp',
  description: 'Read the latest PEPP structural engineering, planning, and construction consultancy blogs.',
};

export default function BlogsPage() {
  const blogs = Object.entries(genericBlogsMeta);

  return (
    <main style={{ maxWidth: '1180px', margin: '0 auto', padding: '56px 20px' }}>
      <h1>Blogs</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '28px' }}>
        {blogs.map(([slug, meta]) => (
          <article key={slug} style={{ border: '1px solid #e7e7e7', borderRadius: '16px', padding: '20px', background: '#fff' }}>
            <h2 style={{ fontSize: '20px', marginBottom: '12px' }}><Link href={`/${slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>{meta.title}</Link></h2>
            <p style={{ color: '#555', lineHeight: 1.6 }}>{meta.description}</p>
            <Link href={`/${slug}`} style={{ display: 'inline-block', marginTop: '14px', fontWeight: 600 }}>Read blog</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
