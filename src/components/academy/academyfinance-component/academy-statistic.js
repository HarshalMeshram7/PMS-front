import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";

export default function AcademyStatistic() {
    const formik = useFormik({
        initialValues: {
            MatchPlayedByAcademyTeams: "",
            PointScoreByAcademyTeams: "",
            CreateFixturesForTournament: "",
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
                                    error={Boolean(formik.touched.MatchPlayedByAcademyTeams && formik.errors.MatchPlayedByAcademyTeams)}
                                    fullWidth
                                    helperText={formik.touched.MatchPlayedByAcademyTeams && formik.errors.MatchPlayedByAcademyTeams}
                                    label="Match Played By Academy Teams"
                                    margin="dense"
                                    name="MatchPlayedByAcademyTeams"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.MatchPlayedByAcademyTeams}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item md={6} xs={12}>
                                <TextField
                                    error={Boolean(formik.touched.PointScoreByAcademyTeams && formik.errors.PointScoreByAcademyTeams)}
                                    fullWidth
                                    helperText={formik.touched.PointScoreByAcademyTeams && formik.errors.PointScoreByAcademyTeams}
                                    label="Point Score By Academy Teams"
                                    margin="dense"
                                    name="PointScoreByAcademyTeams"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.PointScoreByAcademyTeams}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item md={6} xs={12}>
                                <TextField
                                    error={Boolean(formik.touched.CreateFixturesForTournament && formik.errors.CreateFixturesForTournament)}
                                    fullWidth
                                    helperText={formik.touched.CreateFixturesForTournament && formik.errors.CreateFixturesForTournament}
                                    label="Create Fixtures For Tournament"
                                    margin="dense"
                                    name="CreateFixturesForTournament"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.CreateFixturesForTournament}
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
