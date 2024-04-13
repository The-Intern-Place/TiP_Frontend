import Login from "@/components/authpages/Login";
import React from "react";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Intern Place | Login ",
  description: "The Intern Place",
};

const page = () => {
  return <Login />;
};

export default page;
