import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";

export default function ClubStatistic() {
    const formik = useFormik({
        initialValues: {
            MatchPlayedByClubTeams: "",
            PointScoreByClubTeams: "",
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
                                    error={Boolean(formik.touched.MatchPlayedByClubTeams && formik.errors.MatchPlayedByClubTeams)}
                                    fullWidth
                                    helperText={formik.touched.MatchPlayedByClubTeams && formik.errors.MatchPlayedByClubTeams}
                                    label="Match Played By Club Teams"
                                    margin="dense"
                                    name="MatchPlayedByClubTeams"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.MatchPlayedByClubTeams}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item md={6} xs={12}>
                                <TextField
                                    error={Boolean(formik.touched.PointScoreByClubTeams && formik.errors.PointScoreByClubTeams)}
                                    fullWidth
                                    helperText={formik.touched.PointScoreByClubTeams && formik.errors.PointScoreByClubTeams}
                                    label="Point Score By Club Teams"
                                    margin="dense"
                                    name="PointScoreByClubTeams"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.PointScoreByClubTeams}
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
