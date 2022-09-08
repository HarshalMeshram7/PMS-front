import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  FormGroup,
  FormControlLabel,
  Switch,
  TextareaAutosize
} from "@mui/material";

export default function AcademyBudget() {
  const formik = useFormik({
    initialValues: {
      ApprovedbyMembersofTheCommittee: "",
      BudgetDetails: "",
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

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <Typography>Approved by Members of The Committee : </Typography>
              </Grid>

              <Grid item md={6} xs={12}>
                <FormGroup>
                  <FormControlLabel control={<Switch defaultChecked />} label="" />
                </FormGroup>
              </Grid>

              <Grid item md={6} xs={12}>
                <Typography>Budget Details : </Typography>
              </Grid>

              <Grid item md={6} xs={12}>
                <TextareaAutosize
                  minRows={6}
                  style={{ width: 200 }}
                />
              </Grid>

              <Grid item md={12} xs={12} textAlign="center">
                <Button variant="outlined" color="primary">
                  Save
                </Button>
              </Grid>
              <Grid />
            </Grid>
          </CardContent>
        </Card>
      </form>
    </>
  );
}
