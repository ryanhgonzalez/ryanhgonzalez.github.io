import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';
import Animation from '../animation';

const SectionEducation = ({ education }) => {
  if (!education.length) return null;

  return (
    <Animation delay={1600}>
      <Section title="Education">
        {education.map((item) => (
          <SummaryItem
            key={item.name}
            name={item.name}
            description={item.description}
            additionalDescription={item.additionalDescription}
            link={item.link}
          />
        ))}
      </Section>
    </Animation>
  );
};

export default SectionEducation;