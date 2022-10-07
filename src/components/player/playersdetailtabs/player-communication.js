import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    Grid, TextField, Button, Card, CardContent, MenuItem, FormControl,
    Select, DialogTitle, InputLabel
} from "@mui/material";
import { Divider, Typography } from "@material-ui/core";
import { Male } from "@mui/icons-material";

export default function PlayerCommunicationTab() {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            Coaches: "",
            TeamMember: "",
            GroupMessaging: "",
            LiveChat: "",
            NotificationRemainder: "",

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
                                    error={Boolean(formik.touched.Coaches && formik.errors.Coaches)}
                                    fullWidth
                                    helperText={formik.touched.Coaches && formik.errors.Coaches}
                                    label="Coaches"
                                    margin="dense"
                                    name="Coaches"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.Coaches}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.TeamMember && formik.errors.TeamMember)}
                                    fullWidth
                                    helperText={formik.touched.TeamMember && formik.errors.TeamMember}
                                    label="Team Member"
                                    margin="dense"
                                    name="TeamMember"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.TeamMember}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.GroupMessaging && formik.errors.GroupMessaging)}
                                    fullWidth
                                    helperText={formik.touched.GroupMessaging && formik.errors.GroupMessaging}
                                    label="Group Messaging"
                                    margin="dense"
                                    name="GroupMessaging"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.GroupMessaging}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.LiveChat && formik.errors.LiveChat)}
                                    fullWidth
                                    helperText={formik.touched.LiveChat && formik.errors.LiveChat}
                                    label="Live Chat"
                                    margin="dense"
                                    name="LiveChat"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.LiveChat}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.NotificationRemainder && formik.errors.NotificationRemainder)}
                                    fullWidth
                                    helperText={formik.touched.NotificationRemainder && formik.errors.NotificationRemainder}
                                    label="Notification Remainder"
                                    margin="dense"
                                    name="NotificationRemainder"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.NotificationRemainder}
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
