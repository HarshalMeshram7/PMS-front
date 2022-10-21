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
import SoccerPlayerPlayingPosition from "./administrative-tabs/soccer-player-playing-position";
import AdministrativeAcademyPlayerTab from "./administrative-tabs/academy-player";
import SoccerPlayerPerformanceIndicator from "./administrative-tabs/soccer-PPIndicator";

const AdministrativeSoccerTabs = () => {

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
                            <LinkTab value="3" label="Academy Player" />
                            <LinkTab value="4" label="Player Playing Position" />
                        </Tabs>
                    </Box>

                </Grid>
                <Container maxWidth="md">
                    {value == "0" && <AdministrativeProfessionalTab sports="Soccer - Profession" />}
                    {value == "1" && <AdministrativeLoanPlayerTab sports="Soccer- Loan Player"/>}
                    {value == "2" && <SoccerPlayerPlayingPosition/> } 
                    {value == "3" && <AdministrativeAcademyPlayerTab/> } 
                    {/* {value == "4" && <h3>Player playing position </h3> }  */}
                    {value == "4" && <SoccerPlayerPerformanceIndicator/> } 

                </Container>
            </DialogContent>

        </>
    )

}

export default AdministrativeSoccerTabs;