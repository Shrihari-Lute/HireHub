import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";
import JobDescription from "../Components/JobDescription/JobDescription";
import RecommendedJob from "../Components/JobDescription/RecommendedJob";

const JobDescriptionPage = () => {
  return (
    <div className="container-fluid min-vh-100 p-4">
      {/* Back Button */}
      <div className="mb-4">
        <Link to="/find-jobs" className="text-decoration-none">
          <Button
            leftSection={<IconArrowLeft size={20} />}
            variant="outline"
            className="text-black btn-yellow-300"
            color="yellow"
          >
            Back
          </Button>
        </Link>
      </div>

      {/* Responsive Layout: Profile + Recommended */}
      <div className="row g-4">
        <div className="col-12 col-lg-8">
          <JobDescription />
        </div>
        <div className="col-12 col-lg-4">
          <RecommendedJob />
        </div>
      </div>
    </div>
  );
};

export default JobDescriptionPage;
