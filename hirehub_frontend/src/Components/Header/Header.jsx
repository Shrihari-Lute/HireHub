import React from "react";
import { FaBriefcase, FaCog } from "react-icons/fa";
import { Avatar } from "@mantine/core";
import RecruiterNavLinks from "./RecruiterNavLinks";
import ApplicantNavLinks from "./ApplicantNavLinks";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-100 bg-black-custom accent-custom px-4 py-3 d-flex justify-content-between align-items-center">
      {/* Logo and Title Section */}
      {/* Clicking the logo redirects to homepage ("/") */}
      <Link
        to="/"
        className="d-flex align-items-center gap-2 accent-custom text-decoration-none"
        style={{ cursor: "pointer" }} // Cursor changes to pointer on hover for better UX
      >
        {/* Briefcase icon with size 24 */}
        <FaBriefcase size={24} />
        {/* Site title with larger font and bold weight */}
        <div className="fs-4 fw-bold">HireHub</div>
      </Link>

      {/* Navigation Links for Recruiters */}
      <RecruiterNavLinks />

      {/* Applicant navigation can be toggled by uncommenting below */}
      {/* <ApplicantNavLinks /> */}

      {/* Profile Section */}
      <div className="d-flex align-items-center gap-3 text-white-custom">
        {/* Profile label and user avatar side by side */}
        <div className="d-flex align-items-center gap-2">
          <span>Profile</span>
          {/* Avatar showing user image */}
          <Avatar src="/Avatars/avatar.png" alt="User Avatar" />
        </div>

        {/* Settings Icon (Gear) with hover effect */}
        <FaCog className="hover-accent-custom" />
      </div>
    </div>
  );
};

export default Header;
