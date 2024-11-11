import CompanyDashboardTemplateChunk from "@/chunks/company-template-chunk/company-dashboard-template-chunk/CompanyDashboardTemplateChunk";
import DashboardHeaderChunk from "@/chunks/shared/dashboard-header-chunk/DashboardHeaderChunk";
import DashboardLayout from "@/layouts/dashboard-layout/DashboardLayout";
import { ApplicationNotification } from "@assets/images";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Intern Place | Dashboard",
  description: " The Intern Place",
};

const Dashboard = () => {
  return (
    <DashboardLayout>
      <DashboardHeaderChunk
        action={
          <Link
            href={""}
            className="border-2 relative border-[#1976D2] rounded-full p-2 w-[50px]"
          >
            <Image src={ApplicationNotification} alt="Notification icon" />
            <p className="absolute top-1 right-1 bg-[#1976D2] text-center rounded-full text-white px-[3px] h-[10px] text-[6.5px]">
              3
            </p>
          </Link>
        }
        title="Nomad"
        company
      />
      <div className="border-b border-[#DAD2B8]" />
      <section className="px-7">
        <CompanyDashboardTemplateChunk />
      </section>
    </DashboardLayout>
  );
};

export default Dashboard;
