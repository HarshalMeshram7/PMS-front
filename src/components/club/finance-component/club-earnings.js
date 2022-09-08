import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";

export default function ClubEarning() {
  const formik = useFormik({
    initialValues: {
    SponsorForClub:"",
    MembershipBasedIncomeFromFans:"",
    ShareValueIncome:"",
    LogoTrademarkBrandingIncome:"",
    PlayersTransferIncome:"",
    IncomeFromRent:"",
    PriceMoneyFromTheCompetition:"",
    TvMediaOttRights:""
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
              error={Boolean(formik.touched.SponsorForClub && formik.errors.SponsorForClub)}
              fullWidth
              helperText={formik.touched.SponsorForClub && formik.errors.SponsorForClub}
              label="Sponsor For Club"
              margin="dense"
              name="SponsorForClub"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.SponsorForClub}
              variant="outlined"
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <TextField
              error={Boolean(formik.touched.MembershipBasedIncomeFromFans && formik.errors.MembershipBasedIncomeFromFans)}
              fullWidth
              helperText={formik.touched.MembershipBasedIncomeFromFans && formik.errors.MembershipBasedIncomeFromFans}
              label="Membership Based Income From Fans"
              margin="dense"
              name="MembershipBasedIncomeFromFans"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.MembershipBasedIncomeFromFans}
              variant="outlined"
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <TextField
              error={Boolean(formik.touched.ShareValueIncome && formik.errors.ShareValueIncome)}
              fullWidth
              helperText={formik.touched.ShareValueIncome && formik.errors.ShareValueIncome}
              label="Share Value Income"
              margin="dense"
              name="ShareValueIncome"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="number"
              value={formik.values.ShareValueIncome}
              variant="outlined"
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <TextField
              error={Boolean(formik.touched.LogoTrademarkBrandingIncome && formik.errors.LogoTrademarkBrandingIncome)}
              fullWidth
              helperText={formik.touched.LogoTrademarkBrandingIncome && formik.errors.LogoTrademarkBrandingIncome}
              label="Logo / Trademark / Branding Income"
              margin="dense"
              name="LogoTrademarkBrandingIncome"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="number"
              value={formik.values.LogoTrademarkBrandingIncome}
              variant="outlined"
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <TextField
              error={Boolean(formik.touched.PlayersTransferIncome && formik.errors.PlayersTransferIncome)}
              fullWidth
              helperText={formik.touched.PlayersTransferIncome && formik.errors.PlayersTransferIncome}
              label="Players Transfer Income"
              margin="dense"
              name="PlayersTransferIncome"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="number"
              value={formik.values.PlayersTransferIncome}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              error={Boolean(formik.touched.IncomeFromRent && formik.errors.IncomeFromRent)}
              fullWidth
              helperText={formik.touched.IncomeFromRent && formik.errors.IncomeFromRent}
              label="Income From Rent"
              margin="dense"
              name="IncomeFromRent"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="number"
              value={formik.values.IncomeFromRent}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              error={Boolean(formik.touched.PriceMoneyFromTheCompetition && formik.errors.PriceMoneyFromTheCompetition)}
              fullWidth
              helperText={formik.touched.PriceMoneyFromTheCompetition && formik.errors.PriceMoneyFromTheCompetition}
              label="Price Money From The Competition"
              margin="dense"
              name="PriceMoneyFromTheCompetition"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="number"
              value={formik.values.PriceMoneyFromTheCompetition}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              error={Boolean(formik.touched.TvMediaOttRights && formik.errors.TvMediaOttRights)}
              fullWidth
              helperText={formik.touched.TvMediaOttRights && formik.errors.TvMediaOttRights}
              label="TV / Media / OTT Rights"
              margin="dense"
              name="TvMediaOttRights"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.TvMediaOttRights}
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
