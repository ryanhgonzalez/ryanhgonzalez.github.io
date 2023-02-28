import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';
import Animation from '../animation';

const SectionExperience = ({ experience }) => {
  if (!experience.length) return null;

  return (
    <Animation delay={1200}>
      <Section title="Experience">
        {experience.map((item) => (
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

export default SectionExperience;
