import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Grid, TextField, Button, Card, CardContent, FormControl,
  FormGroup, FormControlLabel, FormLabel, RadioGroup, Radio
} from "@mui/material";

export default function SoccerPlayerPlayingPosition() {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      Sports: 'Soccer - Player Playing Position',
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
                    <FormControlLabel value="Goalkeeper" control={<Radio />} label="Goalkeeper" />
                    <FormControlLabel value="Fullback" control={<Radio />} label="Fullback" />
                    <FormControlLabel value="CenterBack" control={<Radio />} label="Center Back" />
                    <FormControlLabel value="HoldingMidfielder" control={<Radio />} label="Holding Midfielder" />
                    <FormControlLabel value="AttackingMidfielder" control={<Radio />} label="Attacking Midfielder" />
                    <FormControlLabel value="WideMidfielder" control={<Radio />} label="Wide Midfielder" />
                    <FormControlLabel value="Stricker" control={<Radio />} label="Stricker" />
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
