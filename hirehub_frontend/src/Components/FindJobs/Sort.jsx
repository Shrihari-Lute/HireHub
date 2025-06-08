import { useState } from "react";
import { Combobox, useCombobox } from "@mantine/core";
import { IconAdjustments } from "@tabler/icons-react";

const filterOptions = [
  "Relevance",
  "Most Recent",
  "Salary (Low to High)",
  "Salary (High to Low)",
];

const Sort = () => {
  const [selectedItem, setSelectedItem] = useState("Relevance");
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = filterOptions.map((item) => (
    <Combobox.Option className="text-muted" value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <Combobox
        store={combobox}
        width={180}
        position="bottom-start"
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <div
            role="button"
            title="Sort Options"
            onClick={() => combobox.toggleDropdown()}
            className="text-black border rounded p-2 d-flex align-items-center justify-content-between gap-2"
            style={{ minWidth: "200px" }}
          >
            {selectedItem}
            <div className="bg-warning text-black d-flex align-items-center justify-content-center rounded-circle icon-btn cursor-pointer">
              <IconAdjustments className="w-75 h-75 cursor-pointer" />
            </div>
          </div>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
};

export default Sort;
