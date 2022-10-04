import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";

export default function ContractPlayerNonProfessionTab() {
    const formik = useFormik({
        initialValues: {
            Documentation: "",
            MOU: "",
            Agreement: "",
            
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
                                    error={Boolean(formik.touched.Documentation && formik.errors.Documentation)}
                                    fullWidth
                                    helperText={formik.touched.Documentation && formik.errors.Documentation}
                                    label="Documentation"
                                    margin="dense"
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
                                    error={Boolean(formik.touched.Agreement && formik.errors.Agreement)}
                                    fullWidth
                                    helperText={formik.touched.Agreement && formik.errors.Agreement}
                                    label="Agreement"
                                    margin="dense"
                                    name="Agreement"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="file"
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
                                    error={Boolean(formik.touched.MOU && formik.errors.MOU)}
                                    fullWidth
                                    helperText={formik.touched.MOU && formik.errors.MOU}
                                    label="MOU"
                                    margin="dense"
                                    name="MOU"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="file"
                                    value={formik.values.MOU}
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
