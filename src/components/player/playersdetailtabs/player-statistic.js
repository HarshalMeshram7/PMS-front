import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    Grid, TextField, Button, Card, CardContent, MenuItem, FormControl,
    Select, DialogTitle, InputLabel
} from "@mui/material";
import { Divider, Typography } from "@material-ui/core";
import { Male } from "@mui/icons-material";

export default function PlayerStatisticTab() {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            MatchesPlayed: "",
            PointScore: "",
            PenaltyScore: "",
            Voilations: "",
            Disqualification: "",

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
                                    error={Boolean(formik.touched.MatchesPlayed && formik.errors.MatchesPlayed)}
                                    fullWidth
                                    helperText={formik.touched.MatchesPlayed && formik.errors.MatchesPlayed}
                                    label="Matches Played"
                                    margin="dense"
                                    name="MatchesPlayed"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.MatchesPlayed}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.PointScore && formik.errors.PointScore)}
                                    fullWidth
                                    helperText={formik.touched.PointScore && formik.errors.PointScore}
                                    label="Point Score"
                                    margin="dense"
                                    name="PointScore"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.PointScore}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.PenaltyScore && formik.errors.PenaltyScore)}
                                    fullWidth
                                    helperText={formik.touched.PenaltyScore && formik.errors.PenaltyScore}
                                    label="Penalty Score"
                                    margin="dense"
                                    name="PenaltyScore"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.PenaltyScore}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.Voilations && formik.errors.Voilations)}
                                    fullWidth
                                    helperText={formik.touched.Voilations && formik.errors.Voilations}
                                    label="Voilations"
                                    margin="dense"
                                    name="Voilations"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.Voilations}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.Disqualification && formik.errors.Disqualification)}
                                    fullWidth
                                    helperText={formik.touched.Disqualification && formik.errors.Disqualification}
                                    label="Disqualification"
                                    margin="dense"
                                    name="Disqualification"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.Disqualification}
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
