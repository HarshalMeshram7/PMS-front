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
    FormLabel,
    DateInput,
    Switch,
    FormControl,
    TextareaAutosize
} from "@mui/material";
import { bool } from "prop-types";
import { LocalizationProvider } from "@mui/x-date-pickers";

export default function ContractNonType() {
    const formik = useFormik({
        initialValues: {

        },
        validationSchema: Yup.object({}),

        onSubmit: async (data) => {
            try {
                let finalData = { ...data, professionaltype: professionaltype }
                console.log(finalData);
            } catch (error) {
                console.log(error);
            }
        },
    });


    const [professionaltype, setProfessionaltype] = React.useState(false);

    const handleChange = (event) => {
        setProfessionaltype(event.target.checked,);
    };


    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Card>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item md={6} xs={12}>
                                <Typography>Transfer Player Locked : </Typography>
                            </Grid>

                            <Grid item md={6} xs={12}>
                                <FormControl component="fieldset" variant="standard">
                                    {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Switch checked={professionaltype} onChange={handleChange} name="professionaltype" />
                                            }
                                            label="Transfer Player Locked"
                                        />

                                    </FormGroup>
                                </FormControl>
                            </Grid>

                            <Grid item md={12} xs={12} textAlign="center">
                                <Button type="submit" variant="outlined" color="primary">
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
