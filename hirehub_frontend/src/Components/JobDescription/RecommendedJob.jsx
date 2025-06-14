import React from "react";
import { jobList } from "../../Data/JobsData";
import JobCard from "../FindJob/JobCard.jsx";

const RecommendedJob = () => {
  return (
    <div>
      {/* Section Title */}
      <h4 className="text-center fs-3 fw-bold text-red-600 mb-3">
        Recommended Jobs
      </h4>

      {/* Talent List (Only 4 Cards) */}
      <div className="d-flex flex-wrap gap-3">
        {jobList.slice(0, 5).map((job, index) => (
          <JobCard {...job} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedJob;
