import React from "react";
import TextInput from "@/components/inputs/text-input/TextInput";

const ContactFormTemplateChunk = () => {
  return (
    <div className="w-full h-full mt-10 md:mt-0 p-7">
      <div className="bg-white drop-shadow-[0_4px_10px_#00000033] p-8">
        <p className="text-xl text-[#1976D2] font-bold tracking-tight sm:text-xl">
          Send us a message
        </p>
        <form className="text mt-3">
          <div className="p-2 w-full sm:mb-5">
            <div className="relative">
              <label
                htmlFor="name"
                className="leading-7 py-4 text-xl font-bold tracking-tight sm:text-xl"
              >
                Full Name
              </label>
              <TextInput
                type="text"
                id="name"
                name="name"
                required
                label={""}
              />
            </div>
          </div>
          <div className="p-2 w-full sm:mb-5">
            <div className="relative">
              <label
                htmlFor="email"
                className="leading-7 py-4 text-xl font-bold tracking-tight sm:text-xl"
              >
                Your Email
              </label>
              <TextInput
                type="email"
                id="email"
                name="email"
                required
                label={""}
              />
            </div>
          </div>
          <div className="p-2 w-full sm:mb-5">
            <div className="relative">
              <label
                htmlFor="name"
                className="leading-7 py-4 text-xl font-bold tracking-tight sm:text-xl"
              >
                Company Name
              </label>
              <TextInput
                type="text"
                id="name"
                name="company name"
                required
                label={""}
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label
                htmlFor="message"
                className="leading-7 py-4 text-xl font-bold tracking-tight sm:text-xl"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className=" w-full bg-white rounded border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormTemplateChunk;
