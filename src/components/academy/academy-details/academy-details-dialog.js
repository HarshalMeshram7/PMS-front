import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Divider,
    Card,
    CardContent,
    CardActions,
    Avatar
} from "@mui/material";
import { useEffect, useState } from "react";
import LoadingBox from "src/components/common/loading-box";
import { AcademyProfile } from "./academy-profile";

const states = [
    {
        value: 'alabama',
        label: 'Alabama'
    },
    {
        value: 'new-york',
        label: 'New York'
    },
    {
        value: 'san-francisco',
        label: 'San Francisco'
    }
];
const user = {
    avatar: '/static/images/products/product_1.png',
    city: 'Los Angeles',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: 'Katarina Smith',
    timezone: 'GTM-7'
};

export const AcademyDetailsDialog = ({ open, handleClose }) => {
    const [loading, setLoading] = useState();
    const [values, setValues] = useState({
        firstName: 'Katarina',
        lastName: 'Smith',
        email: 'demo@devias.io',
        phone: '',
        state: 'Alabama',
        country: 'USA',
        password: '',
        confirm: ''
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    return (
        <Dialog
            open={open}
            onClose={!loading && handleClose}
            fullWidth
            maxWidth="xl"
            BackdropProps={{
                style: { backgroundColor: "#121212dd" },
            }}
        >
            <DialogContent style = {{ margin:0,padding:0}} >
            {loading && <LoadingBox />}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    // py: 8
                }}
            >
                <div style={{
                    width: "100%",
                    height: "200px",
                    marginBottom: "-100px",
                    background: "url(https://img.freepik.com/free-vector/abstract-banner-background-with-red-shapes_1361-3348.jpg?w=2000)",
                }}></div>

                <Container maxWidth="lg">
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            lg={4}
                            md={6}
                            xs={12}
                        >
                            {/* Profile */}
                            <Card >
                                <CardContent>
                                    <Box
                                        sx={{
                                            alignItems: 'center',
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}
                                    >
                                        <Avatar
                                            src={user.avatar}
                                            sx={{
                                                height: 64,
                                                mb: 2,
                                                width: 64
                                            }}
                                        />
                                        <Typography
                                            color="textPrimary"
                                            gutterBottom
                                            variant="h5"
                                        >
                                            {user.name}
                                        </Typography>
                                        <Typography
                                            color="textSecondary"
                                            variant="body2"
                                        >
                                            {`${user.city} ${user.country}`}
                                        </Typography>
                                        <Typography
                                            color="textSecondary"
                                            variant="body2"
                                        >
                                            {user.timezone}
                                        </Typography>
                                    </Box>
                                </CardContent>
                                <Divider />
                                <CardActions>
                                    <Button
                                        color="primary"
                                        fullWidth
                                        variant="text"
                                    >
                                        Upload picture
                                    </Button>
                                </CardActions>
                            </Card>
                            {/* Profile */}
                        </Grid>
                        <Grid
                            item
                            lg={8}
                            md={6}
                            xs={12}
                        >
                            {/* Details */}
                            <form>
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
                                                <TextField
                                                    fullWidth
                                                    helperText="Please specify the first name"
                                                    label="First name"
                                                    name="firstName"
                                                    onChange={handleChange}
                                                    required
                                                    value={values.firstName}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid
                                                item
                                                md={6}
                                                xs={12}
                                            >
                                                <TextField
                                                    fullWidth
                                                    label="Last name"
                                                    name="lastName"
                                                    onChange={handleChange}
                                                    required
                                                    value={values.lastName}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid
                                                item
                                                md={6}
                                                xs={12}
                                            >
                                                <TextField
                                                    fullWidth
                                                    label="Email Address"
                                                    name="email"
                                                    onChange={handleChange}
                                                    required
                                                    value={values.email}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid
                                                item
                                                md={6}
                                                xs={12}
                                            >
                                                <TextField
                                                    fullWidth
                                                    label="Phone Number"
                                                    name="phone"
                                                    onChange={handleChange}
                                                    type="number"
                                                    value={values.phone}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid
                                                item
                                                md={6}
                                                xs={12}
                                            >
                                                <TextField
                                                    fullWidth
                                                    label="Country"
                                                    name="country"
                                                    onChange={handleChange}
                                                    required
                                                    value={values.country}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid
                                                item
                                                md={6}
                                                xs={12}
                                            >
                                                <TextField
                                                    fullWidth
                                                    label="Select State"
                                                    name="state"
                                                    onChange={handleChange}
                                                    required
                                                    select
                                                    SelectProps={{ native: true }}
                                                    value={values.state}
                                                    variant="outlined"
                                                >
                                                    {states.map((option) => (
                                                        <option
                                                            key={option.value}
                                                            value={option.value}
                                                        >
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </TextField>
                                            </Grid>
                                            <Grid
                                                item
                                                md={6}
                                                xs={12}
                                            >
                                                <TextField
                                                    fullWidth
                                                    label="Password"
                                                    margin="normal"
                                                    name="password"
                                                    onChange={handleChange}
                                                    type="password"
                                                    value={values.password}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid
                                                item
                                                md={6}
                                                xs={12}
                                            >
                                                <TextField
                                                    fullWidth
                                                    label="Confirm Password"
                                                    margin="normal"
                                                    name="password"
                                                    onChange={handleChange}
                                                    type="password"
                                                    value={values.confirm}
                                                    variant="outlined"
                                                />
                                            </Grid>

                                        </Grid>
                                    </CardContent>
                                    <Divider />
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                            p: 2
                                        }}
                                    >
                                <Button type="submit"
                                    variant="contained">Save Details</Button>
                                    </Box>
                                </Card>
                            </form>
                            {/* Details */}
                        </Grid>
                    </Grid>
                </Container>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>

    );
};
