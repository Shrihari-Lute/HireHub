import React from "react";
import Marquee from "react-fast-marquee";
import { companiesList } from "../../Data/Data";

const Companies = () => {
  return (
    <div className="mt-5">
      {/* Section Heading */}
      <div className="d-flex align-items-center justify-content-center fs-1 fw-semibold accent-custom">
        Trusted By&nbsp;
        <span className="highlight-custom">1000+</span>&nbsp;Companies
      </div>

      <Marquee className="bg-black mt-5" pauseOnHover speed={50}>
        {companiesList.map((company, index) => (
          <div key={index} className="mx-5">
            <img
              className="company-logo m-5"
              src={`/Companies/${company}.png`}
              alt={`${company} Logo`}
              loading="lazy"
              onError={(e) => {
                e.target.src = "/Companies/default.png";
              }}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Companies;
