import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";

export default function FederationOrganization() {
    const formik = useFormik({
        initialValues: {
            SelectVenuesTournament: "",
            IncludeClubsTournament: "",
            CreateFixturesTournament: "",
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
                                    error={Boolean(formik.touched.SelectVenuesTournament && formik.errors.SelectVenuesTournament)}
                                    fullWidth
                                    helperText={formik.touched.SelectVenuesTournament && formik.errors.SelectVenuesTournament}
                                    label="Select Venues For Tournament"
                                    margin="dense"
                                    name="SelectVenuesTournament"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.SelectVenuesTournament}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item md={6} xs={12}>
                                <TextField
                                    error={Boolean(formik.touched.IncludeClubsTournament && formik.errors.IncludeClubsTournament)}
                                    fullWidth
                                    helperText={formik.touched.IncludeClubsTournament && formik.errors.IncludeClubsTournament}
                                    label="Include Clubs For Tournament"
                                    margin="dense"
                                    name="IncludeClubsTournament"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.IncludeClubsTournament}
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
