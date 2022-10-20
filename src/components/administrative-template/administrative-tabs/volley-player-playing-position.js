import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Grid, TextField, Button, Card, CardContent, FormControl,
  FormGroup, FormControlLabel, FormLabel, RadioGroup, Radio
} from "@mui/material";

export default function VolleyPlayerPlayingPosition() {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      Sports: 'Volleyball - Player Playing Position',
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
                    defaultValue="Outside Hitter"
                    name="PlayerPlayingPosition"
                    error={Boolean(formik.touched.PlayerPlayingPosition && formik.errors.PlayerPlayingPosition)}
                    helperText={formik.touched.PlayerPlayingPosition && formik.errors.PlayerPlayingPosition}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.PlayerPlayingPosition}
                  >
                    <FormControlLabel value="Outside Hitter" control={<Radio />} label="Outside Hitter" />
                    <FormControlLabel value="Opposite" control={<Radio />} label="Opposite" />
                    <FormControlLabel value="Setter" control={<Radio />} label="Setter" />
                    <FormControlLabel value="MiddleBlocker" control={<Radio />} label="Middle Blocker" />
                    <FormControlLabel value="Libero" control={<Radio />} label="Libero" />
                    <FormControlLabel value="DefensiveSpecialist" control={<Radio />} label="Defensive Specialist" />
                    <FormControlLabel value="ServingSpecialist" control={<Radio />} label="Serving Specialist" />
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
