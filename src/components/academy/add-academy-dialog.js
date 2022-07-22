import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
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
        },
        validationSchema: Yup.object({
            academyName: Yup.string().max(100).required("Academy Name is required"),
            email: Yup.string().email("Must be a valid Email").max(255).required("Email is required"),
            phone: Yup.string()
                .length(10)
                .matches(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/, 'Phone number is not valid')
                .required("Phone number is required"),
        }),
        onSubmit: async ({ academyName, address, phone, email, personName, logo, accreditation, facebook,twitter,instagram,sportsList }) => {
            setLoading(true);

            try {
                const data = {
                    academyName,
                    address,
                    phone,
                    email,
                    personName,
                    logo,
                    banner,
                    accreditation,
                    facebook,
                    twitter,
                    instagram,
                    sportsList,
                };
                if (name && email && phone) {
                    // await addAcademy(data);
                    handleClose();
                    enqueueSnackbar("Academy Added Succesfully", { variant: "success" });
                }
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
                        name="name"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="text"
                        value={formik.values.academyName}
                        variant="outlined"
                        required
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
                        required
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
                        required
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">ADD ACADEMY</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};
