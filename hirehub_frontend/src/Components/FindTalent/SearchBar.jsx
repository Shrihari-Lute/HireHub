import { Divider, Input } from "@mantine/core";
import { searchFields } from "../../Data/TalentData";
import MultiInput from "../FindJobs/MultiInput";
import { IconUserCircle } from "@tabler/icons-react";

const SearchBar = () => {
  return (
    <div className="p-4 mt-3">
      <div className="d-flex gap-1 align-items-center justify-content-center">
        <div className="d-flex align-items-center justify-content-between p-2 border rounded w-25">
          <div className="bg-warning text-black d-flex align-items-center justify-content-center rounded-circle icon-btn ">
            <IconUserCircle className="w-75 h-75" />
          </div>
          <Input
            variant="unstyled"
            className="ms-1 w-100"
            placeholder="Search Talent"
          />
        </div>

        {searchFields.map((item) => (
          <div key={item.title} className="p-2 border rounded w-25">
            <MultiInput
              title={item.title}
              icon={item.icon}
              options={item.options}
            />
          </div>
        ))}
      </div>

      <Divider className="mt-3" size="sm" />
    </div>
  );
};

export default SearchBar;
