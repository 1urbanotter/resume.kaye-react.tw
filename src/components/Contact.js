import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-lg mb-4">Email: <a href="mailto:gk.hoschazevedo@gmail.com" className="text-blue-600">gk.hoschazevedo@gmail.com</a></p>
        <p className="text-lg">Phone: <a href="tel:+16195978946" className="text-blue-600">(619) 597-8946</a></p>
      </div>
    </section>
  );
};

export default Contact;