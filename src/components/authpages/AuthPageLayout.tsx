import React from "react";
import styles from "@/styles/authpage/style.module.css";
import Image from "next/image";
import { TipLogo } from "public";

type signUpProps = {
  children: React.ReactNode;
  heading: string;
};

const AuthPageLayout = ({ children, heading }: signUpProps) => {
  return (
    <section className=" w-full p-0 m-0">
      <div
        className={`hidden lg:block fixed top-0 left-0 bottom-0 lg:max-w-[650px] xl:max-w-[704px] w-full 2xl:max-w-[800px] p-10 ${styles.sideImage}`}
      >
        <figure className="m-0 p-0 relative w-[100px] h-[91px] overflow-hidden">
          <Image src={TipLogo} alt="tip-logo" fill />
        </figure>
      </div>
      <div className="lg:ml-auto w-full lg:max-w-[calc(100%-650px)] xl:max-w-[calc(100%-704px)] 2xl:max-w-[calc(100%-800px)]">
        <section className="w-[90%] max-w-[400px] sm:max-w-[500px] mx-auto sm:w-full lg:max-w-[581px] min-h-screen py-10 lg:px-8 lg:mx-8">
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
