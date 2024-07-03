"use client";


import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/ContactSection/ContactSection.module.css";
import { Mail } from "@/assets/images/contacts-images/images";
import { Phone } from "@/assets/images/contacts-images/images";
import { Facebook } from "@/assets/images/contacts-images/images";
import { Instagram } from "@/assets/images/contacts-images/images";
import { Linkedin } from "@/assets/images/contacts-images/images";
import { Twitter } from "@/assets/images/contacts-images/images";
import { Arrow } from "@/assets/images/contacts-images/images";

interface QAItem {
    id: number;
    question: string;
    answer: string;
}

const qaData: QAItem[] = [
    {
        id: 1,
        question: "How can I get started?",
        answer:
            "Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup.",
    },
    {
        id: 2,
        question: "What is the pricing structure?",
        answer:
            "Our pricing structure is flexible. We offer both free and paid plans. You can choose the one that suits your needs and budget.",
    },
    {
        id: 3,
        question: "What kind of support do you provide?",
        answer:
            "We offer comprehensive customer support. You can reach out to our support team through various channels, including email, chat, and a knowledge base.",
    },
    {
        id: 4,
        question: "Can I cancel my subscription anytime?",
        answer:
            "Yes, you can cancel your subscription at any time without any hidden fees. We believe in providing a hassle-free experience for our users.",
    },
];




const Faq: React.FC = () => {
    const [visibleId, setVisibleId] = useState<number | null>(null);

    const handleToggle = (id: number) => {
        setVisibleId(visibleId === id ? null : id);
    };
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
                                        <div className={`w-6 h-6 text-gray-400 ${visibleId === id ? styles.rotate : ""}`}>
                                            <Arrow />
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
                    <Link
                        className="flex justify-center items-center mb-4"
                        href={"#"}
                    >
                        <Mail />
                        <span className="text-sm text-[#1976D2] ml-3">
                            theinernplacejobs@gmail.com
                        </span>
                    </Link>
                    <Link className="flex justify-center items-center" href={"#"}>
                        <Phone />

                        <span className="text-sm text-[#1976D2] ml-3">
                            09032884485
                        </span>
                    </Link>
                    <ul className="flex justify-center mt-5 space-x-4">
                        <li className="bg-[#1976D2] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <a href="#">
                                <Facebook />
                            </a>
                        </li>
                        <li className="bg-[#1976D2] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <a href="#">
                                <Linkedin />
                            </a>
                        </li>
                        <li className="bg-[#1976D2] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <a href="#">
                                <Instagram />
                            </a>
                        </li>
                        <li className="bg-[#1976D2] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <a href="#">
                                <Twitter />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Faq