'use client';

import React from 'react';
import Link from 'next/link';
import styles from './GenericBlog.module.scss';

const GenericBlog = ({ article }) => {
  if (!article) return null;

  const { title, description, blocks = [] } = article;

  return (
    <article className={styles.articleWrap}>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <span className={styles.kicker}>PEPP Insights</span>
          <h1>{title}</h1>
          {description ? <p className={styles.lead}>{description}</p> : null}

          <div className={styles.actions}>
            <Link href="/form" className={styles.primaryBtn}>Request a quote</Link>
            <Link href="/contact" className={styles.secondaryBtn}>Contact PEPP</Link>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.inner}>
          <div className={styles.contentCard}>
            {blocks.map((block, index) => {
              if (block.type === 'heading') {
                return <h2 key={index} className={styles.heading}>{block.text}</h2>;
              }

              if (block.type === 'list') {
                return (
                  <ul key={index} className={styles.list}>
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                );
              }

              return <p key={index} className={styles.paragraph}>{block.text}</p>;
            })}
          </div>
        </div>
      </section>
    </article>
  );
};

export default GenericBlog;
