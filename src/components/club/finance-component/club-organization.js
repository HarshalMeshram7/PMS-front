import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";

export default function ClubOrganization() {
  const formik = useFormik({
    initialValues: {
    AssociateFederationOrganization:"",
    IncludeTeamTournament:"",
    CreateFixturesTournament:"",
    SelectVenuesTournament:"",
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
              error={Boolean(formik.touched.AssociateFederationOrganization && formik.errors.AssociateFederationOrganization)}
              fullWidth
              helperText={formik.touched.AssociateFederationOrganization && formik.errors.AssociateFederationOrganization}
              label="Associate / Federation Organization"
              margin="dense"
              name="AssociateFederationOrganization"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.AssociateFederationOrganization}
              variant="outlined"
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <TextField
              error={Boolean(formik.touched.IncludeTeamTournament && formik.errors.IncludeTeamTournament)}
              fullWidth
              helperText={formik.touched.IncludeTeamTournament && formik.errors.IncludeTeamTournament}
              label="Include Team For Tournament"
              margin="dense"
              name="IncludeTeamTournament"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.IncludeTeamTournament}
              variant="outlined"
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <TextField
              error={Boolean(formik.touched.CreateFixturesTournament && formik.errors.CreateFixturesTournament)}
              fullWidth
              helperText={formik.touched.CreateFixturesTournament && formik.errors.CreateFixturesTournament}
              label="Create Fixtures For Tournament"
              margin="dense"
              name="CreateFixturesTournament"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.CreateFixturesTournament}
              variant="outlined"
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <TextField
              error={Boolean(formik.touched.SelectVenuesTournament && formik.errors.SelectVenuesTournament)}
              fullWidth
              helperText={formik.touched.SelectVenuesTournament && formik.errors.SelectVenuesTournament}
              label="Select Venues For Tournament"
              margin="dense"
              name="Select Venues For Tournament"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.SelectVenuesTournament}
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
