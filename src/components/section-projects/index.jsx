import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';
import Animation from '../animation';

const SectionProjects = ({ projects }) => {
  if (!projects.length) return null;

  return (
    <Animation delay={1800}>
      <Section title="Projects">
        {projects.map((project) => (
          <SummaryItem
            key={project.name}
            name={project.name}
            description={project.description}
            additionalDescription={project.additionalDescription}
            link={project.link}
          />
        ))}
      </Section>
    </Animation>
  );
};

export default SectionProjects;
