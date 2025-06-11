import React from "react";
import { talents } from "../../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const RecommendTalent = () => {
  return (
    <div className="mt-4">
      {/* Section Title */}
      <h4 className="text-center fs-3 fw-bold text-red-600 mb-3">
        Recommended Talents
      </h4>

      {/* Talent List (Only 4 Cards) */}
      <div className="d-flex flex-wrap gap-3">
        {talents.slice(0, 4).map((talent, index) => (
          <TalentCard {...talent} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RecommendTalent;
