import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";

export default function ClubEvents() {
  const formik = useFormik({
    initialValues: {
      FederationAssociation: "",
      FitnessEvents: "",
      SocialEvents: "",
      AwardFunctions: "",
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
    <>
      <form onSubmit={formik.handleSubmit}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  error={Boolean(formik.touched.FederationAssociation && formik.errors.FederationAssociation)}
                  fullWidth
                  helperText={formik.touched.FederationAssociation && formik.errors.FederationAssociation}
                  label="Federation / Association"
                  margin="dense"
                  name="FederationAssociation"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.FederationAssociation}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  error={Boolean(formik.touched.FitnessEvents && formik.errors.FitnessEvents)}
                  fullWidth
                  helperText={formik.touched.FitnessEvents && formik.errors.FitnessEvents}
                  label="Fitness Events"
                  margin="dense"
                  name="FitnessEvents"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.FitnessEvents}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  error={Boolean(formik.touched.SocialEvents && formik.errors.SocialEvents)}
                  fullWidth
                  helperText={formik.touched.SocialEvents && formik.errors.SocialEvents}
                  label="Social Events"
                  margin="dense"
                  name="SocialEvents"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.SocialEvents}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  error={Boolean(formik.touched.AwardFunctions && formik.errors.AwardFunctions)}
                  fullWidth
                  helperText={formik.touched.AwardFunctions && formik.errors.AwardFunctions}
                  label="Award Functions"
                  margin="dense"
                  name="AwardFunctions"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.AwardFunctions}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
              </Grid>

              <Grid item md={6} xs={12}>
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
