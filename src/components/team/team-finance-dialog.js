import * as React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    Grid,
    Container,
    DialogContent,
    Typography,
} from "@mui/material";

import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { useState } from "react";
import LoadingBox from "src/components/common/loading-box";
import { useSnackbar } from "notistack";
import MemberCommunication from "./teammanagement-component/member-communication";
import StaffManagement from "./teammanagement-component/staff-management";


export const TeamFinanceDialog = ({ open, handleClose, team, mutate }) => {
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
            <DialogContent style={{ height: '600px' }} >
                <Typography align="center" variant="h4">
                    Teams
                </Typography>

                <Grid>
                    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            centered
                        >
                            <LinkTab value="0" label="Member Communication" />
                            <LinkTab value="1" label="Staff Management" />
                        </Tabs>
                    </Box>
                </Grid>
                <Container maxWidth="md">
                    {value == "0" && <MemberCommunication />}
                    {value == "1" && <StaffManagement />}
                    {/* {value == "1" && <>1</>} */}
                </Container>


            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>

    );
};
