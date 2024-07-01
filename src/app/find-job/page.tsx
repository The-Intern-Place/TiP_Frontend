import type { Metadata } from "next";
import FindJobHero from "@/partials/findjob/FindJobHero";
import FindJob from "@/partials/findjob/FindJob";

export const metadata: Metadata = {
  title: "The Intern Place | Find Job",
  description: "The Intern Place",
};
const page = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <FindJobHero />
      <FindJob />
    </div>
  );
};

export default page;
