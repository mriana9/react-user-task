import React from "react";
import CustomInput from "./shared/CustomInput";
import CustomButton from "./shared/CustomButton";

export default function AddUser() {
  return (
    <>
      <from>
        <div className="mb-3">
          <CustomInput name="name" type="text" />
        </div>
        <div className="mb-3">
          <CustomInput name="email" type="email" />
        </div>
        <div className="mb-3">
          <CustomInput name="phone" type="text" />
        </div>
        <div className="mb-3">
          <CustomInput name="age" type="number" />
        </div>
        <div className="mb-3">
          <CustomInput name="status" type="text" />
        </div>
        <CustomButton text="Submit" type="secondary" />
      </from>
    </>
  );
}
