import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    Grid, TextField, Button, Card, CardContent, MenuItem, FormControl,
    Select, DialogTitle, InputLabel
} from "@mui/material";
import { Divider, Typography } from "@material-ui/core";
import { Male } from "@mui/icons-material";

export default function AdministrativeAcademyPlayerTab() {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            Sports: 'Soccer - Academy Player' ,
            Documentation: "",
            Mandate: "",
            AccountInformation: "",

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
                            sx={{ marginBottom: 2 }}
                        >
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
                                    name="Documentation"
                                    onBlur={formik.handleBlur}
                                    InputLabelProps={{ shrink: true }}
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
                                    error={Boolean(formik.touched.AccountInformation && formik.errors.AccountInformation)}
                                    fullWidth
                                    helperText={formik.touched.AccountInformation && formik.errors.AccountInformation}
                                    label="Account Information"
                                    margin="dense"
                                    name="AccountInformation"
                                    InputLabelProps={{ shrink: true }}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="file"
                                    value={formik.values.AccountInformation}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.Mandate && formik.errors.Mandate)}
                                    fullWidth
                                    helperText={formik.touched.Mandate && formik.errors.Mandate}
                                    label="Mandate"
                                    margin="dense"
                                    name="Mandate"
                                    InputLabelProps={{ shrink: true }}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="file"
                                    value={formik.values.Mandate}
                                    variant="outlined"
                                />
                            </Grid>

                        </Grid>
                       
                        <Grid item md={12} xs={12} textAlign="center">
                            <Button sx={{ marginTop: 2 }} type="submit" variant="outlined" color="primary">
                                Save
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>
            </form>
        </>
    );
}
