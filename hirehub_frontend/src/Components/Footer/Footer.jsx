import React from "react";
import { Link } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa";
import { footerLinks } from "../../Data/Data";

const Footer = () => {
  return (
    <div className="container mt-5 pb-5 px-4">
      <div className="row">
        {/* ================= Left Section: Logo + Description ================= */}
        <div className="col-12 col-lg-4">
          {/* Brand Logo and Name */}
          <Link
            to="/"
            className="d-flex align-items-center gap-2 text-decoration-none accent-custom"
          >
            <FaBriefcase size={35} /> {/* Briefcase icon */}
            <div className="fs-1 fw-bold">HireHub</div> {/* Brand title */}
          </Link>

          {/* Description paragraph */}
          <div className="text-muted mt-2" style={{ textAlign: "justify" }}>
            HireHub is a modern recruitment platform designed to streamline the
            hiring process for companies and job seekers. Whether you're looking
            to build your dream team or find your next career opportunity,
            HireHub connects talent with opportunity efficiently and
            effectively.
          </div>
        </div>

        {/* ================= Right Section: Footer Links ================= */}
        <div className="col-12 col-lg-8 d-flex flex-wrap gap-4 justify-content-around mt-4">
          {footerLinks.map((item, index) => (
            <div key={index} style={{ minWidth: "150px" }}>
              {/* Footer Section Title (e.g., Company, Support, etc.) */}
              <div className="fs-4 fw-semibold highlight-custom pb-1">
                {item.title}
              </div>

              {/* Section Links (e.g., About Us, Contact, etc.) */}
              {item.links.map((link, i) => (
                <div
                  key={i}
                  className="text-muted hover-highlight-custom mt-2 mb-1"
                  style={{ cursor: "pointer" }}
                >
                  {link}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
