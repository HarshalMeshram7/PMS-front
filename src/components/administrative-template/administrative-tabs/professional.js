import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    Grid, TextField, Button, Card, CardContent, MenuItem, FormControl,
    Select, DialogTitle, InputLabel
} from "@mui/material";
import { Divider, Typography } from "@material-ui/core";
import { Male } from "@mui/icons-material";

export default function AdministrativeProfessionalTab({sports}) {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            Sports: sports,
            DocumentationAgreement: "",
            FinancialAgreement: "",
            TMSITMS: "",
            NonDocNonAgreement: "",
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
                                    error={Boolean(formik.touched.DocumentationAgreement && formik.errors.DocumentationAgreement)}
                                    fullWidth
                                    helperText={formik.touched.DocumentationAgreement && formik.errors.DocumentationAgreement}
                                    label="Documentation / Agreement"
                                    margin="dense"
                                    name="DocumentationAgreement"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="file"
                                    InputLabelProps={{ shrink: true }}
                                    value={formik.values.DocumentationAgreement}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.FinancialAgreement && formik.errors.FinancialAgreement)}
                                    fullWidth
                                    helperText={formik.touched.FinancialAgreement && formik.errors.FinancialAgreement}
                                    label="Financial Agreement"
                                    margin="dense"
                                    name="FinancialAgreement"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="file"
                                    InputLabelProps={{ shrink: true }}
                                    value={formik.values.FinancialAgreement}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.TMSITMS && formik.errors.TMSITMS)}
                                    fullWidth
                                    helperText={formik.touched.TMSITMS && formik.errors.TMSITMS}
                                    label="TMS / ITMS"
                                    margin="dense"
                                    name="TMSITMS"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="file"
                                    InputLabelProps={{ shrink: true }}
                                    value={formik.values.TMSITMS}
                                    variant="outlined"
                                />
                            </Grid>

                        </Grid>
                        <Divider />

                        <DialogTitle
                            textAlign="center">
                            Non Professional
                        </DialogTitle>

                        <Grid container
                            spacing={3}>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.NonDocNonAgreement && formik.errors.NonDocNonAgreement)}
                                    fullWidth
                                    helperText={formik.touched.NonDocNonAgreement && formik.errors.NonDocNonAgreement}
                                    label="Documentation / Agreement"
                                    margin="dense"
                                    name="NonDocNonAgreement"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="file"
                                    InputLabelProps={{ shrink: true }}
                                    value={formik.values.NonDocNonAgreement}
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
