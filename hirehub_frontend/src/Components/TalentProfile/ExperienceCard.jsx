import React from "react";

const ExperienceCard = (props) => {
  return (
    <div>
      {/* Header Row: Logo + Info + Date */}
      <div className="d-flex justify-content-between align-items-start gap-3 flex-wrap">
        {/* Left Section: Logo and Job Info */}
        <div className="d-flex gap-3 align-items-start">
          {/* Logo */}
          <div className="p-2 rounded border bg-charcoal-200">
            <img
              src={`/Icons/${props.company}.png`}
              alt={props.company}
              className="img-fluid"
              style={{
                width: "40px",
                height: "40px",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Job Title + Company */}
          <div>
            <div className="fw-semibold text-charcoal-900">{props.title}</div>
            <div className="text-charcoal-600">
              {props.company} &#x2022; {props.location}
            </div>
          </div>
        </div>

        {/* Right Section: Date */}
        <div className="text-end text-charcoal-500 small">
          {props.startDate} – {props.endDate}
        </div>
      </div>

      {/* Description */}
      <div className="mt-2 text-charcoal-700 text-justify">
        {props.description}
      </div>
    </div>
  );
};

export default ExperienceCard;
