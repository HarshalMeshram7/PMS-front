import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    Grid, TextField, Button, Card, CardContent, MenuItem, FormControl,
    Select, DialogTitle, InputLabel
} from "@mui/material";
import { Divider, Typography } from "@material-ui/core";
import { Male } from "@mui/icons-material";

export default function PlayerTrainingModuleTab() {
    const formik = useFormik({
        initialValues: {
            ShortTermTraining: "",
            LongTermTraining: "",
            SpecialTraining: "",
           
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
                                    error={Boolean(formik.touched.ShortTermTraining && formik.errors.ShortTermTraining)}
                                    fullWidth
                                    helperText={formik.touched.ShortTermTraining && formik.errors.ShortTermTraining}
                                    label="Short Term Training"
                                    margin="dense"
                                    name="ShortTermTraining"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.ShortTermTraining}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.LongTermTraining && formik.errors.LongTermTraining)}
                                    fullWidth
                                    helperText={formik.touched.LongTermTraining && formik.errors.LongTermTraining}
                                    label="Long Term Training"
                                    margin="dense"
                                    name="LongTermTraining"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.LongTermTraining}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.SpecialTraining && formik.errors.SpecialTraining)}
                                    fullWidth
                                    helperText={formik.touched.SpecialTraining && formik.errors.SpecialTraining}
                                    label="Special Training"
                                    margin="dense"
                                    name="SpecialTraining"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.SpecialTraining}
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
