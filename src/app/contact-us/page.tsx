import React from "react";
import Navbar from "@/components/navbar/Navbar";
import ContactFaqTemplateChunk from "@/chunks/contact-template-chunk/contact-faq-template-chunk/ContactFaqTemplateChunk";
import ContactFormTemplateChunk from "@/chunks/contact-template-chunk/contact-form-template-chunk/ContactFormTemplateChunk";
import Head from "next/head";

function ContactUs() {
  return (
    <div>
      <Head>
        <title>The Intern Place | Login</title>
        <meta name="description" content={"The Intern Place"} />
      </Head>
      <Navbar bgcolor={"#FAFBFC"} />
      <main className="w-full h-full max-w-[1350px] mx-auto bg-[#FAFBFC]">
        <div className="grid justify-items-center py-16">
          <h1 className="flex justify-centerlg:text-[3.5rem] md:text-[45px] text-4xl font-semibold leading-10 mb-4">
            Contact Us
          </h1>
          <p className="text sm:w-3/6 mb-3 w-5/6">
            We’d love to hear from you at The Intern Place. Contact Us for
            effective service.
          </p>
        </div>
        <div className="bg-white md:p-12 p-8 lg:p-16 xl:p-0 overflow-auto">
          {/* <div className="mx-auto max-w-7xl px-6 lg:px-8"> */}
            <div className="mx-auto grid grid-cols-1 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <ContactFaqTemplateChunk />
              <ContactFormTemplateChunk />
            </div>
           
          </div>
        {/* </div> */}
      </main>
    </div>
  );
}
export default ContactUs;
