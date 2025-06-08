import MultiInput from "./MultiInput";
import { dropdownData } from "../../Data/JobsData";
import { Divider } from "@mantine/core";

const SearchBar = () => {
  return (
    <div className="p-4 mt-3">
      <div className="d-flex gap-1">
        {dropdownData.map((item) => (
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
