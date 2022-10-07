import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Grid, TextField, Button, Card, CardContent, FormControl,
  FormGroup, FormControlLabel, FormLabel, RadioGroup, Radio
} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';

export default function PlayerContractType() {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      ContractDuration: ""
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

            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                md={6}
                xs={12}
              >
                <FormControl >
                  <FormLabel id="demo-radio-buttons-group-label">Contract Duration</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="1Year"
                    name="ContractDuration"
                    error={Boolean(formik.touched.ContractDuration && formik.errors.ContractDuration)}
                    helperText={formik.touched.ContractDuration && formik.errors.ContractDuration}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.ContractDuration}
                  >
                    <FormControlLabel value="1Year" control={<Radio />} label="1 Year Contract" />
                    <FormControlLabel value="3Year" control={<Radio />} label="3 Year Contract" />
                    <FormControlLabel value="Other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item md={12} xs={12} textAlign="center">
                <Button type="submit" variant="outlined" color="primary">
                  Save
                </Button>
              </Grid>

            </Grid>

          </CardContent>
        </Card>
      </form>
    </>
  );
}
