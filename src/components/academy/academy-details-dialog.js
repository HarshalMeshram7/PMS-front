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
import { red } from "@mui/material/colors";
import { deleteAcademy } from "src/services/academyRequest.js";



export const AcademyDetailsDialog = ({ open, handleClose, academy }) => {
    const { enqueueSnackbar } = useSnackbar();

    const user = {
        avatar: academy.logo,
        city: 'Los Angeles',
        country: 'USA',
        jobTitle: 'Senior Developer',
        name: academy.academyName,
        timezone: 'GTM-7'
    };
    const [loading, setLoading] = useState();
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        state: '',
        country: '',
        password: '',
        confirm: ''
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const formik = useFormik({
        initialValues: {
            academyName: "Academy1",
            address: "Address",
            phone: "8208793805",
            email: "",
            personName: "Person name",
            logo: "",
            banner: "",
            accreditation: "accreditation",
            facebook: "fb",
            twitter: "tw",
            instagram: "ins",
            sportsList: [],
            password: "Monish@1995",
            cnfpassword: "Monish@1995"
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
                console.log(data);
                // await addAcademy(data);
                // handleClose();
                enqueueSnackbar("Academy Updated Succesfully Please Refresh", { variant: "success" });
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        },
    });

    const handleDelete = (e) => {
        // deleteAcademy().then((response)=> {
        //     console.log(response)
        // });
        console.log(e);

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
                            background: "url(https://img.freepik.com/free-vector/abstract-banner-background-with-red-shapes_1361-3348.jpg?w=2000)",
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
                                                    {`${user.city} ${user.country}`}
                                                </Typography>
                                                <Typography
                                                    color="textSecondary"
                                                    variant="body2"
                                                >
                                                    {user.timezone}
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                        <Divider />

                                        <Grid container spacing={8} >

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
                                                        id="uploadAcademyLogo"
                                                        margin="dense"
                                                        name="logo"
                                                        onBlur={formik.handleBlur}
                                                        onChange={formik.handleChange}
                                                        type="file"
                                                        value={formik.values.logo}
                                                        variant="outlined"
                                                    />
                                                    <Button onClick={() => { document.getElementById("uploadAcademyLogo").click() }}>Upload Logo</Button>
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
                                                        id="uploadAcademyBanner"
                                                        margin="dense"
                                                        name="banner"
                                                        onBlur={formik.handleBlur}
                                                        onChange={formik.handleChange}
                                                        type="file"
                                                        value={formik.values.banner}
                                                        variant="outlined"
                                                    />
                                                    <Button onClick={() => { document.getElementById("uploadAcademyBanner").click() }}>Upload Banner</Button>
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
                                                    xs={12}>
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

                                                <Grid
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
                                                </Grid>

                                                <Grid
                                                    item
                                                    md={6}
                                                    xs={12}>
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

                                            </Grid>
                                        </CardContent>
                                        <Divider />

                                        

                                        <CardActions>
                                            <Grid container spacing={8} style={{ textAlign: 'center' }} >
                                                <Grid
                                                    item
                                                    lg={6}
                                                    md={6}
                                                    xs={6}
                                                >
                                                    <Button variant="contained" style={{ backgroundColor: 'red' }} onClick={handleDelete}>Delete</Button>
                                                </Grid>
                                                <Grid
                                                    item
                                                    lg={6}
                                                    md={6}
                                                    xs={6}
                                                >
                                                    <Button type="submit" variant="contained">Save Details</Button>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </Card>

                                    {/* Details */}
                                </Grid>
                            </Grid>
                            {/* Teams List */}
                            <Typography>Academy1 - Teams </Typography>
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
