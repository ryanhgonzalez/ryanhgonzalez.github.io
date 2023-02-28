import { Link } from 'gatsby';
import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';
import Animation from '../animation';

const SectionBlog = ({ posts }) => {
  return (
    <Animation delay={1400}>
      <Section title="Latest Posts">
        {posts.map((post) => (
          <SummaryItem
            key={post.node.fields.slug}
            name={post.node.frontmatter.title}
            additionalDescription={post.node.frontmatter.description}
            link={post.node.fields.slug}
            internal
          />
        ))}
        {posts.length >= 5 && (
          <Link className="text-gray-500 text-sm hover:text-black" to="/blog">
            View all posts &rarr;
          </Link>
        )}
      </Section>
    </Animation>
  );
};

export default SectionBlog;
