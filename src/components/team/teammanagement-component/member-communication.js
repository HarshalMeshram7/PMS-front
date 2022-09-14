import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";

export default function MemberCommunication() {
    const formik = useFormik({
        initialValues: {
            TeamLiveChat: "",
            Email: "",
            MobileAppNotification: "",
            AutomatedScheduleReminder: "",
            RSVP: "",
            Announcements: ""
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
                                    error={Boolean(formik.touched.TeamLiveChat && formik.errors.TeamLiveChat)}
                                    fullWidth
                                    helperText={formik.touched.TeamLiveChat && formik.errors.TeamLiveChat}
                                    label="Team Live Chat"
                                    margin="dense"
                                    name="TeamLiveChat"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.TeamLiveChat}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item md={6} xs={12}>
                                <TextField
                                    error={Boolean(formik.touched.Email && formik.errors.Email)}
                                    fullWidth
                                    helperText={formik.touched.Email && formik.errors.Email}
                                    label="Include Team For Tournament"
                                    margin="dense"
                                    name="Email"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="email"
                                    value={formik.values.Email}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item md={6} xs={12}>
                                <TextField
                                    error={Boolean(formik.touched.MobileAppNotification && formik.errors.MobileAppNotification)}
                                    fullWidth
                                    helperText={formik.touched.MobileAppNotification && formik.errors.MobileAppNotification}
                                    label="Mobile App Notification"
                                    margin="dense"
                                    name="MobileAppNotification"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.MobileAppNotification}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item md={6} xs={12}>
                                <TextField
                                    error={Boolean(formik.touched.AutomatedScheduleReminder && formik.errors.AutomatedScheduleReminder)}
                                    fullWidth
                                    helperText={formik.touched.AutomatedScheduleReminder && formik.errors.AutomatedScheduleReminder}
                                    label="Automated Schedule Reminder"
                                    margin="dense"
                                    name="AutomatedScheduleReminder"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.AutomatedScheduleReminder}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item md={6} xs={12}>
                                <TextField
                                    error={Boolean(formik.touched.RSVP && formik.errors.RSVP)}
                                    fullWidth
                                    helperText={formik.touched.RSVP && formik.errors.RSVP}
                                    label="RSVP"
                                    margin="dense"
                                    name="RSVP"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.RSVP}
                                    variant="outlined"
                                />
                            </Grid>


                            <Grid item md={6} xs={12}>
                                <TextField
                                    error={Boolean(formik.touched.Announcements && formik.errors.Announcements)}
                                    fullWidth
                                    helperText={formik.touched.Announcements && formik.errors.Announcements}
                                    label="Announcements"
                                    margin="dense"
                                    name="Announcements"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.Announcements}
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
