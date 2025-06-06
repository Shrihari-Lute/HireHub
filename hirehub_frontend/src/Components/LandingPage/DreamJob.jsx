import { Avatar } from "@mantine/core";
import React from "react";

const DreamJob = () => {
  return (
    // Bootstrap container for responsive fixed width layout
    <div className="container">
      {/* Bootstrap row to create horizontal layout */}
      <div className="row align-items-center">
        {/* Text Section - Left side on medium+ screens */}
        <div className="col-md-6 pt-3">
          <div>
            {/* Heading with custom accent and highlight styles, large font size */}
            <h1 className="accent-custom display-3 fw-bold">
              Turn Your <span className="highlight-custom">Ambitions</span> into{" "}
              <span className="highlight-custom">Reality</span> with HireHub
            </h1>
            {/* Paragraph with larger font size and black text */}
            <p className="fs-4 text-black">
              The right opportunity is just a click away.
              <br />
              Discover thousands of roles that fit your passion and purpose.
            </p>
          </div>
        </div>

        {/* Image Section - Right side on medium+ screens */}
        <div className="col-md-6 text-end position-relative">
          {/* Responsive image */}
          <img src="/Avatars/Boy.png" alt="Boy" className="img-fluid" />

          {/* Overlay box with avatars and text positioned on the image */}
          <div className="d-flex flex-column align-items-center text-center glass-effect position-absolute top-50 end-0 translate-middle-y me-2">
            {/* Small muted text above avatars */}
            <div className="text-muted fs-6 mb-2">Got 10k+ jobs</div>

            {/* Avatar group from Mantine showing multiple user avatars */}
            <Avatar.Group spacing="sm">
              <Avatar src="/Avatars/avatar.png" radius="xl" />
              <Avatar src="/Avatars/avatar1.png" radius="xl" />
              <Avatar src="/Avatars/avatar2.png" radius="xl" />
              {/* Avatar with text "+5" to indicate more users */}
              <Avatar radius="xl">+5</Avatar>
            </Avatar.Group>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
