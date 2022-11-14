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

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            teamList: [],
            NOG: "",
            NOTIG: "",
        },
        validationSchema: Yup.object({
        }),
        onSubmit: async (data) => {
            console.log(data);
        },
    });



    const handleSelectTeam = (e) => {
        console.log(formik.values.teamList.length, formik.values.NOG, formik.values.NOTIG);
        if (formik.values.teamList.length >> (formik.values.NOG * formik.values.NOTIG)) {
            setNumberOfTeams(formik.values.teamList)
            setNumberOfGroups(formik.values.NOG)
            setNumberOfTeamsInGroup(formik.values.NOTIG)
            setTeamsFixed(true)
        }
    }

    const { teams, error, mutate } = useAllTeams();
    return (
        <Dialog

            open={open}
            onClose={!loading && handleClose}
            fullWidth
            maxWidth="lg"
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
                <form onSubmit={formik.handleSubmit}>
                    <Grid
                        container
                        spacing={3}
                    >
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
                </form>
                {teamsFixed &&
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            md={3}
                            xs={12}
                        >
                                works
                        </Grid>

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
