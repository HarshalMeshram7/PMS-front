import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";

export default function PlayerDetailsTab() {
    const formik = useFormik({
        initialValues: {
            FirstName: "",
            LastName: "",
            AcademyClub: "",
            TypeOfPlayer: "",
            Gender: "",
            DateOfBirth: "",
            Address: "",
            Phone: "",
            EducationQualification: "",
            Documents: "",
            Photo: "",
            PlayerTeam: "",
            Email: "",
            BasePrice: "",
            PlayingPosition: "",
            TMSITMSApplicable: ""
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
                                    error={Boolean(formik.touched.FirstName && formik.errors.FirstName)}
                                    fullWidth
                                    helperText={formik.touched.FirstName && formik.errors.FirstName}
                                    label="First Name"
                                    margin="dense"
                                    name="FirstName"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.FirstName}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.LastName && formik.errors.LastName)}
                                    fullWidth
                                    helperText={formik.touched.LastName && formik.errors.LastName}
                                    label="Last Name"
                                    margin="dense"
                                    name="LastName"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.LastName}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.AcademyClub && formik.errors.AcademyClub)}
                                    fullWidth
                                    helperText={formik.touched.AcademyClub && formik.errors.AcademyClub}
                                    label="Academy / Club"
                                    margin="dense"
                                    name="AcademyClub"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.AcademyClub}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.TypeOfPlayer && formik.errors.TypeOfPlayer)}
                                    fullWidth
                                    helperText={formik.touched.TypeOfPlayer && formik.errors.TypeOfPlayer}
                                    label="Type Of Player"
                                    margin="dense"
                                    name="TypeOfPlayer"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.TypeOfPlayer}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.Gender && formik.errors.Gender)}
                                    fullWidth
                                    helperText={formik.touched.Gender && formik.errors.Gender}
                                    label="Gender"
                                    margin="dense"
                                    name="Gender"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.Gender}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.DateOfBirth && formik.errors.DateOfBirth)}
                                    fullWidth
                                    helperText={formik.touched.DateOfBirth && formik.errors.DateOfBirth}
                                    label="Date Of Birth"
                                    margin="dense"
                                    name="DateOfBirth"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="date"
                                    value={formik.values.DateOfBirth}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.Address && formik.errors.Address)}
                                    fullWidth
                                    helperText={formik.touched.Address && formik.errors.Address}
                                    label="Address"
                                    margin="dense"
                                    name="Address"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.Address}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.Phone && formik.errors.Phone)}
                                    fullWidth
                                    helperText={formik.touched.Phone && formik.errors.Phone}
                                    label="Phone Number"
                                    margin="dense"
                                    name="Phone"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="number"
                                    value={formik.values.Phone}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.EducationQualification && formik.errors.edu)}
                                    fullWidth
                                    helperText={formik.touched.EducationQualification && formik.errors.edu}
                                    label="Educational Qualification"
                                    margin="dense"
                                    name="EducationQualification"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.EducationQualification}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.Documents && formik.errors.Documents)}
                                    fullWidth
                                    helperText={formik.touched.Documents && formik.errors.Documents}
                                    label="Documents"
                                    margin="dense"
                                    name="Documents"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="file"
                                    value={formik.values.Documents}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.PlayerTeam && formik.errors.PlayerTeam)}
                                    fullWidth
                                    helperText={formik.touched.PlayerTeam && formik.errors.PlayerTeam}
                                    label="Player Team"
                                    margin="dense"
                                    name="PlayerTeam"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.PlayerTeam}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.Photo && formik.errors.Photo)}
                                    fullWidth
                                    helperText={formik.touched.Photo && formik.errors.Photo}
                                    label="Photo"
                                    margin="dense"
                                    name="Photo"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="file"
                                    value={formik.values.Photo}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.Email && formik.errors.Email)}
                                    fullWidth
                                    helperText={formik.touched.Email && formik.errors.Email}
                                    label="Email"
                                    margin="dense"
                                    name="Email"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="email"
                                    value={formik.values.Email}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.BasePrice && formik.errors.BasePrice)}
                                    fullWidth
                                    helperText={formik.touched.BasePrice && formik.errors.BasePrice}
                                    label="Base Price"
                                    margin="dense"
                                    name="BasePrice"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="number"
                                    value={formik.values.BasePrice}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.PlayingPosition && formik.errors.PlayingPosition)}
                                    fullWidth
                                    helperText={formik.touched.PlayingPosition && formik.errors.PlayingPosition}
                                    label="Playing Position"
                                    margin="dense"
                                    name="PlayingPosition"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.PlayingPosition}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.TMSITMSApplicable && formik.errors.TMSITMSApplicable)}
                                    fullWidth
                                    helperText={formik.touched.TMSITMSApplicable && formik.errors.TMSITMSApplicable}
                                    label=" TMS / ITMS Applicable"
                                    margin="dense"
                                    name="TMSITMSApplicable"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.TMSITMSApplicable}
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
