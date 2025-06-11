import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import CertificationCard from "./CertificationCard";

const Profile = (props) => {
  return (
    <div className="shadow border rounded mt-3 p-2 bg-light-100 border-charcoal-200">
      {/* Banner & Avatar */}
      <div className="position-relative">
        <img
          className="w-100 rounded-top"
          src="/Profile/banner.jpg"
          alt="Banner"
        />
        <img
          className="position-absolute rounded-circle"
          src="/Avatars/avatar.png"
          alt="Avatar"
          style={{
            width: "100px",
            height: "100px",
            bottom: "-50px",
            left: "20px",
            border: "4px solid white",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Profile Content */}
      <div className="p-2 mt-5">
        <div className="fs-1 fw-semibold d-flex justify-content-between align-items-center">
          <span className="text-charcoal-900">{props.name}</span>
        </div>

        <div className="fs-4 d-flex align-items-center gap-1 text-charcoal-700 mt-2">
          <IconBriefcase size={20} /> {props.role} &bull; {props.company}
        </div>

        <span className="text-charcoal-600 d-flex align-items-center gap-1 mt-1">
          <IconMapPin stroke={1.5} size={18} />
          {props.location}
        </span>
      </div>

      <Divider className="my-3" />

      {/* About Section */}
      <div className="p-2">
        <div className="fs-1 text-purple-700 fw-semibold">About</div>
        <div className="text-justify text-charcoal-700 mt-2">{props.about}</div>
      </div>

      <Divider className="my-3" />

      {/* Skills Section */}
      <div className="p-2">
        <div className="fs-1 text-green-700 fw-semibold">Skills</div>
        <div className="d-flex flex-wrap gap-2 mt-2">
          {props.skills.map((skill, index) => (
            <span
              key={index}
              className="badge bg-blue-500 text-light-100 fw-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <Divider className="my-3" />

      {/* Experience Section */}
      <div className="p-2">
        <div className="fs-1 text-blue-700 fw-semibold">Experience</div>
        <div className="mt-2 d-flex flex-column gap-3">
          {props.experience.map((experience, index) => (
            <ExperienceCard {...experience} key={index} />
          ))}
        </div>
      </div>

      <Divider className="my-3" />

      {/* Certidication Section */}
      <div className="p-2">
        <div className="fs-1 text-blue-700 fw-semibold">Certification</div>
        <div className="mt-2 d-flex flex-column gap-3">
          {props.certifications.map((certificate, index) => (
            <CertificationCard {...certificate} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
