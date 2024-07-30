"use client";
import { qaData } from "@/utils/data/qa-data";
import { IC_Arrow } from "@assets/icons/IC_Arrow";
import styles from "@/styles/contact.module.css";
import React from "react";
import useContactFaqTemplateChunk from "./useContactFaqTemplateChunk";
import Link from "next/link";

const ContactFaqTemplateChunk = () => {
  const { handleToggle, visibleId } = useContactFaqTemplateChunk();

  return (
    <div>
      <div className="">
        <div className="">
          <p className="flex justify-center mt-2 text-2xl font-bold tracking-tight sm:text-2xl font-clash mb-2">
            Frequently Asked Questions
          </p>
          <dl className="text-base leading-7 text-gray-600 ">
            <div className=" mx-auto">
              {qaData.map(({ id, question, answer }) => (
                <div
                  key={id}
                  className="transition-all duration-200 bg-white cursor-pointer hover:bg-gray-50"
                >
                  <button
                    type="button"
                    onClick={() => handleToggle(id)}
                    className="flex items-center justify-between w-full p-6"
                  >
                    <span className="flex text-left text-2xl font-semibold text-[#1976D2] font-clash">
                      {question}
                    </span>
                    <div
                      className={`w-6 h-6 text-[#1B1B1B] ${visibleId === id ? styles.rotate : ""}`}
                    >
                      <IC_Arrow />
                    </div>
                  </button>
                  <div
                    className={`px-4 pb-5 text-[#1B1B1B] sm:px-6 sm:pb-6 ${visibleId === id ? "block" : "hidden"}`}
                  >
                    <p>{answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </dl>
        </div>
        <Link
          href="#"
          className="text-sm font-semibold leading-6 text-[#1976D2]"
        >
          See All <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
};

export default ContactFaqTemplateChunk;
