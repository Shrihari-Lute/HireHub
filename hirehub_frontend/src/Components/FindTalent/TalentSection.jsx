import { talents } from "../../Data/TalentData";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";

const TalentSection = () => {
  return (
    <div className="container-fluid px-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-semibold highlight-custom m-0">Talents</h3>
        <Sort />
      </div>

      {/* Cards Grid */}
      <div className="row g-4">
        {talents.map((talent, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <TalentCard {...talent} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TalentSection;
