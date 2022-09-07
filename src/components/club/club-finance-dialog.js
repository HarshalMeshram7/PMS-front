import * as React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Typography,
    Grid
} from "@mui/material";
import { useState } from "react";
import LoadingBox from "src/components/common/loading-box";
import { useSnackbar } from "notistack";

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


export const ClubFinanceDialog = ({ open, handleClose, club, mutate }) => {
    const { enqueueSnackbar } = useSnackbar();
    
    const [loading, setLoading] = useState();

    const [value, setValue] = React.useState(0);

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
          
            <DialogContent>
                <Typography 
                align='center'
                variant="h4"
                
                >Club Finance</Typography>
            </DialogContent>

            <Grid>
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <Tabs value={value} onChange={handleChange} centered>
                        <LinkTab value= "0" label="Club Finance" />
                        <LinkTab value= "1" label="Ecommerse Site" />
                        <LinkTab value= "2" label="Club Earning" />
                        <LinkTab value= "3" label="Club Expenses" />
                        <LinkTab value= "4" label="Club Budget" />
                        <LinkTab value= "5" label="Club Event" />
                        <LinkTab value= "6" label="Club Organization" />
                        <LinkTab value= "7" label="Club Statistic" />
                    </Tabs>
                    {value == 0 && <>Club Finance</>}
                    {value == 1 && <>Ecommerse</>}
                    {value == 2 && <>Club Earning</>}
                    {value == 3 && <>Club Expenses</>}
                    {value == 4 && <>Club Budget</>}
                    {value == 5 && <>Club Event</>}
                    {value == 6 && <>Club Organization</>}
                    {value == 7 && <>Club Statistic</>}
                </Box>
            </Grid>

            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
            
        </Dialog>

    );
};
