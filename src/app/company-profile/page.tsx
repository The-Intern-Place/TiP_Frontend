import CompanyProfileContentChunk from "@/chunks/companyprofile-template-chunk/companyprofile-content-template-chunk/CompanyProfileContentChunk";
import CompanyProfileHeroChunk from "@/chunks/companyprofile-template-chunk/companyprofile-hero-template-chunk/CompanyProfileHeroChunk";
import CompanyProfileTeamChunk from "@/chunks/companyprofile-template-chunk/companyprofile-team-template-chunk/CompanyProfileTeamChunk";
import JobOpeningTemplateChunk from "@/chunks/home-template-chunk/job-opening-template-chunk/JobOpeningTemplateChunk";
import Navbar from "@/components/navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Intern Place | Company Profile",
  description: "The Intern Place",
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <Navbar bgcolor="#FAFBFC" />
      <CompanyProfileHeroChunk />
      <CompanyProfileContentChunk />
      <CompanyProfileTeamChunk />
      <JobOpeningTemplateChunk />
    </div>
  );
};

export default page;
