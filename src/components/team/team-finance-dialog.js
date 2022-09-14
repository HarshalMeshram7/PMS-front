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
                            <LinkTab value="0" label="Registration" />
                            <LinkTab value="1" label="Member Communication" />
                            <LinkTab value="2" label="Staff Management" />
                        </Tabs>
                    </Box>
                </Grid>
                <Container maxWidth="md">
                    {value == "0" && <>0</>}
                    {value == "1" && <MemberCommunication />}
                    {value == "2" && <>2</>}
                </Container>


            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>

    );
};
