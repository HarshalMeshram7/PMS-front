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
    Grid,
    Select,
    MenuItem,
    Box,
    formik,
    Card,
    Divider,
    Container,
    Autocomplete
} from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addAcademy } from "src/services/academyRequest";
import LoadingBox from "src/components/common/loading-box";

const userRole = [
    {
        value: "clubAdmin",
        label: "Club Admin"
    },
    {
        value: "federationAdmin",
        label: "Federation Admin"
    }
];

const federationClubAccess = [
    {
        value: "club1",
        label: "Club 1"
    },
    {
        value: "club2",
        label: "Club 2"
    },
    {
        value: "federation1",
        label: "Federation 1"
    },
    {
        value: "federation2",
        label: "Federation 2"
    }
]

export const AddRefereeDialog = ({ open, handleClose }) => {
    const { enqueueSnackbar } = useSnackbar();
    const [loading, setLoading] = useState();

    const formik = useFormik({
        initialValues: {
            userName: "",
            password: "",
            cnfpassword: "",
            fullName: "",
            address: "",
            email: "",
            phone: "",
            userRole: [],
            federationClubAccess: [],
        },

        validationSchema: Yup.object({
            userName: Yup
                .string()
                .max(100)
                .required("User Name is required"),
            password: Yup
                .string()
                .max(255)
                .required('Password is required'),
            cnfpassword: Yup
                .string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match'),
            fullName: Yup
                .string()
                .max(100)
                .required("User Name is required"),
            address: Yup
                .string()
            // .required('Required')
            ,
            email: Yup
                .string()
                .email("Must be a valid Email")
                .max(255)
                .required("Email is required"),
            phone: Yup.string()
                .length(10)
                .matches(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/, 'Phone number is not valid')
                .required("Phone number is required"),

            userRole: Yup
                .string()
                .max(100)
                .required("Sport List is required"),
            federationClubAccess: Yup
                .string()
                .max(100)
                .required("Federation / Club is required"),
        }),
        
        onSubmit: async (data) => {
            setLoading(true);

            try {

                console.log("**********");
                console.log(data);
                // await addAcademy(data);
                handleClose();
                enqueueSnackbar("User Added Succesfully", { variant: "success" });

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

                <DialogTitle>Add New Refree</DialogTitle>

                <DialogContent>

                    <DialogContentText sx={{ marginBottom: 2 }}>
                        Enter the required basic details of the Refree below.
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
                                error={Boolean(formik.touched.userName && formik.errors.userName)}
                                fullWidth
                                helperText={formik.touched.userName && formik.errors.userName}
                                label="User Name"
                                margin="dense"
                                name="userName"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="text"
                                value={formik.values.userName}
                                variant="outlined"
                            />
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
                            <TextField
                                error={Boolean(formik.touched.fullName && formik.errors.fullName)}
                                fullWidth
                                helperText={formik.touched.fullName && formik.errors.fullName}
                                label="Full Name"
                                margin="dense"
                                name="fullName"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="text"
                                value={formik.values.fullName}
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
                    </Grid>
                </DialogContent>

                <Divider></Divider>

                <DialogContent>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={userRole}
                                renderInput={(params) => <TextField {...params} label="User Role" />}
                            />
                        </Grid>

                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <Autocomplete
                                multiple
                                id="tags-outlined"
                                options={federationClubAccess}
                                getOptionLabel={(option) => option.label}
                                filterSelectedOptions
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Federation / Club Access"
                                        placeholder="Federation / Club Access"
                                    />
                                )}
                            />
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
















