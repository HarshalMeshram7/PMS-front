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




export default function ContractTransferLocking() {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            LoanStartDate: "",
            LoanEndDate: "",

        },
        validationSchema: Yup.object({}),

        onSubmit: async (data) => {
            try {
                let finalData = { ...data, approvedmember: approvedmember }
                console.log(finalData);
            } catch (error) {
                console.log(error);
            }
        },
    });


    const [approvedmember, setApprovedmember] = React.useState(false);

    const handleChange = (event) => {
        setApprovedmember(event.target.checked,);
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
                                                <Switch checked={approvedmember} onChange={handleChange} name="approvedmember" />
                                            }
                                            label="Transfer Player Locked"
                                        />
                                    </FormGroup>
                                </FormControl>
                            </Grid>

                            <Grid item md={6} xs={12}>
                                <Typography>Loan Period Start Date: </Typography>
                            </Grid>

                            {/* <Grid item md={6} xs={12}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateRangePicker
                                        disablePast
                                        value={value}
                                        maxDate={getWeeksAfter(value[0], 4)}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(startProps, endProps) => (
                                            <React.Fragment>
                                                <TextField {...startProps} />
                                                <Box sx={{ mx: 2 }}> to </Box>
                                                <TextField {...endProps} />
                                            </React.Fragment>
                                        )}
                                    />
                                </LocalizationProvider>
                            </Grid> */}

                            <Grid item md={6} xs={12}>
                                <TextField
                                    error={Boolean(formik.touched.LoanStartDate && formik.errors.LoanStartDate)}
                                    fullWidth
                                    helperText={formik.touched.LoanStartDate && formik.errors.LoanStartDate}
                                    label="Loan Start Date"
                                    margin="dense"
                                    InputLabelProps={{ shrink: true }}
                                    name="LoanStartDate"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="date"
                                    value={formik.values.LoanStartDate}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item md={6} xs={12}>
                                <Typography>Loan Period End Date: </Typography>
                            </Grid>

                            <Grid item md={6} xs={12}>
                                <TextField
                                    error={Boolean(formik.touched.LoanEndDate && formik.errors.LoanEndDate)}
                                    fullWidth
                                    helperText={formik.touched.LoanEndDate && formik.errors.LoanEndDate}
                                    label="Loan End Date"
                                    InputLabelProps={{ shrink: true }}
                                    margin="dense"
                                    name="LoanEndDate"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="date"
                                    value={formik.values.LoanEndDate}
                                    variant="outlined"
                                />
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
