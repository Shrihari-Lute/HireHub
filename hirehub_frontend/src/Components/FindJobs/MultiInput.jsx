import React, { useEffect, useState } from "react";
import {
  Combobox,
  Group,
  Input,
  Pill,
  PillsInput,
  Checkbox,
  useCombobox,
} from "@mantine/core";

const MultiInput = ({ title, icon: Icon, options }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState([]);

  useEffect(() => {
    setData(options);
  }, [options]);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex("active"),
  });

  const exactOptionMatch = data.some((item) => item === search);

  const handleValueSelect = (val) => {
    setSearch("");
    if (val === "$create") {
      setData((prev) => [...prev, search]);
      setValue((prev) => [...prev, search]);
    } else {
      setValue((prev) =>
        prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
      );
    }
  };

  const handleValueRemove = (val) => {
    setValue((prev) => prev.filter((v) => v !== val));
  };

  const values = value.slice(0, 1).map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  const filteredOptions = data
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option key={item} value={item} active={value.includes(item)}>
        <Group gap="sm">
          <Checkbox
            className="small"
            checked={value.includes(item)}
            onChange={() => {}}
            tabIndex={-1}
            aria-hidden
            style={{ pointerEvents: "none" }}
          />
          <span>{item}</span>
        </Group>
      </Combobox.Option>
    ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={handleValueSelect}
      withinPortal={false}
    >
      <Combobox.DropdownTarget>
        <PillsInput
          className="w-100"
          variant="unstyled"
          leftSection={
            <div className="bg-warning text-black d-flex align-items-center justify-content-center rounded-circle icon-btn">
              <Icon className="w-75 h-75" />
            </div>
          }
          rightSection={
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                combobox.toggleDropdown();
              }}
            >
              <Combobox.Chevron />
            </div>
          }
          onClick={() => combobox.toggleDropdown()}
        >
          <Pill.Group>
            {value.length > 0 ? (
              <>
                {values}
                {value.length > 1 && <Pill>+{value.length - 1} more</Pill>}
              </>
            ) : (
              <Input.Placeholder className="ms-1 ">{title}</Input.Placeholder>
            )}
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Search
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          placeholder={`Search ${title.toLowerCase()}`}
        />
        <Combobox.Options>
          {filteredOptions}
          {!exactOptionMatch && search.trim().length > 0 && (
            <Combobox.Option value="$create">+ Create {search}</Combobox.Option>
          )}
          {exactOptionMatch &&
            search.trim().length > 0 &&
            filteredOptions.length === 0 && (
              <Combobox.Empty>Nothing found</Combobox.Empty>
            )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default MultiInput;
