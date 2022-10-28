import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    Box, TableContainer, Table, TableRow, TableHead, Paper, TableCell, TableBody,
     } from "@mui/material";

const ReportListClubTab = () => {
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
        createData('Club Details', 'Monday 25/11/2021', 'Open Copy Delete'),
        createData('Club Team List', 'Sunday 05/05/2019', 'Open Copy Delete'),
        createData('Club Finance (Limited Access)', 'Friday 09/01/2021', 'Open Copy Delete'),
        createData('Club Team Matches', 'Saturday 15/01/2021', 'Open Copy Delete'),
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
};

export default ReportListClubTab;