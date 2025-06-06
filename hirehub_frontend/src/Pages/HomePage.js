import React from "react";
import Header from "../Components/Header/Header.jsx";
import DreamJob from "../Components/LandingPage/DreamJob.jsx";
import Companies from "../Components/LandingPage/Companies.jsx";
import JobCategory from "../Components/LandingPage/JobCategory.jsx";
import Testimonial from "../Components/LandingPage/Testimonial.jsx";
import Footer from "../Components/Footer/Footer.jsx";

const HomePage = () => {
  return (
    // Container div that takes minimum full viewport height
    <div className="min-vh-100">
      {/* Header Section: Displays the navigation bar and logo */}
      <Header />

      {/* Main Content Section: Displays the landing page content */}
      <DreamJob />

      <Companies />

      <JobCategory />

      <Testimonial />

      <Footer />
    </div>
  );
};

export default HomePage;
