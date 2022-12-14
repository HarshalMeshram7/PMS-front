import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid, TextField, Button, Card, 
  FormControl, InputLabel, Select, MenuItem, CardContent } from "@mui/material";
import payment from "../../../../public/static/images/common/payment.png"

export default function PlayerPaymnetTab() {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      FirstName: "",
      LastName: "",
      CreditCardNumber: "",
      ExpiryMonth: "",
      ExpiryYear: "",
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

          {/* <Card>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Payment Plan</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="PaymentPlan"
                      error={Boolean(formik.touched.PaymentPlan && formik.errors.PaymentPlan)}
                      fullWidth
                      helperText={formik.touched.PaymentPlan && formik.errors.PaymentPlan}
                      margin="dense"
                      name="PaymentPlan"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.PaymentPlan}
                      variant="outlined"
                    >
                      <MenuItem value="online">Online</MenuItem>
                      <MenuItem value="offline">Offline</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                
                <Grid item md={6} xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Notification</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Notification"
                      error={Boolean(formik.touched.Notification && formik.errors.Notification)}
                      fullWidth
                      helperText={formik.touched.Notification && formik.errors.Notification}
                      margin="dense"
                      name="Notification"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.Notification}
                      variant="outlined"
                    >
                      <MenuItem value="SMS">SMS</MenuItem>
                      <MenuItem value="Email">Email</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

              </Grid>
            </CardContent>
          </Card> */}

          <Card>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={12} xs={12} textAlign="center" ><img style={{ width: "45vw" }} src={payment.src} alt="paymentlogo" /></Grid>
                <Grid item md={6} xs={12}>
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
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(formik.touched.LastName && formik.errors.LastName)}
                    fullWidth
                    helperText={formik.touched.LastName && formik.errors.LastName}
                    label="Last Name"
                    margin="dense"
                    name="LastName"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.LastName}
                    variant="outlined"
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(formik.touched.CreditCardNumber && formik.errors.CreditCardNumber)}
                    fullWidth
                    helperText={formik.touched.CreditCardNumber && formik.errors.CreditCardNumber}
                    label="Credit Card Number"
                    margin="dense"
                    name="CreditCardNumber"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="number"
                    value={formik.values.CreditCardNumber}
                    variant="outlined"
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(formik.touched.SecurityCode && formik.errors.SecurityCode)}
                    fullWidth
                    helperText={formik.touched.SecurityCode && formik.errors.SecurityCode}
                    label="Security Code"
                    margin="dense"
                    name="SecurityCode"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.SecurityCode}
                    variant="outlined"
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(formik.touched.ExpiryYear && formik.errors.ExpiryYear)}
                    fullWidth
                    helperText={formik.touched.ExpiryYear && formik.errors.ExpiryYear}
                    label="Expiry Year"
                    margin="dense"
                    name="ExpiryYear"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="number"
                    value={formik.values.ExpiryYear}
                    variant="outlined"
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(formik.touched.ExpiryMonth && formik.errors.ExpiryMonth)}
                    fullWidth
                    helperText={formik.touched.ExpiryMonth && formik.errors.ExpiryMonth}
                    label="Expiry Month"
                    margin="dense"
                    name="ExpiryMonth"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.ExpiryMonth}
                    variant="outlined"
                  />
                </Grid>

                <Grid item md={6} xs={12}></Grid>

                <Grid item md={12} xs={12} textAlign="center">
                  <Button type="submit" variant="outlined" color="primary">
                    Pay
                  </Button>
                </Grid>
                <Grid />
              </Grid>
            </CardContent>
          </Card>
        </Card>
      </form>
    </>
  );
}
