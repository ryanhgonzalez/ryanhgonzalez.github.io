import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';
import Animation from '../animation'

const BlogPosts = ({ posts }) => {
  return (
    <Animation delay={1000}>
      <Section title="All Blog Posts">
        {posts.map((post) => (
          <SummaryItem
            key={post.node.fields.slug}
            name={post.node.frontmatter.title}
            additionalDescription={post.node.frontmatter.description}
            link={post.node.fields.slug}
            internal
          />
        ))}
      </Section>
    </Animation>
  );
};

export default BlogPosts;
