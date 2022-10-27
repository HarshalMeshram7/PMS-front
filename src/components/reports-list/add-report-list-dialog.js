import React from "react";
import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    Tab,
    DialogTitle,
    Tabs,
    Container,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Box,
    Grid,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import LoadingBox from "src/components/common/loading-box";
import ReportListFederationTab from "./reports-list-tabs/report-federation-tab";



export const AddReportListDialog = ({ open, handleClose }) => {
    const { enqueueSnackbar } = useSnackbar();
    const [loading, setLoading] = useState();
    const [value, setValue] = React.useState("0");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function LinkTab(props) {
        return (
            <Tab
                component="a"
                onClick={(event) => {
                    event.preventDefault();
                }}
                {...props}
            />
        );
    }

    const formik = useFormik({
        initialValues: {

        },
        validationSchema: Yup.object({

        }),

        onSubmit: async (data) => {
            setLoading(true);

            try {
                console.log("**********");
                console.log(data);
                // await addAcademy(data);
                handleClose();
                enqueueSnackbar("Player Added Succesfully", { variant: "success" });
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
            maxWidth="lg"
            BackdropProps={{
                style: { backgroundColor: "#121212dd" },
            }}
        >
            {loading && <LoadingBox />}
            <form onSubmit={formik.handleSubmit}>
                <DialogTitle textAlign='center'>Reports</DialogTitle>
                <DialogContent style={{ height: '600px' }}>
                    {/* <DialogContentText sx={{ marginBottom: 2 }}>
                        Enter the required basic details of the Player below.
                    </DialogContentText> */}

                    <Grid>
                        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                centered
                            // variant="scrollable"
                            >
                                <LinkTab value="0" label="Federation" />
                                <LinkTab value="1" label="Club" />
                                <LinkTab value="2" label="Team" />
                                <LinkTab value="3" label="Player" />
                                <LinkTab value="4" label="Referee" />
                                <LinkTab value="5" label="Coach" />
                                <LinkTab value="6" label="General" />
                            </Tabs>
                        </Box>
                    </Grid>
                    <Container maxWidth="md">
                        {/* {value == "0" && <>Federation</>} */}
                        {value == "0" && <ReportListFederationTab/>}
                                          
                        {value == "1" && <>Club</>}
                        {value == "2" && <>Team</>}
                        {value == "3" && <>Player</>}
                        {value == "4" && <>Referee</>}
                        {value == "5" && <>Coach</>}
                        {value == "6" && <>General</>}

                    </Container>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} >Cancel</Button>
                    <Button type="submit" variant="contained">Addd</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};
