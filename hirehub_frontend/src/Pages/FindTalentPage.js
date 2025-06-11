import React from "react";
import SearchBar from "../Components/FindTalent/SearchBar";
import TalentSection from "../Components/FindTalent/TalentSection";

const FindTalentPage = () => {
  return (
    <div className="min-vh-100">
      <SearchBar />
      <TalentSection />
    </div>
  );
};

export default FindTalentPage;
