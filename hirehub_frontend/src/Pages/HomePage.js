import React from "react";
import DreamJob from "../Components/LandingPage/DreamJob.jsx";
import Companies from "../Components/LandingPage/Companies.jsx";
import JobCategory from "../Components/LandingPage/JobCategory.jsx";
import Testimonial from "../Components/LandingPage/Testimonial.jsx";

const HomePage = () => {
  return (
    <div className="min-vh-100">
      <DreamJob />

      <Companies />

      <JobCategory />

      <Testimonial />
    </div>
  );
};

export default HomePage;
