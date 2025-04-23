import React from "react";
import CustomButton from "./shared/CustomButton";

export default function User(props) {
  return (
    <>
      <tr>
        <td>{props.id + 1}</td>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>
          <span
            className={`badge ${props.isBlocked ? "bg-danger" : "bg-success"}`}
          >
            {props.isBlocked ? "Blocked" : "Active"}
          </span>
        </td>
        <td>
          <CustomButton text="Details" type="info" />
          <CustomButton text="Edit" type="primary" />
          <CustomButton text="Delete" type="danger" />
        </td>
      </tr>
    </>
  );
}
