import { Avatar, Button, Divider, Text } from "@mantine/core";
import { IconHeart, IconMapPin } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

const TalentCard = (props) => {
  return (
    <div className="d-flex flex-column h-100 p-3 shadow border border-charcoal-200 rounded text-charcoal-900 bg-light-200">
      {/* Header: Avatar + Info + Heart */}
      <div className="d-flex justify-content-between align-items-start border-bottom pb-2">
        <div className="d-flex gap-2 align-items-center">
          <div className="p-2 rounded-circle bg-light-100">
            <Avatar
              size="lg"
              src={`/Avatars/${props.image}.png`}
              alt="Avatar"
            />
          </div>
          <div>
            <div className="fw-semibold text-charcoal-800">{props.name}</div>
            <div className="text-charcoal-600 small">
              {props.role} &#x2022; {props.company}
            </div>
          </div>
        </div>
        <IconHeart className="text-red-500" style={{ cursor: "pointer" }} />
      </div>

      {/* Tags */}
      <div className="d-flex justify-content-between flex-wrap gap-2 my-2">
        {props.topSkills.map((skill, index) => (
          <span
            key={index}
            className="border rounded p-1 small bg-charcoal-300 text-purple-800"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Description */}
      <Text
        className="text-charcoal-700 px-1"
        style={{ textAlign: "justify" }}
        lineClamp={2}
      >
        {props.about}
      </Text>

      <Divider size="sm" className="my-2" />

      {/* Footer */}
      <div className="d-flex justify-content-between align-items-center px-1">
        <span className="fw-semibold text-green-700">{props.expectedCtc}</span>
        <span className="text-charcoal-600 d-flex align-items-center gap-1">
          <IconMapPin stroke={1.5} size={18} />
          {props.location}
        </span>
      </div>

      <Divider size="sm" className="my-2" />

      {/* Buttons: Profile and Message in a row */}
      <div className="d-flex gap-2">
        <Link to="/talent-profile" className="w-50 text-decoration-none">
          <Button
            variant="outline"
            className="text-black"
            color="yellow"
            fullWidth
          >
            Profile
          </Button>
        </Link>
        <div className="w-50">
          <Button
            variant="light"
            color="yellow"
            className="text-black"
            fullWidth
          >
            Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TalentCard;
