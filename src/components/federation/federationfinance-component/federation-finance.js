import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";

export default function FederationFinance() {
  const formik = useFormik({
    initialValues: {
      GrantFromMinistrySports: "",
      FederationSponsors: "",
      FedrationDonation: "",
      FeesFromClub: "",
      MurchandiceIncome: "",
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
                  error={Boolean(formik.touched.GrantFromMinistrySports && formik.errors.GrantFromMinistrySports)}
                  fullWidth
                  helperText={formik.touched.GrantFromMinistrySports && formik.errors.GrantFromMinistrySports}
                  label="Grant From Ministry Of Sports"
                  margin="dense"
                  name="GrantFromMinistrySports"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.GrantFromMinistrySports}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  error={Boolean(formik.touched.FederationSponsors && formik.errors.FederationSponsors)}
                  fullWidth
                  helperText={formik.touched.FederationSponsors && formik.errors.FederationSponsors}
                  label="Federation Sponsors"
                  margin="dense"
                  name="FederationSponsors"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.FederationSponsors}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  error={Boolean(formik.touched.FedationDonation && formik.errors.FedrationDonation)}
                  fullWidth
                  helperText={formik.touched.FedrationDonation && formik.errors.FedrationDonation}
                  label="Fedration Donation"
                  margin="dense"
                  name="FedrationDonation"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="number"
                  value={formik.values.FedrationDonation}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  error={Boolean(formik.touched.FeesFromClub && formik.errors.FeesFromClub)}
                  fullWidth
                  helperText={formik.touched.FeesFromClub && formik.errors.FeesFromClub}
                  label="Fees From Club"
                  margin="dense"
                  name="FeesFromClub"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="number"
                  value={formik.values.FeesFromClub}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  error={Boolean(formik.touched.MurchandiceIncome && formik.errors.MurchandiceIncome)}
                  fullWidth
                  helperText={formik.touched.MurchandiceIncome && formik.errors.MurchandiceIncome}
                  label="Murchandice Income"
                  margin="dense"
                  name="MurchandiceIncome"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="number"
                  value={formik.values.MurchandiceIncome}
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
