'use client';

import React from 'react';
import Link from 'next/link';
import styles from './GenericBlog.module.scss';

const normalizeHref = (href = '') => {
  if (!href) return '#';

  try {
    const url = new URL(href);
    if (url.hostname === 'pearlepp.co.uk' || url.hostname === 'www.pearlepp.co.uk') {
      return `${url.pathname}${url.search}${url.hash}`;
    }
    return href;
  } catch (error) {
    return href.startsWith('/') ? href : `/${href}`;
  }
};

const isExternalHref = (href = '') => /^https?:\/\//i.test(href) && !/^https?:\/\/(www\.)?pearlepp\.co\.uk/i.test(href);

const renderLinkedTextPart = (text, linkQueues) => {
  if (!text) return text;

  const linkPhrases = Object.keys(linkQueues)
    .filter((phrase) => linkQueues[phrase]?.length)
    .sort((a, b) => b.length - a.length);

  if (!linkPhrases.length) return text;

  const lowerText = text.toLowerCase();
  let bestMatch = null;

  for (const phrase of linkPhrases) {
    const index = lowerText.indexOf(phrase.toLowerCase());
    if (index !== -1 && (!bestMatch || index < bestMatch.index || (index === bestMatch.index && phrase.length > bestMatch.phrase.length))) {
      bestMatch = { phrase, index };
    }
  }

  if (!bestMatch) return text;

  const before = text.slice(0, bestMatch.index);
  const matchedText = text.slice(bestMatch.index, bestMatch.index + bestMatch.phrase.length);
  const after = text.slice(bestMatch.index + bestMatch.phrase.length);
  const linkData = linkQueues[bestMatch.phrase].shift();
  const href = normalizeHref(linkData.href);

  return [
    before ? renderLinkedTextPart(before, linkQueues) : null,
    <Link
      key={`${bestMatch.phrase}-${href}-${linkQueues[bestMatch.phrase].length}-${bestMatch.index}`}
      href={href}
      className={styles.inlineLink}
      target={isExternalHref(linkData.href) ? '_blank' : undefined}
      rel={isExternalHref(linkData.href) ? 'noopener noreferrer' : undefined}
    >
      {matchedText}
    </Link>,
    after ? renderLinkedTextPart(after, linkQueues) : null,
  ];
};

const renderTextWithLinks = (text, linkQueues = {}) => {
  if (!text) return null;

  const parts = String(text).split(/(https?:\/\/[^\s)]+|www\.[^\s)]+|pearlepp\.co\.uk)/gi);

  return parts.map((part, index) => {
    if (/^(https?:\/\/|www\.|pearlepp\.co\.uk)/i.test(part)) {
      const originalHref = part.startsWith('http') ? part : `https://${part}`;
      const href = normalizeHref(originalHref);
      return (
        <Link
          key={`${part}-${index}`}
          href={href}
          className={styles.inlineLink}
          target={isExternalHref(originalHref) ? '_blank' : undefined}
          rel={isExternalHref(originalHref) ? 'noopener noreferrer' : undefined}
        >
          {part}
        </Link>
      );
    }

    return <React.Fragment key={`text-${index}`}>{renderLinkedTextPart(part, linkQueues)}</React.Fragment>;
  });
};

const createLinkQueues = (links = []) => {
  return links.reduce((queues, link) => {
    if (!link?.text || !link?.href) return queues;
    if (!queues[link.text]) queues[link.text] = [];
    queues[link.text].push(link);
    return queues;
  }, {});
};

const GenericBlog = ({ article }) => {
  if (!article) return null;

  const { title, description, blocks = [], links = [] } = article;
  const linkQueues = createLinkQueues(links);

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
                return <h2 key={index} className={styles.heading}>{renderTextWithLinks(block.text, linkQueues)}</h2>;
              }

              if (block.type === 'list') {
                return (
                  <ul key={index} className={styles.list}>
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{renderTextWithLinks(item, linkQueues)}</li>
                    ))}
                  </ul>
                );
              }

              return <p key={index} className={styles.paragraph}>{renderTextWithLinks(block.text, linkQueues)}</p>;
            })}
          </div>
        </div>
      </section>
    </article>
  );
};

export default GenericBlog;
