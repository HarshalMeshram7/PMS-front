import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    Grid, TextField, Button, Card, CardContent, MenuItem, FormControl,
    Select, DialogTitle, InputLabel
} from "@mui/material";
import { Divider, Typography } from "@material-ui/core";
import { Male } from "@mui/icons-material";

export default function PlayerDetailsTab() {
    const formik = useFormik({
        enableReinitialize: true,
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
            Facebook: "",
            Twitter: "",
            LinkedIn: "",
            Email: "",
            BasePrice: "",
            PlayingPosition: "",
            TMSITMSApplicable: "",
            ParentName: "",
            ParentAddress: "",
            ParentEmail: "",
            ParentPhone: "",
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
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Gender"
                                        error={Boolean(formik.touched.Gender && formik.errors.Gender)}
                                        fullWidth
                                        helperText={formik.touched.Gender && formik.errors.Gender}
                                        margin="dense"
                                        name="Gender"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.Gender}
                                        variant="outlined"
                                    >
                                        <MenuItem value="male">Male</MenuItem>
                                        <MenuItem value="female">Female</MenuItem>
                                        <MenuItem value="other">Other</MenuItem>
                                    </Select>
                                </FormControl>
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
                                    InputLabelProps={{ shrink: true }}
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
                                    InputLabelProps={{ shrink: true }}
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
                                    InputLabelProps={{ shrink: true }}
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
                                    error={Boolean(formik.touched.Facebook && formik.errors.Facebook)}
                                    fullWidth
                                    helperText={formik.touched.Facebook && formik.errors.Facebook}
                                    label="Facebook"
                                    margin="dense"
                                    name="Facebook"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.Facebook}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.Twitter && formik.errors.Twitter)}
                                    fullWidth
                                    helperText={formik.touched.Twitter && formik.errors.Twitter}
                                    label="Twitter"
                                    margin="dense"
                                    name="Twitter"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.Twitter}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.LinkedIn && formik.errors.Linked)}
                                    fullWidth
                                    helperText={formik.touched.LinkedIn && formik.errors.Linked}
                                    label="LinkedIn"
                                    margin="dense"
                                    name="LinkedIn"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.LinkedIn}
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

                        </Grid>
                        <Divider />

                        <DialogTitle
                            textAlign="center">
                            Parents Details (Optional)
                        </DialogTitle>

                        <Grid container
                            spacing={3}>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.ParentName && formik.errors.ParentName)}
                                    fullWidth
                                    helperText={formik.touched.ParentName && formik.errors.ParentName}
                                    label="Parents Name"
                                    margin="dense"
                                    name="ParentName"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.ParentName}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.ParentAddress && formik.errors.ParentAddress)}
                                    fullWidth
                                    helperText={formik.touched.ParentAddress && formik.errors.ParentAddress}
                                    label="Parents Address"
                                    margin="dense"
                                    name="ParentAddress"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.ParentAddress}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.ParentEmail && formik.errors.ParentEmail)}
                                    fullWidth
                                    helperText={formik.touched.ParentEmail && formik.errors.ParentEmail}
                                    label="Parents Email"
                                    margin="dense"
                                    name="ParentEmail"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="email"
                                    value={formik.values.ParentEmail}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.ParentPhone && formik.errors.ParentPhone)}
                                    fullWidth
                                    helperText={formik.touched.ParentPhone && formik.errors.ParentPhone}
                                    label="Parents Phone Number"
                                    margin="dense"
                                    name="ParentPhone"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="number"
                                    value={formik.values.ParentPhone}
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
