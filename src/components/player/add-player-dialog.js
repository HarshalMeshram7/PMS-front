import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Box,
    Grid,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addAcademy } from "src/services/academyRequest";
import LoadingBox from "src/components/common/loading-box";

const sportsList = [
    {
        value: "football",
        label: "Football"
    },
    {
        value: "cricket",
        label: "Cricket"
    },
    {
        value: "tennis",
        label: "Tennis"
    }
];

export const AddPlayerDialog = ({ open, handleClose }) => {
    const { enqueueSnackbar } = useSnackbar();
    const [loading, setLoading] = useState();

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
        validationSchema: Yup.object({
            FirstName: Yup
                .string()
                .max(100)
                .required("Player's First Name is required"),
            LastName: Yup
                .string()
                .max(100)
                .required("Player's Last Name is required"),
            AcademyClub: Yup
                .string()
            // .required('Required')
            ,
            TypeOfPlayer: Yup
                .string()
            // .required('Required')
            ,
            Address: Yup
                .string()
            // .required('Required')
            ,

            Phone: Yup.string()
                .length(10)
                .matches(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/, 'Phone number is not valid')
                .required("Phone number is required"),
            EducationQualification: Yup
                .string()
                .max(255)
            // .required("Email is required")
            ,
            Documents: Yup
                .string()
                .max(255)
            // .required("Email is required")
            ,
            Photo: Yup
                .string()
                .max(255)
            // .required("Email is required")
            ,
            PlayerTeam: Yup
                .string()
                .max(255)
            // .required("Email is required")
            ,
            Email: Yup
                .string()
                .email("Must be a valid Email")
                .max(255)
                .required("Email is required"),

            BasePrice: Yup
                .string()
                .max(100),
            PlayingPosition: Yup
                .string()
                .max(100),
            TMSITMSApplicable: Yup
                .string()
                .max(100),

        }),
        onSubmit: async (data) => {
            setLoading(true);

            try {
                console.log("**********");
                console.log(data);
                // await addAcademy(data);
                handleClose();
                enqueueSnackbar("Player Added Succesfully", { variant: "success" });
                setLoading(false);

            } catch (error) {
                setLoading(false);
            }
        },
    });

    useEffect(() => {
        if (!open) {
            formik.resetForm();
        }
    }, [open]);

    return (
        <Dialog
            open={open}
            onClose={!loading && handleClose}
            fullWidth
            maxWidth="lg"
            BackdropProps={{
                style: { backgroundColor: "#121212dd" },
            }}
        >
            {loading && <LoadingBox />}
            <form onSubmit={formik.handleSubmit}>
                <DialogTitle>Add New Player</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ marginBottom: 2 }}>
                        Enter the required basic details of the Player below.
                    </DialogContentText>

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

                        {/* <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-helper-label">Sports List</InputLabel>
                                <Select
                                    multiple
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={formik.values.sportsList}
                                    label="Sports List"
                                    name="sportsList"
                                    onChange={formik.handleChange}
                                >
                                    {sportsList?.map((option, key) => (
                                        <MenuItem key={key}
                                            value={option.label}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid> */}

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

                        {/* <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField style={{ display: 'none' }}
                                error={Boolean(formik.touched.logo && formik.errors.logo)}
                                fullWidth
                                helperText={formik.touched.logo && formik.errors.logo}
                                label="Logo"
                                id="uploadLogo"
                                margin="dense"
                                name="logo"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="file"
                                value={formik.values.logo}
                                variant="outlined"
                            />
                            <Button onClick={() => { document.getElementById("uploadLogo").click() }}>Upload Logo</Button>
                        </Grid> */}

                        {/* <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField style={{ display: 'none' }}
                                error={Boolean(formik.touched.banner && formik.errors.banner)}
                                fullWidth
                                helperText={formik.touched.banner && formik.errors.banner}
                                label="Banner"
                                id="uploadBanner"
                                margin="dense"
                                name="banner"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="file"
                                value={formik.values.banner}
                                variant="outlined"
                            />
                            <Button onClick={() => { document.getElementById("uploadBanner").click() }}>Upload Banner</Button>
                        </Grid> */}

                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} >Cancel</Button>
                    <Button type="submit" variant="contained">Add</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};
