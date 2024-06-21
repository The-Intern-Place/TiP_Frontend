"use client";
import Navbar from "@/components/navbar/Navbar";
import CategorySection from "@/partials/home/CategorySection";
import HeroSection from "@/partials/home/HeroSection";
import JobOpeningsSection from "@/partials/home/JobOpeningsSection";
import ShortListingSection from "@/partials/home/ShortListingSection"
import TalentsSection from "@/partials/home/TalentsSection";
import type { Metadata } from "next";

const metadata: Metadata = {
  title: "The Intern Place",
  description: "The Intern Place",
};

export default function Home() {
  return (
    <div>
      <section className="bg-[#B5CAEC] pb-10">
        <Navbar />
        <HeroSection />
      </section>
      <div>
        <CategorySection />
        <TalentsSection />
        <JobOpeningsSection />
        {/* <ShortListingSection /> */}
      </div>
    </div>
  );
}
