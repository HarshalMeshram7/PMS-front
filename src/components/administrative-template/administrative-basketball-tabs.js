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
import BasketballPlayerPerformanceIndicator from "./administrative-tabs/basketball-PPIndicator";

const AdministrativeBasketballTabs = () => {

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
                    {value == "0" && <AdministrativeProfessionalTab sports="Basketball - Profession" />}
                    {value == "1" && <AdministrativeLoanPlayerTab sports="Basketball- Loan Player" />}
                    {value == "2" && <AdministrativePlayerPlayingPosition sports="Basketball- Player Playing Position" />}
                    {value == "3" && <BasketballPlayerPerformanceIndicator />}




                </Container>
            </DialogContent>

        </>
    )

}

export default AdministrativeBasketballTabs;