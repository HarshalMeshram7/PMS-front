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
    Grid,
    InputLabel,
    Select,
    MenuItem,
    Box,
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

export const AddTeamDialog = ({ open, handleClose }) => {
    const { enqueueSnackbar } = useSnackbar();
    const [loading, setLoading] = useState();

    const formik = useFormik({
        initialValues: {
            teamName: "",
            address: "",
            phone: "",
            email: "",
            personName: "",
            logo: "",
            banner: "",
            accreditation: "",
            facebook: "",
            twitter: "",
            instagram: "",
            sportsList: [],
            password: "",
            cnfpassword: ""
        },
        validationSchema: Yup.object({
            teamName: Yup
                .string()
                .max(100)
                .required("Team Name is required"),
            address: Yup
                .string()
            // .required('Required')
            ,
            phone: Yup.string()
                .length(10)
                .matches(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/, 'Phone number is not valid')
            // .required("Phone number is required")
            ,
            email: Yup
                .string()
                .email("Must be a valid Email")
                .max(255)
            // .required("Email is required")
            ,
            personName: Yup
                .string()
                .max(100)
            // .required("Person Name is required")
            ,
            accreditation: Yup
                .string()
                .max(100),
            accreditation: Yup
                .string()
                .max(100),
            facebook: Yup
                .string()
                .max(100),
            twitter: Yup
                .string()
                .max(100),
            instagram: Yup
                .string()
                .max(100),
            // sportsList: Yup
            //     .string()
            //     .max(100)
            //     // .required("Sport List is required")
            //     ,
            password: Yup
                .string()
                .max(255)
            // .required('Password is required')
            ,
            cnfpassword: Yup
                .string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')

        }),
        onSubmit: async (data) => {
            setLoading(true);

            try {
                // const data = {
                //     teamName,
                //     address,
                //     phone,
                //     email,
                //     personName,
                //     logo,
                //     banner,
                //     accreditation,
                //     facebook,
                //     twitter,
                //     instagram,
                //     sportsList,
                //     password,
                //     cnfpassword,
                // };
                console.log("*********");
                console.log(data);
                // await addTeam(data);
                handleClose();
                enqueueSnackbar("Team Added Succesfully", { variant: "success" });

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
                <DialogTitle>Add New team</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ marginBottom: 2 }}>
                        Enter the required basic details of the team below.
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
                                error={Boolean(formik.touched.teamName && formik.errors.teamName)}
                                fullWidth
                                helperText={formik.touched.teamName && formik.errors.teamName}
                                label="Name"
                                margin="dense"
                                name="teamName"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="text"
                                value={formik.values.teamName}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(formik.touched.address && formik.errors.address)}
                                fullWidth
                                helperText={formik.touched.address && formik.errors.address}
                                label="Address"
                                margin="dense"
                                name="address"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="address"
                                value={formik.values.address}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(formik.touched.phone && formik.errors.phone)}
                                fullWidth
                                helperText={formik.touched.phone && formik.errors.phone}
                                label="Phone Number"
                                margin="dense"
                                name="phone"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="tel"
                                value={formik.values.phone}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(formik.touched.email && formik.errors.email)}
                                fullWidth
                                helperText={formik.touched.email && formik.errors.email}
                                label="Email"
                                margin="dense"
                                name="email"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="email"
                                value={formik.values.email}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(formik.touched.personName && formik.errors.personName)}
                                fullWidth
                                helperText={formik.touched.personName && formik.errors.personName}
                                label="Person Name"
                                margin="dense"
                                name="personName"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="text"
                                value={formik.values.personName}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(formik.touched.accreditation && formik.errors.accreditation)}
                                fullWidth
                                helperText={formik.touched.accreditation && formik.errors.accreditation}
                                label="Accreditation"
                                margin="dense"
                                name="accreditation"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="text"
                                value={formik.values.accreditation}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(formik.touched.facebook && formik.errors.facebook)}
                                fullWidth
                                helperText={formik.touched.facebook && formik.errors.facebook}
                                label="Facebook"
                                margin="dense"
                                name="facebook"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="text"
                                value={formik.values.facebook}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(formik.touched.twitter && formik.errors.twitter)}
                                fullWidth
                                helperText={formik.touched.twitter && formik.errors.twitter}
                                label="Twitter"
                                margin="dense"
                                name="twitter"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="text"
                                value={formik.values.twitter}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(formik.touched.instagram && formik.errors.instagram)}
                                fullWidth
                                helperText={formik.touched.instagram && formik.errors.instagram}
                                label="Instagram"
                                margin="dense"
                                name="instagram"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="text"
                                value={formik.values.instagram}
                                variant="outlined"
                            />
                        </Grid>

                        {/* <TextField
                        error={Boolean(formik.touched.sportsList && formik.errors.sportsList)}
                        fullWidth
                        helperText={formik.touched.sportsList && formik.errors.sportsList}
                        label="Sports List"
                        margin="dense"
                        name="sportsList"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="text"
                        value={formik.values.sportsList}
                        variant="outlined"
                        required
                    /> */}

                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-helper-label">Sports List</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={formik.values.sportsList}
                                    label="Sports List"
                                    name="sportsList"
                                    onChange={formik.handleChange}
                                >
                                    {sportsList?.map((option , key) => (
                                        <MenuItem key={key}
                                            value={option.label}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(formik.touched.password && formik.errors.password)}
                                fullWidth
                                helperText={formik.touched.password && formik.errors.password}
                                label="Create Password"
                                margin="dense"
                                name="password"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="password"
                                value={formik.values.password}
                                variant="outlined"
                                required
                            />
                        </Grid>

                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(formik.touched.cnfpassword && formik.errors.cnfpassword)}
                                fullWidth
                                helperText={formik.touched.cnfpassword && formik.errors.cnfpassword}
                                label="Confirm Password"
                                margin="dense"
                                name="cnfpassword"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="password"
                                value={formik.values.cnfpassword}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField style={{ display: 'none' }}
                                error={Boolean(formik.touched.logo && formik.errors.logo)}
                                fullWidth
                                helperText={formik.touched.logo && formik.errors.logo}
                                label="Logo"
                                id="uploadTeamLogo"
                                margin="dense"
                                name="logo"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="file"
                                value={formik.values.logo}
                                variant="outlined"
                            />
                            <Button onClick={() => { document.getElementById("uploadTeamLogo").click() }}>Upload Logo</Button>
                        </Grid>

                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField style={{ display: 'none' }}
                                error={Boolean(formik.touched.banner && formik.errors.banner)}
                                fullWidth
                                helperText={formik.touched.banner && formik.errors.banner}
                                label="Banner"
                                id="uploadTeamBanner"
                                margin="dense"
                                name="banner"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="file"
                                value={formik.values.banner}
                                variant="outlined"
                            />
                            <Button onClick={() => { document.getElementById("uploadTeamBanner").click() }}>Upload Banner</Button>
                        </Grid>
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
