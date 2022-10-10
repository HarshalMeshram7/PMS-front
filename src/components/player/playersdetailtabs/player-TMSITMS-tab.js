import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";

export default function PlayerTMSITMSTab() {
    const formik = useFormik({
        initialValues: {
            TransferredToWhichClub: "",
            PeriodOfTransfer: "",
            Documentation: "",
            MOU: "",
            Agreement: "",
            PaymentDetails: "",
            
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

                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.TransferredToWhichClub && formik.errors.TransferredToWhichClub)}
                                    fullWidth
                                    helperText={formik.touched.TransferredToWhichClub && formik.errors.TransferredToWhichClub}
                                    label="Transferred To Which Club"
                                    margin="dense"
                                    name="TransferredToWhichClub"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.TransferredToWhichClub}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.PeriodOfTransfer && formik.errors.PeriodOfTransfer)}
                                    fullWidth
                                    helperText={formik.touched.PeriodOfTransfer && formik.errors.PeriodOfTransfer}
                                    label="Period Of Transfer"
                                    margin="dense"
                                    name="PeriodOfTransfer"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.PeriodOfTransfer}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.Documentation && formik.errors.Documentation)}
                                    fullWidth
                                    helperText={formik.touched.Documentation && formik.errors.Documentation}
                                    label="Documentation"
                                    margin="dense"
                                    InputLabelProps={{ shrink: true }}
                                    name="Documentation"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="file"
                                    value={formik.values.Documentation}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.MOU && formik.errors.MOU)}
                                    fullWidth
                                    helperText={formik.touched.MOU && formik.errors.MOU}
                                    label="MOU"
                                    margin="dense"
                                    name="MOU"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.MOU}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.Agreement && formik.errors.Agreement)}
                                    fullWidth
                                    helperText={formik.touched.Agreement && formik.errors.Agreement}
                                    label="Agreement"
                                    margin="dense"
                                    name="Agreement"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.Agreement}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.PaymentDetails && formik.errors.PaymentDetails)}
                                    fullWidth
                                    helperText={formik.touched.PaymentDetails && formik.errors.PaymentDetails}
                                    label="Payment Details"
                                    margin="dense"
                                    name="PaymentDetails"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.PaymentDetails}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item md={12} xs={12} textAlign="center">
                                <Button type="submit" variant="outlined" color="primary">
                                    Save
                                </Button>
                            </Grid>

                        </Grid>

                    </CardContent>
                </Card>
            </form>
        </>
    );
}
