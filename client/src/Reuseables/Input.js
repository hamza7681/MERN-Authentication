import { TextField } from "@mui/material";
import React from "react";

const Input = ({ label, type, value, name, handleChangeInput }) => {
  return (
    <>
      <TextField
        id="standard-basic"
        label={label}
        variant="standard"
        type={type}
        style={{ width: "90%" }}
        value={value}
        name={name}
        onChange={handleChangeInput}
      />
    </>
  );
};

export default Input;
