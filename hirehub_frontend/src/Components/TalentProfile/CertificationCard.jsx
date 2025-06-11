import React from "react";

const CertificationCard = (props) => {
  return (
    <>
      {/* Header Row: Logo + Info + Dates */}
      <div className="d-flex justify-content-between align-items-start gap-3 flex-wrap">
        {/* Left Section: Logo and Certification Info */}
        <div className="d-flex gap-3 align-items-center">
          {/* Logo */}
          <div className="p-2 rounded border bg-charcoal-200">
            <img
              src={`/Icons/${props.issuer}.png`}
              alt={`${props.issuer} logo`}
              className="img-fluid"
              style={{
                width: "40px",
                height: "40px",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Title + Issuer */}
          <div>
            <div className="fw-semibold text-charcoal-900">{props.name}</div>
            <div className="text-charcoal-600">{props.issuer}</div>
          </div>
        </div>

        {/* Right Section: Dates and ID */}
        <div className="text-end text-charcoal-500 small">
          <div>{props.issuerDate}</div>
          <div>{props.certificateId}</div>
        </div>
      </div>
    </>
  );
};

export default CertificationCard;
