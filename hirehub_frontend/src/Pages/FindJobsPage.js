import React from "react";
import SearchBar from "../Components/FindJobs/SearchBar";
import JobsSection from "../Components/FindJobs/JobsSection";

const FindJobsPage = () => {
  return (
    <div className="min-vh-100">
      <SearchBar />
      <JobsSection />
    </div>
  );
};

export default FindJobsPage;
