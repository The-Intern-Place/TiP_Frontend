"use client";
import { qaData } from "@/utils/data/qa-data";
import { IC_Arrow } from "@assets/icons/IC_Arrow";
import IC_Facebook from "@assets/icons/IC_Facebook";
import IC_Instagram from "@assets/icons/IC_Instagram";
import IC_LinkedIn from "@assets/icons/IC_LinkedIn";
import { IC_Mail } from "@assets/icons/IC_Mail";
import { IC_Phone } from "@assets/icons/IC_Phone";
import IC_Twitter from "@assets/icons/IC_Twitter";
import styles from "@/styles/contact.module.css";
import Link from "next/link";
import React from "react";
import useContactFaqTemplateChunk from "./useContactFaqTemplateChunk";

const ContactFaqTemplateChunk = () => {
  const { handleToggle, visibleId } = useContactFaqTemplateChunk();

  return (
    <div>
      <div className="lg:pr-8 lg:pt-4">
        <div className="lg:max-w-lg">
          <p className="flex justify-center mt-2 text-2xl font-bold tracking-tight sm:text-2xl">
            Frequently Asked Questions
          </p>
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
              {qaData.map(({ id, question, answer }) => (
                <div
                  key={id}
                  className="transition-all duration-200 bg-white shadow-lg cursor-pointer hover:bg-gray-50"
                >
                  <button
                    type="button"
                    onClick={() => handleToggle(id)}
                    className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                  >
                    <span className="flex text-lg font-semibold text-[#1976D2]">
                      {question}
                    </span>
                    <div
                      className={`w-6 h-6 text-gray-400 ${visibleId === id ? styles.rotate : ""}`}
                    >
                      <IC_Arrow />
                    </div>
                  </button>
                  <div
                    className={`px-4 pb-5 sm:px-6 sm:pb-6 ${visibleId === id ? "block" : "hidden"}`}
                  >
                    <p>{answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </dl>
        </div>
        <div className="mt-10 flex justify-end gap-x-6">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-[#1976D2]"
          >
            See All <span aria-hidden="true">→</span>
          </a>
        </div>
        <div>
          <p className="flex justify-center mt-2 mb-10 text-3xl font-bold tracking-tight sm:text-2xl">
            Our Links
          </p>
          <Link className="flex justify-center items-center mb-4" href={"#"}>
            <IC_Mail />
            <span className="text-sm text-[#1976D2] ml-3">
              theinternplacejobs@gmail.com
            </span>
          </Link>
          <Link className="flex justify-center items-center" href={"#"}>
            <IC_Phone />

            <span className="text-sm text-[#1976D2] ml-3">09032884485</span>
          </Link>
          <ul className="flex justify-center mt-5 space-x-4">
            <li className="bg-[#1976D2] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="#">
                <IC_Facebook />
              </a>
            </li>
            <li className="bg-[#1976D2] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="#">
                <IC_LinkedIn />
              </a>
            </li>
            <li className="bg-[#1976D2] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="#">
                <IC_Instagram />
              </a>
            </li>
            <li className="bg-[#1976D2] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="#">
                <IC_Twitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactFaqTemplateChunk;
