import React from "react";

import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import ContactFaqTemplateChunk from "@/chunks/contact-template-chunk/contact-faq-template-chunk/ContactFaqTemplateChunk";
import ContactFormTemplateChunk from "@/chunks/contact-template-chunk/contact-form-template-chunk/ContactFormTemplateChunk";
import Head from "next/head";

export const metadata: Metadata = {
  title: "The Intern Place | Login ",
  description: "The Intern Place",
};

function ContactUs() {
  return (
    <div>
      <Head>
        <title>The Intern Place | Login</title>
        <meta name="description" content={"The Intern Place"} />
      </Head>

      <Navbar />
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
              <ContactFaqTemplateChunk />
              <ContactFormTemplateChunk />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default ContactUs;
