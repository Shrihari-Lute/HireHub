import { Avatar, Rating } from "@mantine/core";
import React from "react";
import { testimonials } from "../../Data/Data";

const Testimonial = () => {
  return (
    <div className="container py-4">
      {/* Heading */}
      <div className="d-flex align-items-center justify-content-center fs-1 fw-semibold accent-custom text-center">
        What&nbsp;
        <span className="highlight-custom">Users</span>&nbsp;says about us ?
      </div>

      {/* Testimonials Grid */}
      <div className="row justify-content-evenly mt-4">
        {testimonials.map((data, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 p-2">
            <div className="d-flex flex-column gap-3 border border-black p-3 rounded h-100">
              {/* Avatar + Name + Rating */}
              <div className="d-flex align-items-center gap-2">
                <Avatar src="/Avatars/avatar.png" alt="User Avatar" />
                <div>
                  <div className="fs-5 fw-semibold highlight-custom">
                    {data.name}
                  </div>
                  <Rating value={data.rating} fractions={2} readOnly />
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="fst-italic">"{data.testimonial}"</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
