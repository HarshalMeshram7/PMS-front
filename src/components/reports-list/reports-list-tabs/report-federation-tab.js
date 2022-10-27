import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Grid, TextField, Button, Card, CardContent, MenuItem, FormControl,
  Box, TableContainer, Table, TableRow, TableHead, Paper, TableCell, TableBody,
  Select, DialogTitle, InputLabel
} from "@mui/material";
import { Divider, Typography } from "@material-ui/core";
import { Male } from "@mui/icons-material";

export default function ReportListFederationTab() {
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

  function createData(Goals, Date, Actions, ) {
    return { Goals, Date, Actions,  };
  }

  const rows = [
    createData('Federation Details ', 'Monday 25/11/2021', 'Open Copy Delete'),
    createData('Federation Club', 'Saturday 15/01/2021', 'Open Copy Delete'),
    createData('Federation Finance', 'Thursday 06/01/2021', 'Open Copy Delete'),
    createData('Other', 'Saturday 15/01/2021', 'Open Copy Delete'),

  ];

  return (
    <>
      <Box sx={{ mt: 3 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Actions</TableCell>
              
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.Goals}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{row.Goals}</TableCell>
                  <TableCell align="right">{row.Date}</TableCell>
                  <TableCell align="right">{row.Actions}</TableCell>
                 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </Box>

      {/* <Grid item md={12} xs={12} textAlign="center">
        <Button sx={{ marginTop: 2 }} type="submit" variant="outlined" color="primary">
          Save
        </Button>
      </Grid> */}


    </>
  );
}
