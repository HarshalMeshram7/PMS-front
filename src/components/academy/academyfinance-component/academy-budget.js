import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  FormGroup,
  FormControlLabel,
  FormLabel,
  Switch,
  FormControl,
  TextareaAutosize
} from "@mui/material";
import { bool } from "prop-types";

export default function AcademyBudget() {
  const formik = useFormik({
    initialValues: {
      BudgetDetails: "",

    },
    validationSchema: Yup.object({}),

    onSubmit: async (data) => {
      try {
        let finalData = { ...data, approvedmember: approvedmember }
        console.log(finalData);
      } catch (error) {
        console.log(error);
      }
    },
  });


  const [approvedmember, setApprovedmember] = React.useState(false);

  const handleChange = (event) => {
    setApprovedmember(event.target.checked,);
  };


  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <Typography>Approved by Members of The Committee : </Typography>
              </Grid>

              <Grid item md={6} xs={12}>
                <FormControl component="fieldset" variant="standard">
                  {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch checked={approvedmember} onChange={handleChange} name="approvedmember" />
                      }
                      label="Are you a Approved Member?"
                    />

                  </FormGroup>
                </FormControl>
              </Grid>



              <Grid item md={6} xs={12}>
                <Typography>Budget Details : </Typography>
              </Grid>

              <Grid item md={6} xs={12}>
                <TextareaAutosize
                  minRows={6}
                  style={{ width: 200 }}
                  error={Boolean(formik.touched.BudgetDetails && formik.errors.BudgetDetails)}
                  fullWidth
                  helperText={formik.touched.BudgetDetails && formik.errors.BudgetDetails}
                  label="Budget Details"
                  margin="dense"
                  name="BudgetDetails"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="number"
                  value={formik.values.BudgetDetails}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={12} xs={12} textAlign="center">
                <Button type="submit" variant="outlined" color="primary">
                  Save
                </Button>
              </Grid>
              <Grid />
            </Grid>
          </CardContent>
        </Card>
      </form>
    </>
  );
}
