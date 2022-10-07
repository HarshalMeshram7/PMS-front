import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    Grid, TextField, Button, Card, CardContent, MenuItem, FormControl,
    Select, DialogTitle, InputLabel
} from "@mui/material";
import { Divider, Typography } from "@material-ui/core";
import { Male } from "@mui/icons-material";

export default function PlayerFitnessTab() {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            PhysicalFitnessInfo: "",
            LaboratoryInfo: "",
            PastMedication: "",
            CurrentMedication: "",
            Injuries: "",
            DietPlan: "",
            TestDetails: "",
            TestConductedDate: "",
            TestResult: "",
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
                                    error={Boolean(formik.touched.PhysicalFitnessInfo && formik.errors.PhysicalFitnessInfo)}
                                    fullWidth
                                    helperText={formik.touched.PhysicalFitnessInfo && formik.errors.PhysicalFitnessInfo}
                                    label="Physical Fitness Infomation"
                                    margin="dense"
                                    name="PhysicalFitnessInfo"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.PhysicalFitnessInfo}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.LaboratoryInfo && formik.errors.LaboratoryInfo)}
                                    fullWidth
                                    helperText={formik.touched.LaboratoryInfo && formik.errors.LaboratoryInfo}
                                    label="Laboratory Information"
                                    margin="dense"
                                    name="LaboratoryInfo"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.LaboratoryInfo}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.PastMedication && formik.errors.PastMedication)}
                                    fullWidth
                                    helperText={formik.touched.PastMedication && formik.errors.PastMedication}
                                    label="Past Medication"
                                    margin="dense"
                                    name="PastMedication"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.PastMedication}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.CurrentMedication && formik.errors.CurrentMedication)}
                                    fullWidth
                                    helperText={formik.touched.CurrentMedication && formik.errors.CurrentMedication}
                                    label="Type Of Player"
                                    margin="dense"
                                    name="CurrentMedication"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.CurrentMedication}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Injuries</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Injuries"
                                        error={Boolean(formik.touched.Injuries && formik.errors.Injuries)}
                                        fullWidth
                                        helperText={formik.touched.Injuries && formik.errors.Injuries}
                                        margin="dense"
                                        name="Injuries"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.Injuries}
                                        variant="outlined"
                                    >
                                        <MenuItem value="Knee Injury">Knee Injury</MenuItem>
                                        <MenuItem value="Elbow Injury">Elbow Injury</MenuItem>
                                        <MenuItem value="other">Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Diet Plan</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="DietPlan"
                                        error={Boolean(formik.touched.DietPlan && formik.errors.DietPlan)}
                                        fullWidth
                                        helperText={formik.touched.DietPlan && formik.errors.DietPlan}
                                        margin="dense"
                                        name="DietPlan"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.DietPlan}
                                        variant="outlined"
                                    >
                                        <MenuItem value="Breakfast">Breakfast</MenuItem>
                                        <MenuItem value="Lunch">Lunch</MenuItem>
                                        <MenuItem value="Dinner">Dinner</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                        </Grid>
                        <Divider />

                        <DialogTitle
                            textAlign="center">
                            Fitness Test Advised
                        </DialogTitle>

                        <Grid container
                            spacing={3}>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.TestDetails && formik.errors.TestDetails)}
                                    fullWidth
                                    helperText={formik.touched.TestDetails && formik.errors.TestDetails}
                                    label="Test Details"
                                    margin="dense"
                                    name="TestDetails"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.TestDetails}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.TestConductedDate && formik.errors.TestConductedDate)}
                                    fullWidth
                                    helperText={formik.touched.TestConductedDate && formik.errors.TestConductedDate}
                                    label="Test Conducted Date"
                                    margin="dense"
                                    name="TestConductedDate"
                                    onBlur={formik.handleBlur}
                                    InputLabelProps={{ shrink: true }}
                                    onChange={formik.handleChange}
                                    type="date"
                                    value={formik.values.TestConductedDate}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.TestResult && formik.errors.TestResult)}
                                    fullWidth
                                    helperText={formik.touched.TestResult && formik.errors.TestResult}
                                    label="Test Result"
                                    margin="dense"
                                    name="TestResult"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.TestResult}
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
