import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';
import Animation from '../animation';

const SectionSkills = ({ skills }) => {
  return (
    <Animation delay={2000}>
      <Section title="Skills">
        {skills.map((skill) => (
          <SummaryItem
            key={skill.name}
            name={skill.name}
            description={skill.description}
            additionalDescription={skill.additionalDescription}
          />
        ))}
      </Section>
    </Animation>
  );
};

export default SectionSkills;
