

import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";
import Profile from "../Components/TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommendTalent from "../Components/TalentProfile/RecommendTalent";

const TalentProfilePage = () => {
  return (
    <div className="container-fluid min-vh-100 p-4">
      {/* Back Button */}
      <div className="mb-4">
        <Link to="/find-talent" className="text-decoration-none">
          <Button
            leftSection={<IconArrowLeft size={20} />}
            variant="outline"
            className="text-black"
            color="yellow"
          >
            Back
          </Button>
        </Link>
      </div>

      {/* Responsive Layout: Profile + Recommended */}
      <div className="row g-4">
        <div className="col-12 col-lg-8">
          <Profile {...profile} />
        </div>
        <div className="col-12 col-lg-4">
          <RecommendTalent />
        </div>
      </div>
    </div>
  );
};

export default TalentProfilePage;
