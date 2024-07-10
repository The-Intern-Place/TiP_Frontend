"use client";
import React from "react";
import styles from "@/styles/auth.module.css";
import Image from "next/image";
import { TipLogo } from "@assets/images";
import Link from "next/link";
import IC_Facebook from "@assets/icons/IC_Facebook";
import IC_Instagram from "@assets/icons/IC_Instagram";
import IC_LinkedIn from "@assets/icons/IC_LinkedIn";
import IC_Twitter from "@assets/icons/IC_Twitter";
import { IAuthPageLayoutProps } from "./AuthPageLayout.types";

const AuthPageLayout = ({ children, heading }: IAuthPageLayoutProps) => {
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
          <h1 className="text-[#001956] lg:text-[56px] xl:text-[80px] text-center font-semibold w-full leading-normal mx-auto">
            Apply for <br />
            Jobs Anytime, Anywhere.
          </h1>

          <p className=" leading-[2] text-xl pl-20 text-center text-[#25324B] mx-auto w-full max-w-[400px]">
            Stay connected on the go with friendly features, allowing you to
            browse and apply for jobs.
          </p>
        </article>

        <div className="absolute bottom-0 right-0 left-0">
          <div className="px-10 py-5 flex gap-6 items-center justify-between">
            <p className="text-[rgba(27,27,27,0.6)]">
              &copy; 2024 The Intern Place
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="w-full h-full flex items-center justify-center"
              >
                <IC_Facebook />
              </Link>
              <Link
                href="#"
                className="w-full h-full flex items-center justify-center"
              >
                <IC_Instagram />
              </Link>
              <Link
                href="#"
                className="w-full h-full flex items-center justify-center"
              >
                <IC_LinkedIn />
              </Link>
              <Link
                href="#"
                className="w-full h-full flex items-center justify-center"
              >
                <IC_Twitter />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:ml-auto w-full relative lg:max-w-[calc(100%-600px)] xl:max-w-[calc(100%-704px)] 2xl:max-w-[calc(100%-800px)]">
        <section className="w-[90%] max-w-[400px] sm:max-w-[500px] mx-auto sm:w-full lg:max-w-[581px] min-h-screen py-10 lg:px-8">
          <figure className="m-0 p-0 relative w-[57px] h-[57px] overflow-hidden lg:hidden mx-auto mb-2">
            <Link href={"/"}>
              <Image src={TipLogo} alt="tip-logo" fill />
            </Link>
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
