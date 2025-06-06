import { Carousel, CarouselSlide } from "@mantine/carousel";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import React from "react";
import { jobCategory } from "../../Data/Data";

const JobCategory = () => {
  return (
    <div className="mt-5 text-center pt-5 pb-5">
      {/* Section Heading */}
      <div className="d-flex align-items-center justify-content-center fs-1 fw-semibold accent-custom">
        Browse&nbsp;
        <span className="highlight-custom">Jobs</span>&nbsp;Category
      </div>

      {/* Subheading */}
      <div className="mt-3 fs-5 text-muted">
        Unlock exciting career opportunities tailored just for you.
        <br />
        Take the first step toward your dream job today!
      </div>

      {/* Carousel */}
      <Carousel
        slideSize={{ base: "100%", sm: "50%", md: "33.3333%", lg: "25%" }}
        align="center"
        slideGap="md"
        withControls
        dragFree
        loop
        emblaOptions={{ loop: true }}
        nextControlIcon={<IconArrowRight className="highlight-custom" />}
        previousControlIcon={<IconArrowLeft className="highlight-custom" />}
        className="mt-5"
      >
        {jobCategory.map((category, index) => (
          <CarouselSlide key={index}>
            <div className="job-card d-flex flex-column align-items-center text-white-custom p-1 rounded mx-2 h-100">
              <div className="p-3 ">
                <img
                  src={`/Category/${category.name}.png`}
                  alt={category.name}
                  className="img-fluid"
                  style={{ height: "80px", objectFit: "contain" }}
                  onError={(e) => {
                    e.target.src = "/Category/default.png";
                  }}
                />
              </div>
              <div className="fw-bold fs-5 highlight-custom">
                {category.name}
              </div>
              <div className="text-muted small mt-2 mb-2 text-center">
                {category.description}
              </div>
              <div className="accent-custom fw-semibold">
                {category.jobs}+ Jobs
              </div>
            </div>
          </CarouselSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;
