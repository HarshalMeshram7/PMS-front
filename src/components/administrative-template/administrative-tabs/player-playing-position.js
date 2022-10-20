import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Grid, TextField, Button, Card, CardContent, FormControl,
  FormGroup, FormControlLabel, FormLabel, RadioGroup, Radio
} from "@mui/material";

export default function AdministrativePlayerPlayingPosition(sports) {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      Sports: sports,
      PlayerPlayingPosition: ""
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
                    defaultValue="Center"
                    name="PlayerPlayingPosition"
                    error={Boolean(formik.touched.PlayerPlayingPosition && formik.errors.PlayerPlayingPosition)}
                    helperText={formik.touched.PlayerPlayingPosition && formik.errors.PlayerPlayingPosition}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.PlayerPlayingPosition}
                  >
                    <FormControlLabel value="Center" control={<Radio />} label="Center" />
                    <FormControlLabel value="PowerForward" control={<Radio />} label="Power Forward" />
                    <FormControlLabel value="SmallForward" control={<Radio />} label="Small Forward" />
                    <FormControlLabel value="PointGuard" control={<Radio />} label="Point Guard" />
                    <FormControlLabel value="ShootingGuard" control={<Radio />} label="Shooting Guard" />
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
