import React from "react";
import type { Metadata } from "next";
import SignupTemplateChunk from "@/chunks/auth-template-chunk/sign-up-template-chunk/SignupTemplateChunk";

export const metadata: Metadata = {
  title: "The Intern Place | Sign Up ",
  description: "The Intern Place",
};

const SignUp = () => {
  return <SignupTemplateChunk />;
};

export default SignUp;
