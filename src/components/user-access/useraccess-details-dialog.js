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
  Autocomplete,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import LoadingBox from "src/components/common/loading-box";


export const UserAccessDetailsDialog = ({ open, handleClose, user }) => {

    const { enqueueSnackbar } = useSnackbar();
    const [loading, setLoading] = useState();
    const [access, setAccess] = useState([]);


//   console.log(user);
  
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      userName: user?.user_info?.userName,
      password: "Monish@1995",
      cnfpassword: "Monish@1995",
      fullName: user?.fullName,
      address: user?.user_info?.address || "asda",
      email: user?.user_info?.eMail,
      phone: user?.user_info?.mobileNo,
      userRole: user?.userTypes_list || 0,
      userAccess: [],
    },

    validationSchema: Yup.object({
      userName: Yup.string().max(100).required("User Name is required"),
      password: Yup.string().max(255).required("Password is required"),
      cnfpassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match"),
      fullName: Yup.string().max(100).required("User Name is required"),
      address: Yup.string(),
      // .required('Required')
      email: Yup.string().email("Must be a valid Email").max(255).required("Email is required"),
      phone: Yup.string()
        .length(10)
        .matches(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/, "Phone number is not valid")
        .required("Phone number is required"),

    }),

    onSubmit: async (data) => {
      setLoading(true);
      try {
        console.log("**********");
        console.log(data);
        // await addAcademy(data);
        // handleClose();
        // enqueueSnackbar("User Updated Succesfully", { variant: "success" });
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    },
  });

 const handleRoleChange = (e , value) =>{
    if(!value){
        setAccess([]);
    }
    if(value?.ID === 1 ){
        setAccess([{"ID":0,"name":"All Access"}]);
    }
    if(value?.ID === 2 || value?.ID === 3){
        setAccess(user?.federation_list);
    }
    
    if(value?.ID === 4 || value?.ID === 5){
        setAccess(user?.club_list);
    }
    
    if(value?.ID === 6 || value?.ID === 7){
        setAccess(user?.team_list);
    }
    
    if(value?.ID === 8){
        setAccess(user?.federation_list);
    }
    if(value?.ID === 9){
        setAccess(user?.federation_list);
    }
    if(value?.ID === 10){
        setAccess(user?.federation_list);
    }
    

 }

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
        <DialogTitle>User Details</DialogTitle>

        <DialogContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
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

            <Grid item md={6} xs={12}>
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

            <Grid item md={6} xs={12}>
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

            <Grid item md={6} xs={12}>
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

            <Grid item md={6} xs={12}>
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

            <Grid item md={6} xs={12}>
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

            <Grid item md={6} xs={12}>
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
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <Autocomplete
                disablePortal
                name="userRole"
                id="userRole"
                onChange={handleRoleChange}
                options={formik.values.userRole || []}
                getOptionLabel={(option) => option.Description}
                renderInput={(params) => <TextField {...params} label="User Role" />}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <Autocomplete
                multiple
                value={formik.values.userAccess}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="userAccess"
                name="userAccess"
                options={access || []}
                getOptionLabel={(option) => option?.name}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Access"
                    placeholder="Access"
                  />
                )}
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
