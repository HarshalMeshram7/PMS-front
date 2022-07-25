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
} from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addAcademy } from "src/services/academyRequest";
import LoadingBox from "src/components/common/loading-box";

export const AddAcademyDialog = ({ open, handleClose }) => {
    const { enqueueSnackbar } = useSnackbar();
    const [loading, setLoading] = useState();

    const formik = useFormik({
        initialValues: {
            academyName: "",
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
            academyName: Yup
                .string()
                .max(100)
                .required("Academy Name is required"),
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
            password: Yup
                .string()
                .max(255)
                .required('Password is required'),
            cnfpassword: Yup
                .string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')

        }),
        onSubmit: async (data) => {
            setLoading(true);
            try {
                // const data = {
                //     academyName,
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
                console.log("*********************");
                console.log(data);
                // await addAcademy(data);
                handleClose();
                enqueueSnackbar("Academy Added Succesfully", { variant: "success" });

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
            BackdropProps={{
                style: { backgroundColor: "#121212dd" },
            }}
        >
            {loading && <LoadingBox />}
            <form onSubmit={formik.handleSubmit}>
                <DialogTitle>Add New Academy</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ marginBottom: 2 }}>
                        Enter the required basic details of the Academy below.
                    </DialogContentText>

                    <TextField
                        error={Boolean(formik.touched.academyName && formik.errors.academyName)}
                        fullWidth
                        helperText={formik.touched.academyName && formik.errors.academyName}
                        label="Name"
                        margin="dense"
                        name="academyName"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="text"
                        value={formik.values.academyName}
                        variant="outlined"
                    />

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
                            <MenuItem value="Football">Football</MenuItem>
                            <MenuItem value="Cricket">Cricket</MenuItem>
                            <MenuItem value="Tennis">Tennis</MenuItem>
                        </Select>
                    </FormControl>

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

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} >Cancel</Button>
                    <Button type="submit" variant="contained">Add</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};
