import React from "react";

const WorkExperience = () => {
  const experiences = [
    {
      title: "Flagship Store Advisor",
      company: "On Running Inc.",
      location: "Venice Beach, CA",
      dates: "Aug 2022 - Present",
      responsibilities: [
        "Embraced and communicated On’s brand values and philosophy through customer and team interactions.",
        "Delivered outstanding customer service by understanding client needs and providing tailored solutions.",
        "Maintained in-depth product knowledge, including technical specifications and sustainability initiatives, to engage and inform customers.",
        "Contributed to process improvements for customer engagement and team satisfaction.",
        "Supported inventory management, organizing inbound and outbound product orders to ensure accuracy and availability.",
        "Upheld visual standards to create a premium in-store experience.",
      ],
    },
    {
      title: "Fit Expert",
      company: "Road Runner Sports",
      location: "San Diego, CA",
      dates: "November 2019 - August 2022",
      responsibilities: [
        "Created an inviting environment to provide personalized customer service tailored to individual needs.",
        "Conducted detailed gait analyses to recommend the best footwear and custom insoles for customers’ activities.",
        "Increased revenue by promoting loyalty memberships and reward programs at point-of-sale.",
        "Fostered positive in-store experiences, driving customer satisfaction and repeat business.",
      ],
    },
    {
      title: "Market Development/Sales",
      company: "Hoen Audi",
      location: "Temecula, CA",
      dates: "March 2017 - February 2018",
      responsibilities: [
        "Collaborated in the launch of a new Audi dealership, focusing on brand development and community engagement.",
        "Designed and executed comprehensive marketing plans to drive interest and revenue growth.",
        "Analyzed sales data to optimize profit margins, adjust strategies, and forecast performance.",
        "Facilitated cross-department communication to enhance team cohesion and operational efficiency.",
      ],
    },
    {
      title: "Owner/Operator and CEO",
      company: "Omega Lean Business Solutions, Inc.",
      location: "San Diego, CA",
      dates: "Aug 2012 - March 2017",
      responsibilities: [
        "Founded and scaled a management consulting firm, achieving over $300K in gross revenue within the first two years.",
        "Developed and implemented workflows to improve productivity, reduce costs, and enhance quality.",
        "Led strategic marketing initiatives and account management for high-value clients.",
        "Collaborated with leadership and frontline teams to design processes that enhanced service and improved work environments.",
      ],
    },
    {
      title: "Business Analyst",
      company: "Quality Controlled Manufacturing, Inc.",
      location: "Santee, CA",
      dates: "January 2012 - August 2012",
      responsibilities: [
        "Supported finance and strategy projects with actionable insights through data analysis.",
        "Managed marketing resources and budgets aligned with top account goals.",
        "Developed integrated marketing campaigns to overcome client challenges and drive results.",
      ],
    },
    {
      title: "Supply Chain/Materials Manager",
      company: "Compucraft Industries",
      location: "Santee, CA",
      dates: "May 2010 - January 2012",
      responsibilities: [
        "Oversaw supply chain processes for Boeing 747-8 Dreamliner production, optimizing schedules and reducing costs.",
        "Collaborated with cross-functional teams to eliminate bottlenecks and improve productivity.",
        "Reduced production costs and enhanced quality through strategic planning and process improvements.",
      ],
    },
    {
      title: "Supply Chain Manager",
      company: "Torotel Products, Inc.",
      location: "Olathe, KS",
      dates: "August 2009 - April 2010",
      responsibilities: [
        "Directed procurement, inventory control, and logistics to streamline operations and reduce costs.",
        "Trained and mentored a team of 5-6 employees, fostering a cohesive and high-performing team environment.",
        "Implemented cost reduction strategies and process improvements to boost profitability.",
      ],
    },
    {
      title: "Procurement Specialist",
      company: "Tension Envelope Corp.",
      location: "Kansas City, MO",
      dates: "October 2007 - August 2009",
      responsibilities: [
        "Developed national purchasing contracts to optimize operations across seven plants.",
        "Conducted cost analyses and value process mapping to support business growth.",
        "Managed procurement operations, vendor negotiations, and end-to-end purchasing functions.",
      ],
    },
  ];

  return (
    <section id="work-experience" className="mt-12 mx-8">
      <div className="rounded-t-lg bg-primary text-white p-4">
        <h2 className="text-2xl font-bold">
          <span class="material-symbols-outlined mr-2">work_history</span>
          Professional Experience
        </h2>
      </div>
      <div className="bg-gray-100 p-6 rounded-b-lg grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
        {experiences.map((job, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-200 ease-in-out"
          >
            <h3 className="text-2xl font-semibold text-primary">
              <span class="material-symbols-outlined mr-2">check_box</span>
              {job.title}
            </h3>
            <p className="font-semibold text-primary mt-2 ml-2">
              {job.company} — {job.location}
            </p>
            <p className="font-semibold text-slate-600 text-sm leading-relaxed ml-2">
              {job.dates}
            </p>
            <ul className="list-disc ml-4 mt-2 text-primary text-sm">
              {job.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
