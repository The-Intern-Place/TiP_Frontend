import SignUp from "@/components/authpages/SignUp";
import React from "react";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Intern Place | Sign Up ",
  description: "The Intern Place",
};
const page = () => {
  return <SignUp />;
};

export default page;
