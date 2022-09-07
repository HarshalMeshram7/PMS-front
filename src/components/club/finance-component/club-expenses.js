import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";

export default function ClubExpenses() {
  const formik = useFormik({
    initialValues: {
      PlayersSalary: "",
      RunningExpenses: "",
      RepairingStructureFacility: "",
      Media: "",
      StaffExpenses: "",
    },
    validationSchema: Yup.object({}),

    onSubmit: async (data) => {
      try {
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <TextField
              error={Boolean(formik.touched.PlayersSalary && formik.errors.PlayersSalary)}
              fullWidth
              helperText={formik.touched.PlayersSalary && formik.errors.PlayersSalary}
              label="Players Salary"
              margin="dense"
              name="PlayersSalary"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.PlayersSalary}
              variant="outlined"
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <TextField
              error={Boolean(formik.touched.RunningExpenses && formik.errors.RunningExpenses)}
              fullWidth
              helperText={formik.touched.RunningExpenses && formik.errors.RunningExpenses}
              label="Running Expenses"
              margin="dense"
              name="RunningExpenses"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.RunningExpenses}
              variant="outlined"
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <TextField
              error={Boolean(formik.touched.RepairingStructureFacility && formik.errors.RepairingStructureFacility)}
              fullWidth
              helperText={formik.touched.RepairingStructureFacility && formik.errors.RepairingStructureFacility}
              label="Repairing Structure / Facility"
              margin="dense"
              name="RepairingStructureFacility"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.RepairingStructureFacility}
              variant="outlined"
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <TextField
              error={Boolean(formik.touched.Media && formik.errors.Media)}
              fullWidth
              helperText={formik.touched.Media && formik.errors.Media}
              label="Media"
              margin="dense"
              name="Media"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.Media}
              variant="outlined"
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <TextField
              error={Boolean(formik.touched.StaffExpenses && formik.errors.StaffExpenses)}
              fullWidth
              helperText={formik.touched.StaffExpenses && formik.errors.StaffExpenses}
              label="Staff Expenses"
              margin="dense"
              name="StaffExpenses"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.StaffExpenses}
              variant="outlined"
            />
          </Grid>

          <Grid item md={6} xs={12}>
          </Grid>

          <Grid item md={6} xs={12}>
          </Grid>

          <Grid item md={12} xs={12} textAlign="center">
            <Button variant="outlined" color="primary">
              Save
            </Button>
          </Grid>
          <Grid />
        </Grid>
      </CardContent>
    </Card>
  );
}
