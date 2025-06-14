
import React from "react";
import Sort from "./Sort";
import JobCard from "./JobCard";
import { jobList } from "../../Data/JobsData";

const JobsSection = () => {
  return (
    <div className="container-fluid px-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-semibold highlight-custom m-0">Recommended Jobs</h3>
        <Sort />
      </div>

      {/* Cards Grid */}
      <div className="row g-4">
        {jobList.map((job, index) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
            <JobCard {...job} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsSection;
