import React from "react";
import Paper from '@mui/material/Paper';
import { Table, TableHead, TableRow, TableContainer, TableCell, TableBody } from "@mui/material";

const StaffManagement = () => {

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">SR.NO</TableCell>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">User Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">1</TableCell>
                            <TableCell align="center">5555</TableCell>
                            <TableCell align="center">Manager</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default StaffManagement;
