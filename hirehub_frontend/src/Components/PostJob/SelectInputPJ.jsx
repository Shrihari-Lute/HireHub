import { Combobox, InputBase, ScrollArea, useCombobox } from "@mantine/core";
import { useEffect, useState } from "react";

const SelectInputPJ = ({
  label,
  placeholder,
  options: propOptions = [],
  value: propValue,
  onChange,
}) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(propValue || "");
  const [search, setSearch] = useState(propValue || "");

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  useEffect(() => {
    setData(propOptions);
  }, [propOptions]);

  useEffect(() => {
    if (propValue) {
      setValue(propValue);
      setSearch(propValue);
    }
  }, [propValue]);

  const exactOptionMatch = data.some((item) => item === search);
  const filteredOptions = exactOptionMatch
    ? data
    : data.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase().trim())
      );

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        const finalValue = val === "$create" ? search : val;
        if (val === "$create") setData((curr) => [...curr, search]);

        setValue(finalValue);
        setSearch(finalValue);
        onChange?.(finalValue);

        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          withAsterisk
          label={label}
          labelProps={{ className: "fw-semibold p-2" }}
          value={search}
          placeholder={placeholder}
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onChange={(e) => {
            const val = e.currentTarget.value;
            setSearch(val);
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown();
            setSearch(value || "");
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              combobox.selectActiveOption();
              e.preventDefault();
            }
          }}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollArea.Autosize mah={200} type="scroll">
            {options}
            {!exactOptionMatch && search.trim().length > 0 && (
              <Combobox.Option value="$create">
                + Create {search}
              </Combobox.Option>
            )}
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default SelectInputPJ;
