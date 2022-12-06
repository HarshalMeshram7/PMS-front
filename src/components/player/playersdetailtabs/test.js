import { TextField } from "@mui/material";
import React from "react";

export default function TestTab({ formik }) {
  return (
    <div>
      <TextField
        error={Boolean(formik.touched.FirstName && formik.errors.FirstName)}
        fullWidth
        helperText={formik.touched.FirstName && formik.errors.FirstName}
        label="First Name"
        margin="dense"
        name="FirstName"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        type="text"
        value={formik.values.FirstName}
        variant="outlined"
      />
      <button onClick={formik.handleSubmit}>submit</button>
    </div>
  );
}
