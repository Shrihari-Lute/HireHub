import { Divider, Text } from "@mantine/core";
import { IconBookmark, IconClock } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

const JobCard = (props) => {
  return (
    <Link
      to="/jobs"
      className="d-flex flex-column h-100 p-3 shadow border rounded text-black text-decoration-none"
    >
      {/* Header: Logo + Info + Bookmark */}
      <div className="d-flex justify-content-between align-items-start border-bottom pb-2">
        <div className="d-flex gap-2 align-items-center">
          {/* Logo */}
          <div className="p-2 rounded">
            <img
              src={`/Icons/${props.company}.png`}
              alt={`${props.company} Logo`}
              className="img-fluid"
              style={{ width: "40px", height: "40px", objectFit: "contain" }}
            />
          </div>

          {/* Job Info */}
          <div>
            <div className="fw-semibold">{props.jobTitle}</div>
            <div className="text-muted">
              {props.company} &#x2022; {props.applicants} Applicants
            </div>
          </div>
        </div>

        <IconBookmark style={{ cursor: "pointer" }} />
      </div>

      {/* Tags */}
      <div className="d-flex justify-content-between flex-wrap gap-2 my-2">
        <span className="border rounded p-1 small">{props.experience}</span>
        <span className="border rounded p-1 small">{props.jobType}</span>
        <span className="border rounded p-1 small">{props.location}</span>
      </div>

      {/* Description */}
      <Text
        className="text-muted px-1"
        style={{ textAlign: "justify" }}
        lineClamp={2}
      >
        {props.description}
      </Text>

      <Divider size="sm" className="my-2" />

      {/* Footer */}
      <div className="d-flex justify-content-between align-items-center px-1">
        <span className="fw-semibold">&#8377; {props.package}</span>
        <span className="text-muted d-flex align-items-center gap-1">
          <IconClock stroke={1.5} size={18} />
          {props.postedDaysAgo} Days Ago
        </span>
      </div>
    </Link>
  );
};

export default JobCard;
