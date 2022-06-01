import { TextField } from "@mui/material";
import React from "react";

const Input = ({label,type}) => {
  return (
    <>
      <TextField id="standard-basic" label={label} variant="standard" type={type}/>
    </>
  );
};

export default Input;
