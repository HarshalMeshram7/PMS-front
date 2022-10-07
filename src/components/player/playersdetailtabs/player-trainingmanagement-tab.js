import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    Grid, TextField, Button, Card, CardContent, MenuItem, FormControl,
    Select, DialogTitle, InputLabel
} from "@mui/material";
import { Divider, Typography } from "@material-ui/core";
import { Male } from "@mui/icons-material";

export default function PlayerTrainingManagementTab() {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            PlanManagement: "",
            GoalSetting: "",         
        },

        validationSchema: Yup.object({

        }),

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
                                    error={Boolean(formik.touched.PlanManagement && formik.errors.PlanManagement)}
                                    fullWidth
                                    helperText={formik.touched.PlanManagement && formik.errors.PlanManagement}
                                    label="Plan Management"
                                    margin="dense"
                                    name="PlanManagement"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.PlanManagement}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.GoalSetting && formik.errors.GoalSetting)}
                                    fullWidth
                                    helperText={formik.touched.GoalSetting && formik.errors.GoalSetting}
                                    label="Goal Setting"
                                    margin="dense"
                                    name="GoalSetting"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.GoalSetting}
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
