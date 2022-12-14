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
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Divider,
    Card,
    CardContent,
    Stack,
    Chip
} from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addAcademy } from "src/services/academyRequest";
import LoadingBox from "src/components/common/loading-box";
import { useAllTeams } from "src/adapters/teamAdapter";



export const AddFixturesDialog = ({ open, handleClose }) => {
    const { enqueueSnackbar } = useSnackbar();
    const [loading, setLoading] = useState();

    const [numberOfTeams, setNumberOfTeams] = useState([]);
    const [numberOfGroups, setNumberOfGroups] = useState([]);
    const [numberOfTeamsInGroup, setNumberOfTeamsInGroup] = useState([]);
    const [teamsFixed, setTeamsFixed] = useState(false);


    const Venue = [
        {
            value: "Dubai",
            label: "Dubai"
        },
        {
            value: "Qatar",
            label: "Qatar"
        },
        {
            value: "Abu Dhabi",
            label: "Abu Dhabi"
        },
        {
            value: "Other",
            label: "Other"
        }
    ];

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            teamList: [],
            NOG: "",
            NOTIG: "",
            TournamentName: "",
            TournamentStartDate: "",
            TournamentEndDate: "",
        },

        validationSchema: Yup.object({
        }),

        onSubmit: async (data) => {
            console.log(data);
        },
    });



    const handleSelectTeam = (e) => {
        console.log(formik.values);
        setNumberOfTeams(formik.values.teamList)
        setTeamsFixed(true)
        let groups = [];
        let teamsingroup = [];
        for (let i = 0; i < formik.values.NOG; i++) {
            groups.push(`Group${i + 1}`);
        }
        for (let i = 0; i < formik.values.NOTIG; i++) {
            teamsingroup.push(`Team${i + 1}`);
        }
        setNumberOfGroups(groups)
        setNumberOfTeamsInGroup(teamsingroup)
    }
    // console.log(groups ,teamsingroup );
    const { teams, error, mutate } = useAllTeams();
    return (
        <Dialog

            open={open}
            onClose={!loading && handleClose}
            fullWidth
            maxWidth="xl"
            BackdropProps={{
                style: { backgroundColor: "#121212dd", },
            }}
        >
            {loading && <LoadingBox />}
            <DialogTitle>Tournament Fixtures</DialogTitle>
            <DialogContent style={{ height: '600px' }}>
                <DialogContentText sx={{ marginBottom: 2 }}>
                    {/* Enter the required basic details of the Administrative Template below. */}
                </DialogContentText>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        md={3}
                        xs={12}
                    >
                        <TextField
                            error={Boolean(formik.touched.TournamentName && formik.errors.TournamentName)}
                            fullWidth
                            helperText={formik.touched.TournamentName && formik.errors.TournamentName}
                            label="Name of Tournament"
                            margin="dense"
                            name="TournamentName"
                            type="text"
                            variant="outlined"
                            onChange={(e) => { formik.handleChange(e) }}
                            onBlur={formik.handleBlur}
                            value={formik.values.TournamentName}
                        />
                    </Grid>
                    <Grid
                        item
                        md={3}
                        xs={12}
                    >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-helper-label">Venue</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={formik.values.Venue}
                                name="Venue"
                                label="Venue"
                                onChange={formik.handleChange}
                            >
                                {Venue?.map((option, key) => (
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
                        md={3}
                        xs={12}
                    >
                        <TextField
                            error={Boolean(formik.touched.TournamentStartDate && formik.errors.TournamentStartDate)}
                            fullWidth
                            helperText={formik.touched.TournamentStartDate && formik.errors.TournamentStartDate}
                            name="TournamentStartDate"
                            label="Tournament Start Date"
                            InputLabelProps={{ shrink: true }}
                            margin="dense"
                            onBlur={formik.handleBlur}
                            value={formik.values.TournamentStartDate}
                            onChange={formik.handleChange}
                            type="date"
                            variant="outlined"
                        />
                    </Grid>

                    <Grid
                        item
                        md={3}
                        xs={12}
                    >
                        <TextField
                            error={Boolean(formik.touched.TournamentEndDate && formik.errors.TournamentEndDate)}
                            fullWidth
                            helperText={formik.touched.TournamentEndDate && formik.errors.TournamentEndDate}
                            name="TournamentEndDate"
                            label="Tournament End Date"
                            InputLabelProps={{ shrink: true }}
                            margin="dense"
                            onBlur={formik.handleBlur}
                            value={formik.values.TournamentEndDate}
                            onChange={formik.handleChange}
                            type="date"
                            variant="outlined"
                        />
                    </Grid>

                    <Grid
                        item
                        md={3}
                        xs={12}
                    >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-helper-label">Select teams for tournament</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={formik.values.teamList}
                                name="teamList"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                multiple
                                label="Team List"
                            >{teams?.map((item, key) => (
                                <MenuItem key={key} value={item.name}>{item.name}</MenuItem>)
                            )}
                            </Select>
                        </FormControl>
                    </Grid>







                    <Grid
                        item
                        md={3}
                        xs={12}
                    >
                        <TextField
                            error={Boolean(formik.touched.NOG && formik.errors.NOG)}
                            fullWidth
                            helperText={formik.touched.NOG && formik.errors.NOG}
                            label="Select Number of Groups"
                            margin="dense"
                            name="NOG"
                            type="number"
                            variant="outlined"
                            onChange={(e) => { formik.handleChange(e) }}
                            onBlur={formik.handleBlur}
                            value={formik.values.NOG}
                        />
                    </Grid>

                    <Grid
                        item
                        md={3}
                        xs={12}
                    >
                        <TextField
                            error={Boolean(formik.touched.NOTIG && formik.errors.NOTIG)}
                            fullWidth
                            helperText={formik.touched.NOTIG && formik.errors.NOTIG}
                            label="Select MAX Number of Teams in a Group"
                            margin="dense"
                            name="NOTIG"
                            type="number"
                            variant="outlined"
                            value={formik.values.NOTIG}
                            onChange={(e) => {
                                if (formik.values.teamList.length >= (formik.values.NOG * e.target.value)) {
                                    formik.touched.NOTIG = true;
                                    formik.errors.NOTIG = "Please choose greater number"
                                } else {
                                    formik.touched.NOTIG = false;
                                    formik.errors.NOTIG = ""
                                }
                                formik.handleChange(e)
                            }}
                            onBlur={formik.handleBlur}

                        />
                    </Grid>

                    <Grid
                        item
                        md={3}
                        xs={12}
                    >
                        <Button
                            variant="contained"
                            onClick={handleSelectTeam}
                        >Next</Button>
                    </Grid>
                </Grid>
                {/* creating teams chips */}
                <Grid
                    container
                    style={{ justifyContent: "center", marginTop: 50, marginBottom: 50 }}
                >
                    <Stack direction="row" spacing={5}>
                        {numberOfTeams?.map((totolteams, teamskey) => {
                            return (
                                <Chip onClick=
                                    {() => alert(totolteams)}
                                    label={totolteams} key={teamskey} />
                            )
                        })}
                    </Stack>
                </Grid>


                {/* Creating Groups */}
                {teamsFixed &&
                    <Grid
                        container
                        spacing={3}
                    >
                        {numberOfGroups.map((group, groupkey) => {
                            return (
                                <>
                                    <Grid
                                        item
                                        md={3}
                                        xs={12}
                                    >
                                        {/* <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}> */}
                                        <Card variant="outlined">
                                            <CardContent style={{ minHeight: 300 }}>
                                                <List subheader={group} key={groupkey}>

                                                    {numberOfTeamsInGroup?.map((noOfteams, teamkey) => (
                                                        <>
                                                            <ListItem disablePadding key={teamkey} >
                                                                <ListItemButton>
                                                                    <ListItemText primary={noOfteams} />
                                                                </ListItemButton>
                                                            </ListItem>
                                                            < Divider />
                                                        </>
                                                    ))}

                                                </List>
                                            </CardContent>
                                        </Card>
                                        {/* </Box> */}
                                    </Grid>
                                </>
                            )
                        })}


                    </Grid>
                }
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} >Cancel</Button>
                {/* <Button type="submit" variant="contained">Add</Button> */}
            </DialogActions>
            {/* </form> */}
        </Dialog>
    );
};
