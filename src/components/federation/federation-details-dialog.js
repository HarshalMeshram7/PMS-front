import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Divider,
    Card,
    CardContent,
    CardActions,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Avatar
} from "@mui/material";
import { useEffect, useState } from "react";
import LoadingBox from "src/components/common/loading-box";
import { PlayerListResults } from "src/components/player/player-list-results";
import { players } from "../../__mocks__/players.js";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSnackbar } from "notistack";
import { updateFederation } from "src/services/federationRequest.js";


export const FederationDetailsDialog = ({ open, handleClose, federation, mutate }) => {
    const { enqueueSnackbar } = useSnackbar();
    const user = {
        avatar: federation.Logo,
        city: federation.Address,
        country: 'USA',
        jobTitle: 'Senior Developer',
        name: federation.Federation,
        timezone: 'GTM-7'
    };
    const [loading, setLoading] = useState();
    // console.log(federation);
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: federation.ID,
            federation: federation.Federation,
            address: federation.Address,
            phone: federation.Phone,
            email: federation.Email,
            password: federation.Password,
            recoveryEMail: federation.RecoveryEMail,
            contactPersonName: federation.ContactPersonName,
            logo: "",
            banner: "",
            accreditation: federation.Accreditation,
            facebook: federation.Facebook,
            twitter: federation.Twitter,
            instagram: federation.Instagram
        },
        validationSchema: Yup.object({
            // federation: Yup
            //     .string()
            //     .max(100)
            //     .required("federation Name is required"),
            // address: Yup
            //     .string()
            // // .required('Required')
            // ,
            // phone: Yup.string()
            //     .length(10)
            //     .matches(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/, 'Phone number is not valid')
            // // .required("Phone number is required")
            // ,
            // contactPersonName: Yup
            //     .string()
            //     .max(100)
            // .required("Person Name is required")
            // ,
            // accreditation: Yup
            //     .string()
            //     .max(100),
            // facebook: Yup
            //     .string()
            //     .max(100),
            // twitter: Yup
            //     .string()
            //     .max(100),
            // instagram: Yup
            //     .string()
            //     .max(100),
        }),

        onSubmit: async (data) => {
            setLoading(true);
            try {
                console.log(data);
                await updateFederation(data);
                handleClose();
                enqueueSnackbar("Federation Updated Succesfully", { variant: "success" });
                mutate();
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        },
    });

    const handleDelete = (data) => {
        setLoading(true);
        try {
            console.log(data);
            // deletefederation(data).then((response) => {
            //     if (response.status == "success") {
            handleClose();
            enqueueSnackbar("federation Deleted Succesfully", { variant: "success" });
            //         mutate();
            setLoading(false);
            //     }
            //     else {
            //         handleClose();
            //         enqueueSnackbar(`Error : ${response.message}`, { variant: "error" });
            //         setLoading(false);
            //     }
            // });
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    return (
        <Dialog
            open={open}
            onClose={!loading && handleClose}
            fullWidth
            maxWidth="xl"
            BackdropProps={{
                style: { backgroundColor: "#121212dd" },
            }}
        >
            {loading && <LoadingBox />}
            <DialogContent style={{ margin: 0, padding: 0 }} >
                <form onSubmit={formik.handleSubmit}>
                    <Box
                        component="main"
                        sx={{
                            flexGrow: 1,
                        }}
                    >
                        <div style={{
                            width: "100%",
                            height: "200px",
                            marginBottom: "-100px",
                            background: `url(${federation.Banner})center center`,
                        }}></div>

                        <Container maxWidth="lg">
                            <Grid
                                container
                                spacing={3}
                            >
                                <Grid
                                    item
                                    lg={4}
                                    md={6}
                                    xs={12}
                                >
                                    {/* Profile */}
                                    <Card >
                                        <CardContent>
                                            <Box
                                                sx={{
                                                    alignItems: 'center',
                                                    display: 'flex',
                                                    flexDirection: 'column'
                                                }}
                                            >
                                                <Avatar
                                                    src={user.avatar}
                                                    sx={{
                                                        height: 64,
                                                        mb: 2,
                                                        width: 64
                                                    }}
                                                />
                                                <Typography
                                                    color="textPrimary"
                                                    gutterBottom
                                                    variant="h5"
                                                >
                                                    {user.name}
                                                </Typography>
                                                <Typography
                                                    color="textSecondary"
                                                    variant="body2"
                                                >
                                                    {federation.Email}
                                                </Typography>
                                                <Typography
                                                    color="textSecondary"
                                                    variant="body2"
                                                >
                                                    {`${user.city}`}
                                                </Typography>
                                                {/* <Typography
                                                    color="textSecondary"
                                                    variant="body2"
                                                >
                                                    {user.timezone}
                                                </Typography> */}
                                            </Box>
                                        </CardContent>
                                        <Divider />

                                        <Grid container
                                            spacing={8} >

                                            <Grid
                                                item
                                                lg={6}
                                                md={6}
                                                xs={6}
                                            >
                                                <CardActions>
                                                    <TextField style={{ display: 'none' }}
                                                        error={Boolean(formik.touched.logo && formik.errors.logo)}
                                                        fullWidth
                                                        helperText={formik.touched.logo && formik.errors.logo}
                                                        label="Logo"
                                                        id="uploadfederationLogo"
                                                        margin="dense"
                                                        name="logo"
                                                        onBlur={formik.handleBlur}
                                                        onChange={formik.handleChange}
                                                        type="file"
                                                        value={formik.values.logo}
                                                        variant="outlined"
                                                    />
                                                    <Button onClick={() => { document.getElementById("uploadfederationLogo").click() }}>Upload Logo</Button>
                                                </CardActions>
                                            </Grid>
                                            <Grid
                                                item
                                                lg={6}
                                                md={6}
                                                xs={6}
                                            >
                                                <CardActions>
                                                    <TextField style={{ display: 'none' }}
                                                        error={Boolean(formik.touched.banner && formik.errors.banner)}
                                                        fullWidth
                                                        helperText={formik.touched.banner && formik.errors.banner}
                                                        label="Banner"
                                                        id="uploadfederationBanner"
                                                        margin="dense"
                                                        name="banner"
                                                        onBlur={formik.handleBlur}
                                                        onChange={formik.handleChange}
                                                        type="file"
                                                        value={formik.values.banner}
                                                        variant="outlined"
                                                    />
                                                    <Button onClick={() => { document.getElementById("uploadfederationBanner").click() }}>Upload Banner</Button>
                                                </CardActions>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                    {/* Profile */}
                                </Grid>
                                <Grid
                                    item
                                    lg={8}
                                    md={6}
                                    xs={12}
                                >
                                    {/* Details */}

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
                                                        error={Boolean(formik.touched.federation && formik.errors.federation)}
                                                        fullWidth
                                                        helperText={formik.touched.federation && formik.errors.federation}
                                                        label="Name"
                                                        margin="dense"
                                                        name="federation"
                                                        onBlur={formik.handleBlur}
                                                        onChange={formik.handleChange}
                                                        type="text"
                                                        value={formik.values.federation}
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
                                                    xs={12}>
                                                    <TextField
                                                        error={Boolean(formik.touched.contactPersonName && formik.errors.contactPersonName)}
                                                        fullWidth
                                                        helperText={formik.touched.contactPersonName && formik.errors.contactPersonName}
                                                        label="Person Name"
                                                        margin="dense"
                                                        name="contactPersonName"
                                                        onBlur={formik.handleBlur}
                                                        onChange={formik.handleChange}
                                                        type="text"
                                                        value={formik.values.contactPersonName}
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
                                                        error={Boolean(formik.touched.recoveryEMail && formik.errors.recoveryEMail)}
                                                        fullWidth
                                                        helperText={formik.touched.recoveryEMail && formik.errors.recoveryEMail}
                                                        label="Recovery Email"
                                                        margin="dense"
                                                        name="recoveryEMail"
                                                        onBlur={formik.handleBlur}
                                                        onChange={formik.handleChange}
                                                        type="email"
                                                        value={formik.values.recoveryEMail}
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
                                                    xs={12}>
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
                                                    xs={12}>
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
                                                    xs={12}>
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
                                                    xs={12}>
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

                                                {/* <Grid
                                                    item
                                                    md={6}
                                                    xs={12}>
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
                                                </Grid> */}

                                            </Grid>
                                        </CardContent>
                                        <Divider />

                                        <CardActions>
                                            <Grid container
                                                spacing={8}
                                                style={{ textAlign: 'center' }} >
                                                <Grid
                                                    item
                                                    lg={6}
                                                    md={6}
                                                    xs={6}
                                                >
                                                    <Button
                                                        variant="contained"
                                                        style={{ backgroundColor: 'red' }}
                                                        onClick={() => {

                                                            handleDelete(federation.Email)
                                                        }}>Delete</Button>
                                                </Grid>
                                                <Grid
                                                    item
                                                    lg={6}
                                                    md={6}
                                                    xs={6}
                                                >
                                                    <Button type="submit"
                                                        variant="contained">Save Details</Button>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </Card>

                                    {/* Details */}
                                </Grid>
                            </Grid>
                            {/* Teams List */}
                            <Typography>federation1 - Teams </Typography>
                            <Box sx={{ mt: 3 }}>
                                <PlayerListResults players={players} />
                            </Box>

                        </Container>
                    </Box>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};
