import React from "react";
import SearchBar from "../Components/FindJob/SearchBar";
import JobsSection from "../Components/FindJob/JobsSection";

const FindJobPage = () => {
  return (
    <div className="min-vh-100">
      <SearchBar />
      <JobsSection />
    </div>
  );
};

export default FindJobPage;
