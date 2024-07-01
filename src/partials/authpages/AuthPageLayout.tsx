"use client";
import React from "react";
import styles from "@/styles/authpage/style.module.css";
import Image from "next/image";
import { TipLogo } from "public";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

type signUpProps = {
  children: React.ReactNode;
  heading: string;
};

const AuthPageLayout = ({ children, heading }: signUpProps) => {
  return (
    <section className=" w-full p-0 m-0">
      <div
        className={`hidden lg:block fixed top-0 left-0 bottom-0 lg:max-w-[600px] xl:max-w-[704px] w-full 2xl:max-w-[800px] p-10 bg-pictonBlue`}
      >
        <figure className="m-0 p-0 relative w-[60px] h-[50px] overflow-hidden">
          <Link href={"/"}>
            <Image src={TipLogo} alt="tip-logo" fill />
          </Link>
        </figure>

        <article
          className={`mt-16 max-w-[578px] w-full mx-auto ${styles.customBg}`}
        >
          <h1 className="text-light-blue text-[56px] text-center font-semibold w-full leading-normal mx-auto">
            Apply for <br />
            Jobs Anytime, Anywhere.
          </h1>

          <p className=" leading-[2] text-xl pl-20 text-center mx-auto w-full max-w-[400px]">
            Stay connected on the go with friendly features, allowing you to
            browse and apply for jobs.
          </p>
        </article>

        <div className="absolute bottom-0 right-0 left-0">
          <div className="px-4 py-5 flex gap-6 items-center justify-center">
            <p className="text-[rgba(27,27,27,0.6)]">
              &copy; 2024 The Intern Place
            </p>

            <ul className="flex items-center gap-4">
              <li className="w-[26px] h-[26px] rounded-[50%] bg-light-blue text-white overflow-hidden">
                <Link
                  href="#"
                  className="w-full h-full flex items-center justify-center"
                >
                  <FaFacebookF />
                </Link>
              </li>
              <li className="w-[26px] h-[26px] rounded-[50%] bg-light-blue text-white overflow-hidden">
                <Link
                  href="#"
                  className="w-full h-full flex items-center justify-center"
                >
                  <FaInstagram />
                </Link>
              </li>
              <li className="w-[26px] h-[26px] rounded-[50%] bg-light-blue text-white overflow-hidden">
                <Link
                  href="#"
                  className="w-full h-full flex items-center justify-center"
                >
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className="w-[26px] h-[26px] rounded-[50%] bg-light-blue text-white overflow-hidden">
                <Link
                  href="#"
                  className="w-full h-full flex items-center justify-center"
                >
                  <FaXTwitter />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="lg:ml-auto w-full relative lg:max-w-[calc(100%-600px)] xl:max-w-[calc(100%-704px)] 2xl:max-w-[calc(100%-800px)]">
        <section className="w-[90%] max-w-[400px] sm:max-w-[500px] mx-auto sm:w-full lg:max-w-[581px] min-h-screen py-10 lg:px-8">
          <figure className="m-0 p-0 relative w-[57px] h-[57px] overflow-hidden lg:hidden mx-auto mb-2">
            <Image src={TipLogo} alt="tip-logo" fill />
          </figure>
          <h2 className="text-prussianBlue text-center capitalize text-lg md:text-2xl font-semibold lg:mt-6">
            {heading}
          </h2>
          {children}
        </section>
      </div>
    </section>
  );
};

export default AuthPageLayout;
