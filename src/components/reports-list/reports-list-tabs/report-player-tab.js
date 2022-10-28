import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
    Box, TableContainer, Table, TableRow, TableHead, Paper, TableCell, TableBody,
} from "@mui/material";

const ReportListPlayerTab = () => {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            MatchesPlayed: "",

        },
        validationSchema: Yup.object({}),

        onSubmit: async (data) => {
            try {
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        },
    });

    function createData(Goals, Date, Actions,) {
        return { Goals, Date, Actions, };
    }

    const rows = [
        createData('Players Details', 'Monday 25/11/2021', 'Open Copy Delete'),
        createData('Players Individual Stats', 'Friday 09/01/2021', 'Open Copy Delete'),
        createData('Training Module-Wise Report', 'Sunday 05/05/2019', 'Open Copy Delete'),
        createData('Training Management-Wise Report', 'Monday 25/11/2021', 'Open Copy Delete'),
        createData('Personal Goals Report', 'Saturday 15/01/2021', 'Open Copy Delete'),
        createData('Played / Points Report', 'Wednessday 07/09/2020', 'Open Copy Delete'),
        createData('Penalty / Violation / Disqualification ', 'Tuesday 22/02/2022', 'Open Copy Delete'),
        createData('Players Fitness Reports', 'Saturday 15/01/2021', 'Open Copy Delete'),
        createData('Progress Reports', 'Friday 09/01/2021', 'Open Copy Delete'),
        createData('Other Reports (TBD)', 'Tuesday 22/02/2022', 'Open Copy Delete'),
    ];

    return <>
        <Box sx={{ mt: 3 }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Actions</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.Goals}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.Goals}</TableCell>
                                <TableCell align="center">{row.Date}</TableCell>
                                <TableCell align="center">{row.Actions}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    </>

}

export default ReportListPlayerTab;