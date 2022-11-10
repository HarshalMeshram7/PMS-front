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

    const [sports, setSports] = useState('');

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            teamList: [],
        },
        validationSchema: Yup.object({
        }),

        onSubmit: async (data) => {
            // console.log(data);
        },
    });

    const handleSelectTeam = (e) => {
        // setSports(e.target.value)
        console.log("formik.values.teamList");
        console.log(formik.values.teamList);
    }

    const { teams, error, mutate } = useAllTeams();
    // console.log(teams);

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
            {/* <form onSubmit={formik.handleSubmit}> */}
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
                        md={6}
                        xs={12}
                    >
                        <Typography
                            align="center"
                            color="textPrimary"
                        // gutterBottom
                        >
                            Type of Sportssssssss:
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        md={6}
                        xs={12}
                    >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-helper-label">SportsList</InputLabel>
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
                        <Button
                            variant="contained"
                            onClick={handleSelectTeam}
                        >Next</Button>
                    </Grid>
                </Grid>

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} >Cancel</Button>
                {/* <Button type="submit" variant="contained">Add</Button> */}
            </DialogActions>
            {/* </form> */}
        </Dialog>
    );
};
