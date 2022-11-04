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
    IconButton,
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
import DeleteIcon from "@mui/icons-material/Delete";
import uploadFileToBlob, { deleteBlob, handlePriview, getFileName } from "src/utils/azureBlob";
import * as Yup from "yup";
import { useSnackbar } from "notistack";
import { deleteAcademy } from "src/services/academyRequest.js";
import banner from '../../../public/static/images/background/register.jpg';
import { deleteTeam } from "src/services/teamRequest.js";


export const TeamDetailsDialog = ({ open, handleClose, team, mutate }) => {
    const { enqueueSnackbar } = useSnackbar();

    console.log(team);
    const user = {
        avatar: team.logo,
        city: team.address,
        country: 'USA',
        jobTitle: 'Senior Developer',
        name: team.academyName,
        timezone: 'GTM-7'
    };
    const [loading, setLoading] = useState();

    //   logo upload
    const [selectedLogo, setSelectedLogo] = useState(null);
    const [selectedLogoName, setSelectedLogoName] = useState("");

    const [uploadedLogo, setUploadedLogo] = useState(false);
    const [uploadedLogoName, setUploadedLogoName] = useState("");
    //  banner banner
    const [selectedBanner, setSelectedBanner] = useState(null);
    const [selectedBannerName, setSelectedBannerName] = useState("");

    const [uploadedBanner, setUploadedBanner] = useState(false);
    const [uploadedBannerName, setUploadedBannerName] = useState("");

    useEffect(() => {
        if (team?.Logo !== "") {
            if (team?.Logo !== null) {
                if (team?.Logo !== undefined) {
                    setUploadedLogoName(getFileName(team?.Logo));
                    setUploadedLogo(true);
                } else {
                    setUploadedLogoName("");
                    setUploadedLogo(false);
                }
            } else {
                setUploadedLogoName("");
                setUploadedLogo(false);
            }
        } else {
            setUploadedLogoName("");
            setUploadedLogo(false);
        }

        if (team?.Banner !== "" || team?.Banner !== undefined) {
            if (team?.Banner !== null) {
                if (team?.Banner !== undefined) {
                    setUploadedBannerName(getFileName(team?.Banner));
                    setUploadedBanner(true);
                } else {
                    setUploadedBannerName("");
                    setUploadedBanner(false);
                }
            } else {
                setUploadedBannerName("");
                setUploadedBanner(false);
            }
        } else {
            setUploadedBannerName("");
            setUploadedBanner(false);
        }
    }, [team]);

    const onFileChnage = (e) => {
        if (e.target.name == "logo") {
            setUploadedLogo(false);
            setSelectedLogo(e.target.files[0]);
            setSelectedLogoName(e.target.files[0].name);
        }

        if (e.target.name == "banner") {
            setUploadedBanner(false);
            setSelectedBanner(e.target.files[0]);
            setSelectedBannerName(e.target.files[0].name);
        }
    };
    const onFileUpload = async (file, id) => {
        setLoading(true);

        // *** UPLOAD TO AZURE STORAGE ***
        const blobsInContainer = await uploadFileToBlob(file).then(() => {
            if (id == 1) {
                // prepare UI for results
                setUploadedLogo(true);
                setUploadedLogoName(selectedLogoName);
                //   reseting selected files
                setSelectedLogo(null);
                setSelectedLogoName("");
            }

            if (id == 2) {
                // prepare UI for results
                setUploadedBanner(true);
                setUploadedBannerName(selectedBannerName);
                //   reseting selected files
                setSelectedBanner(null);
                setSelectedBannerName("");
            }
        });

        setLoading(false);
    };

    const onDeleteFile = (fileName, id) => {
        deleteBlob(fileName).then(() => {
            if (id == 1) {
                setSelectedLogo(null);
                setUploadedLogoName("");
                setUploadedLogo(false);
            }

            if (id == 2) {
                setSelectedBanner(null);
                setUploadedBannerName("");
                setUploadedBanner(false);
            }
        });
    };


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            TeamName: "Sultan 11",
            TeamAddress: "Address",
            TeamPhone: "9876543210",
            TeamEmail: "team@gmail.com",
            TeamContactPerson: "contact person",
            TeamDivisions: "division",
            TeamAdminManager: "admin manager",
            TeamCoordinatorTMS: "TMS",
            TeamCoordinatorITMS: "ITMS",
            Accreditation: "Accreditation",
            Facebook: "Facebook",
            Twitter: "Twitter",
            LinkedIn: "LinkedIn",
            logo: "",
            banner: "",
            // sportsList: [],
        },
        validationSchema: Yup.object({
            TeamName: Yup
                .string()
                .required("Team Name is required")
                .max(30, "Not more than 30 characters"),

            TeamAddress: Yup
                .string()
                .max(50, "Not more than 50 characters")
                .required('Required')
            ,
            TeamPhone: Yup.string()
                .length(10)
                // .matches(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/, 'Phone number is not valid')
                .required("Phone number is required")
            ,
            TeamEmail: Yup.string()
                .max(35, "Not more than 35 characters")
                .email("Must be a valid Email")
                .required("Email is required"),

            TeamContactPerson: Yup
                .string()
                .max(30, "Not more than 30 characters")
                .required("Person Name is required")
            ,
            TeamDivisions: Yup
                .string()
                .max(30, "Not more than 30 characters")
            ,
            TeamAdminManager: Yup
                .string()
                .max(30, "Not more than 30 characters")
            ,
            TeamCoordinatorTMS: Yup
                .string()
                .max(30, "Not more than 30 characters")
            ,
            TeamCoordinatorITMS: Yup
                .string()
                .max(30, "Not more than 30 characters"),

            Accreditation: Yup
                .string()
                .max(30, "Not more than 30 characters"),
            Facebook: Yup
                .string()
                .max(30, "Not more than 30 characters"),
            Twitter: Yup
                .string()
                .max(30, "Not more than 30 characters"),
            LinkedIn: Yup
                .string()
                .max(30, "Not more than 30 characters"),
        }),

        onSubmit: async (data) => {
            setLoading(true);
            try {
                console.log(data);
                // await updateAcademy(data);
                handleClose();
                enqueueSnackbar("Team Updated Succesfully", { variant: "success" });
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
            let finalData = { team: data }
            deleteTeam(finalData).then((response) => {
                if (response.status == "success") {
                    handleClose();
                    enqueueSnackbar("Team Deleted Succesfully", { variant: "success" });
                    mutate();
                    setLoading(false);
                }
                else {
                    handleClose();
                    enqueueSnackbar(`Error : ${response.message}`, { variant: "error" });
                    setLoading(false);
                }
            });
        } catch (error) {
            console.log(error);
            setLoading(false);
        } finally {
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
                            background: `url(${banner.src})center center`,
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
                                                    {team.email}
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
                                                        id="uploadTeamLogo"
                                                        margin="dense"
                                                        name="logo"
                                                        onBlur={formik.handleBlur}
                                                        onChange={onFileChnage}
                                                        type="file"
                                                        value={formik.values.logo}
                                                        variant="outlined"
                                                    />
                                                    <Button onClick={() => { document.getElementById("uploadTeamLogo").click() }}>Upload Logo</Button>

                                                    <Button disabled>
                                                        <Typography>{selectedLogoName}</Typography>
                                                    </Button>
                                                    {uploadedLogo ? (
                                                        <Button disabled variant="contained">
                                                            Uploaded &#10004;{" "}
                                                        </Button>
                                                    ) : (
                                                        <Button
                                                            variant="contained"
                                                            disabled={!selectedLogo}
                                                            onClick={(e) => {
                                                                onFileUpload(selectedLogo, 1);
                                                            }}
                                                        >
                                                            Upload
                                                        </Button>
                                                    )}
                                                    {uploadedLogo ? (
                                                        <>
                                                            <Button target="blank" href={handlePriview(uploadedLogoName)}>
                                                                <Typography>{uploadedLogoName}</Typography>
                                                            </Button>
                                                            <IconButton
                                                                onClick={() => {
                                                                    onDeleteFile(uploadedLogoName, 1);
                                                                }}
                                                                aria-label="delete"
                                                                size="small"
                                                            >
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </>
                                                    ) : (
                                                        ""
                                                    )}

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
                                                        id="uploadTeamBanner"
                                                        margin="dense"
                                                        name="banner"
                                                        onBlur={formik.handleBlur}
                                                        onChange={onFileChnage}
                                                        type="file"
                                                        value={formik.values.banner}
                                                        variant="outlined"
                                                    />
                                                    <Button onClick={() => { document.getElementById("uploadTeamBanner").click() }}>Upload Banner</Button>

                                                    <Button disabled>
                                                        <Typography>{selectedBannerName}</Typography>
                                                    </Button>
                                                    {uploadedBanner ? (
                                                        <Button disabled variant="contained">
                                                            Uploaded &#10004;{" "}
                                                        </Button>
                                                    ) : (
                                                        <Button
                                                            variant="contained"
                                                            disabled={!selectedBanner}
                                                            onClick={(e) => {
                                                                onFileUpload(selectedBanner, 2);
                                                            }}
                                                        >
                                                            Upload
                                                        </Button>
                                                    )}
                                                    <br></br>
                                                    {uploadedBanner ? (
                                                        <>
                                                            <Button target="blank" href={handlePriview(uploadedBannerName)}>
                                                                <Typography>{uploadedBannerName}</Typography>
                                                            </Button>
                                                            <IconButton
                                                                onClick={() => {
                                                                    onDeleteFile(uploadedBannerName, 2);
                                                                }}
                                                                aria-label="delete"
                                                                size="small"
                                                            >
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </>
                                                    ) : (
                                                        ""
                                                    )}


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
                                                        error={Boolean(formik.touched.TeamName && formik.errors.TeamName)}
                                                        fullWidth
                                                        helperText={formik.touched.TeamName && formik.errors.TeamName}
                                                        label="Team Name"
                                                        margin="dense"
                                                        name="TeamName"
                                                        onBlur={formik.handleBlur}
                                                        onChange={formik.handleChange}
                                                        type="text"
                                                        value={formik.values.TeamName}
                                                        variant="outlined"
                                                    />
                                                </Grid>

                                                <Grid
                                                    item
                                                    md={6}
                                                    xs={12}
                                                >
                                                    <TextField
                                                        error={Boolean(formik.touched.TeamAddress && formik.errors.TeamAddress)}
                                                        fullWidth
                                                        helperText={formik.touched.TeamAddress && formik.errors.TeamAddress}
                                                        label="TeamAddress"
                                                        margin="dense"
                                                        name="TeamAddress"
                                                        onBlur={formik.handleBlur}
                                                        onChange={formik.handleChange}
                                                        type="address"
                                                        value={formik.values.TeamAddress}
                                                        variant="outlined"
                                                    />
                                                </Grid>

                                                <Grid
                                                    item
                                                    md={6}
                                                    xs={12}
                                                >
                                                    <TextField
                                                        error={Boolean(formik.touched.TeamPhone && formik.errors.TeamPhone)}
                                                        fullWidth
                                                        helperText={formik.touched.TeamPhone && formik.errors.TeamPhone}
                                                        label="Team Phone Number"
                                                        margin="dense"
                                                        name="TeamPhone"
                                                        onBlur={formik.handleBlur}
                                                        onChange={formik.handleChange}
                                                        type="number"
                                                        value={formik.values.TeamPhone}
                                                        variant="outlined"
                                                    />
                                                </Grid>

                                                <Grid
                                                    item
                                                    md={6}
                                                    xs={12}
                                                >
                                                    <TextField
                                                        error={Boolean(formik.touched.TeamEmail && formik.errors.TeamEmail)}
                                                        fullWidth
                                                        helperText={formik.touched.TeamEmail && formik.errors.TeamEmail}
                                                        label="Team Email"
                                                        margin="dense"
                                                        name="TeamEmail"
                                                        onBlur={formik.handleBlur}
                                                        onChange={formik.handleChange}
                                                        type="email"
                                                        value={formik.values.TeamEmail}
                                                        variant="outlined"
                                                    />
                                                </Grid>

                                                <Grid
                                                    item
                                                    md={6}
                                                    xs={12}>
                                                    <TextField
                                                        error={Boolean(formik.touched.TeamContactPerson && formik.errors.TeamContactPerson)}
                                                        fullWidth
                                                        helperText={formik.touched.TeamContactPerson && formik.errors.TeamContactPerson}
                                                        label="Team Contact Person Name"
                                                        margin="dense"
                                                        name="TeamContactPerson"
                                                        onBlur={formik.handleBlur}
                                                        onChange={formik.handleChange}
                                                        type="text"
                                                        value={formik.values.TeamContactPerson}
                                                        variant="outlined"
                                                    />
                                                </Grid>


                                                <Grid
                                                    item
                                                    md={6}
                                                    xs={12}>
                                                    <TextField
                                                        error={Boolean(formik.touched.TeamDivisions && formik.errors.TeamDivisions)}
                                                        fullWidth
                                                        helperText={formik.touched.TeamDivisions && formik.errors.TeamDivisions}
                                                        label="Team Divisions"
                                                        margin="dense"
                                                        name="TeamDivisions"
                                                        onBlur={formik.handleBlur}
                                                        onChange={formik.handleChange}
                                                        type="text"
                                                        value={formik.values.TeamDivisions}
                                                        variant="outlined"
                                                    />
                                                </Grid>


                                                <Grid
                                                    item
                                                    md={6}
                                                    xs={12}>
                                                    <TextField
                                                        error={Boolean(formik.touched.TeamAdminManager && formik.errors.TeamAdminManager)}
                                                        fullWidth
                                                        helperText={formik.touched.TeamAdminManager && formik.errors.TeamAdminManager}
                                                        label="Team Admin / Manager"
                                                        margin="dense"
                                                        name="TeamAdminManager"
                                                        onBlur={formik.handleBlur}
                                                        onChange={formik.handleChange}
                                                        type="text"
                                                        value={formik.values.TeamAdminManager}
                                                        variant="outlined"
                                                    />
                                                </Grid>

                                                <Grid
                                                    item
                                                    md={6}
                                                    xs={12}>
                                                    <TextField
                                                        error={Boolean(formik.touched.TeamCoordinatorTMS && formik.errors.TeamCoordinatorTMS)}
                                                        fullWidth
                                                        helperText={formik.touched.TeamCoordinatorTMS && formik.errors.TeamCoordinatorTMS}
                                                        label="Team Coordinator TMS"
                                                        margin="dense"
                                                        name="TeamCoordinatorTMS"
                                                        onBlur={formik.handleBlur}
                                                        onChange={formik.handleChange}
                                                        type="text"
                                                        value={formik.values.TeamCoordinatorTMS}
                                                        variant="outlined"
                                                    />
                                                </Grid>

                                                <Grid
                                                    item
                                                    md={6}
                                                    xs={12}>
                                                    <TextField
                                                        error={Boolean(formik.touched.TeamCoordinatorITMS && formik.errors.TeamCoordinatorITMS)}
                                                        fullWidth
                                                        helperText={formik.touched.TeamCoordinatorITMS && formik.errors.TeamCoordinatorITMS}
                                                        label="Team Coordinator ITMS"
                                                        margin="dense"
                                                        name="TeamCoordinatorITMS"
                                                        onBlur={formik.handleBlur}
                                                        onChange={formik.handleChange}
                                                        type="text"
                                                        value={formik.values.TeamCoordinatorITMS}
                                                        variant="outlined"
                                                    />
                                                </Grid>

                                                <Grid
                                                    item
                                                    md={6}
                                                    xs={12}>
                                                    <TextField
                                                        error={Boolean(formik.touched.Accreditation && formik.errors.Accreditation)}
                                                        fullWidth
                                                        helperText={formik.touched.Accreditation && formik.errors.Accreditation}
                                                        label="Accreditation"
                                                        margin="dense"
                                                        name="Accreditation"
                                                        onBlur={formik.handleBlur}
                                                        onChange={formik.handleChange}
                                                        type="text"
                                                        value={formik.values.Accreditation}
                                                        variant="outlined"
                                                    />
                                                </Grid>

                                                <Grid
                                                    item
                                                    md={6}
                                                    xs={12}>
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
                                                    xs={12}>
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
                                                    xs={12}>
                                                    <TextField
                                                        error={Boolean(formik.touched.LinkedIn && formik.errors.LinkedIn)}
                                                        fullWidth
                                                        helperText={formik.touched.LinkedIn && formik.errors.LinkedIn}
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

                                                            handleDelete(team.email)
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
                            <Typography>Teams - Teams </Typography>
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
