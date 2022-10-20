import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    Grid, TextField, Button, Card, CardContent, MenuItem, FormControl,
    Select, DialogTitle, InputLabel
} from "@mui/material";
import { Divider, Typography } from "@material-ui/core";
import { Male } from "@mui/icons-material";

export default function AdministrativeLoanPlayerTab({sports}) {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            Sports: sports ,
            DocumentAgreementOrgClub: "",
            AgreementWithPlayer: "",

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
                                    error={Boolean(formik.touched.DocumentAgreementOrgClub && formik.errors.DocumentAgreementOrgClub)}
                                    fullWidth
                                    helperText={formik.touched.DocumentAgreementOrgClub && formik.errors.DocumentAgreementOrgClub}
                                    label="Documentation / Agreement Organization Club"
                                    margin="dense"
                                    name="DocumentAgreementOrgClub"
                                    onBlur={formik.handleBlur}
                                    InputLabelProps={{ shrink: true }}
                                    onChange={formik.handleChange}
                                    type="file"
                                    value={formik.values.DocumentAgreementOrgClub}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.AgreementWithPlayer && formik.errors.AgreementWithPlayer)}
                                    fullWidth
                                    helperText={formik.touched.AgreementWithPlayer && formik.errors.AgreementWithPlayer}
                                    label="Agreement With Player"
                                    margin="dense"
                                    name="AgreementWithPlayer"
                                    InputLabelProps={{ shrink: true }}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="file"
                                    value={formik.values.AgreementWithPlayer}
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
