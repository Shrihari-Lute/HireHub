import React from "react";
import { NavLink } from "react-router-dom";

const RecruiterNavLinks = () => {
  // Define an array of navigation link objects with display name and URL path
  const links = [
    { name: "Find Talent", url: "find-talent" },
    { name: "Post Jobs", url: "post-jobs" },
    { name: "Find Jobs", url: "find-jobs" },
    { name: "About Us", url: "about" },
  ];

  return (
    // Flex container with gap between links
    <div className="d-flex gap-5">
      {/* Map over the links array to generate NavLink components */}
      {links.map((link, index) => (
        <NavLink
          key={index} // Unique key for React rendering
          to={link.url} // Route to navigate to on click
          className={({ isActive }) =>
            // Dynamic class: highlight active link with accent color,
            // otherwise white text color
            `text-decoration-none ${
              isActive ? "accent-custom" : "text-white-custom"
            }`
          }
        >
          {link.name} {/* Display link text */}
        </NavLink>
      ))}
    </div>
  );
};

export default RecruiterNavLinks;
