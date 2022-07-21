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

export const AddAcademyDialog = ({ open, handleClose}) => {
    const { enqueueSnackbar } = useSnackbar();
    const [loading, setLoading] = useState();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phoneNumber: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().max(100).required("Name is required"),
            email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
            phoneNumber: Yup.string()
                .length(10)
                .matches(new RegExp("[0-9]{7}"))
                .required("Phone number is required"),
        }),
        onSubmit: async ({ name, email, phoneNumber }) => {
            setLoading(true);

            try {
                const data = {
                    name: name,
                    email: email,
                    mobile: phoneNumber,
                };
                if (name && email && phoneNumber) {
                    await addAcademy(data);
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
                        error={Boolean(formik.touched.name && formik.errors.name)}
                        fullWidth
                        helperText={formik.touched.name && formik.errors.name}
                        label="Name"
                        margin="dense"
                        name="name"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="text"
                        value={formik.values.name}
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
                        error={Boolean(formik.touched.phoneNumber && formik.errors.phoneNumber)}
                        fullWidth
                        helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                        label="Phone Number"
                        margin="dense"
                        name="phoneNumber"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="tel"
                        value={formik.values.phoneNumber}
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
