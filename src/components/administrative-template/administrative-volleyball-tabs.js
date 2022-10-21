import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Grid,
    Container,
    Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { useState } from "react";
import AdministrativeProfessionalTab from "./administrative-tabs/professional";
import AdministrativeLoanPlayerTab from "./administrative-tabs/loan-player";
import AdministrativePlayerPlayingPosition from "./administrative-tabs/player-playing-position";
import VolleyPlayerPlayingPosition from "./administrative-tabs/volley-player-playing-position";
import VolleyballPlayerPerformanceIndicator from "./administrative-tabs/volleyball-PPIndicator";

const AdministrativeVolleyballTabs = () => {

    const [loading, setLoading] = useState();
    const [value, setValue] = React.useState("0");
    const [closeAdminHandle, setCloseAdminHandle] = useState(false)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClose = () => {
        setCloseAdminHandle()
    }

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
        <>
            <DialogContent style={{ height: '600px' }} >

                <Grid>
                    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            centered
                        >
                            <LinkTab value="0" label="Professional" />
                            <LinkTab value="1" label="Loan Player" />
                            <LinkTab value="2" label="Player Playing Position" />
                            <LinkTab value="3" label="Player Performance Indicator" />
                        </Tabs>
                    </Box>

                </Grid>
                <Container maxWidth="md">
                    {value == "0" && <AdministrativeProfessionalTab sports="Volleyball - Professional" />}
                    {value == "1" && <AdministrativeLoanPlayerTab sports="Volleyball- Loan Player"/>}
                    {value == "2" && <VolleyPlayerPlayingPosition />} 
                    {value == "3" && <h3>Player Performance Indicator</h3>} 
                    {value == "3" && <VolleyballPlayerPerformanceIndicator/>} 

                </Container>
            </DialogContent>

        </>
    )

}

export default AdministrativeVolleyballTabs;