import * as React from "react";
import { Button, Dialog, DialogActions, DialogContent, Typography, Grid, Container } from "@mui/material";
import { useState } from "react";
import LoadingBox from "src/components/common/loading-box";
import { useSnackbar } from "notistack";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ClubFinance from "./finance-component/club-finance";
import ClubEccomerce from "./finance-component/club-eccomerce";
import ClubEarning from "./finance-component/club-earnings";
import ClubBudget from "./finance-component/club-budget";

export const ClubFinanceDialog = ({ open, handleClose, club, mutate }) => {
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

            <DialogContent style={{height:'600px'}}>
                <Typography align="center" variant="h4">
                    Club Finance
                </Typography>
            
            <Grid>
                <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                    <Tabs value={value} onChange={handleChange} centered>
                        <LinkTab value="0" label="Club Finance" />
                        <LinkTab value="1" label="Ecommerse Site" />
                        <LinkTab value="2" label="Club Earning" />
                        <LinkTab value="3" label="Club Expenses" />
                        <LinkTab value="4" label="Club Budget" />
                        <LinkTab value="5" label="Club Event" />
                        <LinkTab value="6" label="Club Organization" />
                        <LinkTab value="7" label="Club Statistic" />
                    </Tabs>
                </Box>
            </Grid>
            <Container maxWidth="md">
                        {value == "0" && <ClubFinance/>}
                        {value == "1" && <ClubEccomerce/>}
                        {value == "2" && <ClubEarning/>}
                        {value == "3" && <>Club Expenses</>}
                        {value == "4" && <ClubBudget/>}
                        {value == "5" && <>Club Event</>}
                        {value == "6" && <>Club Organization</>}
                        {value == "7" && <>Club Statistic</>}
            </Container>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};
