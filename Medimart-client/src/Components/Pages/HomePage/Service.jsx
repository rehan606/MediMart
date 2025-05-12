import React from 'react';

const Section = ({ title, content }) => (
  <div className="p-6 border rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <p>{content}</p>
  </div>
);

const Service = () => {
  const sections = [
    { title: 'Therapya', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmo' },
    { title: 'Dentistry', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmo' },
    { title: 'Virusology', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmo' },
    { title: 'Pharmacology', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmo' },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sections.map((section, index) => (
          <Section key={index} title={section.title} content={section.content} />
        ))}
      </div>
    </div>
  );
};

export default Service;