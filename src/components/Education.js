import React from "react";

const Education = () => {
  const degrees = [
    {
      school: "Rockhurst University",
      degree: "MBA - Masters of Business Administration",
      location: "Kansas City, MO, USA",
      dates: "2007",
      description: [
        "Specializing in strategic leadership and business operations, my MBA laid the foundation for my analytical and organizational skills, enabling me to drive measurable success in complex environments."
      ]
    },
    {
      school: "University of Kansas",
      degree: "BGS - Bachelors of General Studies in Economics",
      location: "Lawrence, KS, USA",
      dates: "2005",
      description: [
        "My degree in economics sharpened my understanding of market dynamics, data analysis, and forecasting, which have been instrumental in my career."
      ]
    }
  ];

  return (
    <section id="education" className="mt-12 mx-8">
      <div className="rounded-t-lg bg-primary text-white p-4">
        <h2 className="text-2xl font-bold"><span class="material-symbols-outlined mr-2">
school
</span>Education</h2>
      </div>
      <div className="bg-gray-100 p-6 rounded-b-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {degrees.map((degree, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-200 ease-in-out">
            <h3 className="text-xl font-semibold text-primary">{degree.school}</h3>
            <p className="mt-2 font-semibold text-gray-600 text-sm">{degree.degree} — {degree.dates}</p>
            <p className="mt-1 text-gray-600 text-xs">{degree.location}</p>
            <p className="mt-2 text-gray-800 text-sm">{degree.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;