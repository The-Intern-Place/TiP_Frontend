"use client";

import React from "react";
import Faq from "../FAQ/Faq";
import Form from "../Form/Form";

const ContactUsSection: React.FC = () => {
  return (
    <main className="w-full h-full max-w-[1350px] mx-auto">
      <div className="grid justify-items-center mt-10 mb-3">
        <h1 className="lg:text-[3.5rem] md:text-[45px] text-4xl font-semibold leading-10 mb-4 ml-8">
          Contact Us
        </h1>
        <p className="text sm:w-3/6 mb-3 w-5/6">
          We’d love to hear from you at The Intern Place. Contact Us for
          effective service.
        </p>
      </div>
      <div className="overflow-hidden bg-white py-8 sm:py-16 sm:ml-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <Faq />

            <Form />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUsSection;
