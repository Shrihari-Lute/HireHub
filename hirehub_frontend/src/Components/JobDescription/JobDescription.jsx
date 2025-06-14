import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";
import { card, skills, description } from "../../Data/JobDescriptionData";

const JobDescription = () => {
  return (
    <div className="container-fluid border rounded shadow p-3 bg-light-100">
      {/* Top Section */}
      <div className="row align-items-start mb-3">
        {/* Left: Logo + Info */}
        <div className="col-md-8 d-flex flex-wrap gap-3 align-items-center">
          <div className="border rounded bg-charcoal-300 p-2">
            <img
              src="/Icons/Apple.png"
              alt="Company Logo"
              className="img-fluid"
              style={{ width: "80px", height: "80px", objectFit: "contain" }}
            />
          </div>
          <div>
            <div className="fw-semibold fs-3 text-charcoal-900">Job Title</div>
            <div className="fs-5">Apple Inc.</div>
            <div>2 days ago &#x2022; 84 applicants</div>
          </div>
        </div>

        {/* Right: Buttons */}
        <div className="col-md-4 d-flex flex-row flex-md-column align-items-end align-items-md-end gap-2 mt-3 mt-md-0">
          <Link to="/apply-job" className="w-md-auto">
            <Button
              variant="outline"
              className="btn-green-300 text-white fw-semibold w-100"
              color="green"
            >
              Apply
            </Button>
          </Link>
          <IconBookmark
            size={30}
            className="icon icon-yellow-500"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>

      <Divider className="my-4" />

      {/* Job Summary Cards */}
      <div className="row g-3">
        {card.map((item, index) => (
          <div key={index} className="col-6 col-md-3 text-center">
            <ActionIcon
              variant="filled"
              color="yellow"
              radius="xl"
              size="xl"
              aria-label="icon"
              className="shadow mb-2"
            >
              <item.icon style={{ width: "70%", height: "70%" }} stroke={1.5} />
            </ActionIcon>
            <div className="text-muted small">{item.name}</div>
            <div className="fs-6 fw-semibold text-charcoal-800">
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <Divider className="my-4" />

      {/* Required Skills */}
      <div className="mb-4">
        <div className="fw-semibold fs-5 text-charcoal-800 mb-2">
          Required Skills
        </div>
        <div className="d-flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="border rounded p-1 px-2 small bg-charcoal-300 text-purple-800"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <Divider className="my-4" />

      {/* Job Description */}
      <div
        className="p-2 text-justify text-charcoal-900"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>

      <Divider className="my-4" />

      {/* About Company */}
      <div className="p-2">
        <div className="fw-semibold fs-5 text-charcoal-800 mb-3">
          About Company
        </div>

        <div className="row align-items-start mb-3">
          <div className="col-md-9 d-flex gap-3 align-items-center">
            <div className="border rounded bg-charcoal-300 p-2">
              <img
                src="/Icons/Apple.png"
                alt="Company Logo"
                className="img-fluid"
                style={{ width: "60px", height: "60px", objectFit: "contain" }}
              />
            </div>
            <div>
              <h5 className="fw-semibold text-charcoal-900 m-0">Apple Inc.</h5>
              <div className="text-muted small">10K+ Employees</div>
            </div>
          </div>

          <div className="col-md-3 text-md-end mt-3 mt-md-0">
            <Link to="">
              <Button
                variant="outline"
                className="btn-charcoal-300 fw-semibold"
                color="charcoal"
              >
                Company Page
              </Button>
            </Link>
          </div>
        </div>

        <div className="text-justify text-muted">
          Apple Inc. is an American multinational technology company that
          specializes in consumer electronics, software, and online services.
          It’s one of the Big Five American information technology companies,
          alongside Amazon, Google, Microsoft, and Meta.
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
