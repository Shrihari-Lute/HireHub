import React from "react";
import SelectInputPJ from "./SelectInputPJ";
import { fields } from "../../Data/PostJob";
import { Button, TagsInput } from "@mantine/core";
import TextEditor from "./TextEditor";

const PostJob = () => {
  const select = fields;

  return (
    <div className="container py-4">
      <h1 className="text-red-600 fs-1 fw-semibold mb-4">Post Job</h1>
      <div className="row gy-4">
        {select.map((field, index) => (
          <div className="col-12 col-md-6" key={index}>
            <SelectInputPJ {...field} />
          </div>
        ))}
      </div>

      <div className="mt-4">
        <TagsInput
          withAsterisk
          label="Skills"
          labelProps={{ className: "fw-semibold p-2" }}
          placeholder="Enter skill"
          clearable
          acceptValueOnBlur
          splitChars={[",", " ", "|"]}
        />
      </div>

      <div className="mt-4">
        <div className="fw-semibold p-2">Job Description</div>
        <TextEditor />
      </div>

      {/* Buttons */}
      <div className="mt-4 d-flex flex-column flex-sm-row gap-3 justify-content-end">
        <Button
          variant="outline"
          className="text-black btn-green-300"
          color="green"
        >
          Publish Job
        </Button>
        <Button
          variant="outline"
          className="text-black btn-yellow-300"
          color="yellow"
        >
          Save as Draft
        </Button>
      </div>
    </div>
  );
};

export default PostJob;
