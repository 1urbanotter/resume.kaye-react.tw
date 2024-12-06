import React from 'react';

function About() {
  return (
    <section id="about" className="bg-gray-100 mx-8 mb-8 shadow-lg rounded-lg">
      <div className="rounded-t-lg bg-primary text-white p-4">
        <h2 className="text-2xl font-bold">Get to Know Me</h2>
      </div>
      <div className="p-6">
        <p className="text-md text-gray-700 leading-relaxed">
          Welcome! I’m Gregory K. Azevedo, a driven professional with a rich and diverse background spanning business management, supply chain optimization, retail operations, and customer engagement. As a United States Navy Veteran, I bring discipline, integrity, and strategic thinking to every role. I thrive on creating efficient workflows, leading high-performing teams, and delivering exceptional results.
        </p>
        <p className="mt-4 text-md text-gray-700 leading-relaxed">
          With an MBA from Rockhurst University and over a decade of experience in industries ranging from aerospace to retail, I excel at problem-solving, process improvement, and fostering strong client relationships. My commitment to professional excellence and continuous growth drives me to take on challenges and exceed expectations.
        </p>
        <p className="mt-4 text-md text-gray-700 leading-relaxed">
        When I’m not refining operations or building teams, you can find me engaging with innovative brands, exploring sustainable practices, and connecting with others who share my passion for growth and excellence.
        </p>
      </div>
    </section>
  );
}

export default About;