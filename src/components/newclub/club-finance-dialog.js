import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Typography,
} from "@mui/material";
import { useState } from "react";
import LoadingBox from "src/components/common/loading-box";
import { useSnackbar } from "notistack";


export const ClubFinanceDialog = ({ open, handleClose, academy, mutate }) => {
    const { enqueueSnackbar } = useSnackbar();
    
    const [loading, setLoading] = useState();

   


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
            <DialogContent style={{ margin: 0, padding: 0 }} >
                <Typography>{academy.academyName} Finance</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>

    );
};
