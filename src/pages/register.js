import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Grid,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import loginBackground from '../../public/static/images/background/login.jpg';
import moment from 'moment';

// import InputLabel from '@mui/material/InputLabel';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

const Role = [
  {
    value: "academy",
    label: "Academy"
  },
  {
    value: "club",
    label: "Club"
  },
  {
    value: "player",
    label: "Player"
  }
];

const Register = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      number: '',
      date: '',
      gender: '',
      street: '',
      country: '',
      state: '',
      city: '',
      role: '',
      file: '',
      password: '',
      cnfpassword: '',
      policy: false
    },
    validationSchema: Yup.object({
      firstName: Yup
        .string()
        .max(255)
        .required(
          'First name is required'),
      lastName: Yup
        .string()
        .max(255)
        .required('Last name is required'),
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      number: Yup.string()
        .length(10)
        .matches(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/, 'Phone number is not valid')
        .required("Phone number is required"),
      dob: Yup
        .string()
        .test("DOB", "Shoud Be Greater Then 18",
          value => {
            return moment().diff(moment(value), 'years') >= 18;
          }
        )
        .required('Required'),

      street: Yup
        .string()
        .required('Required'),

      city: Yup
        .string()
        .required('Required'),
      state: Yup
        .string()
        .required('Required'),
      country: Yup
        .string()
        .required('Required'),

      password: Yup
        .string()
        .max(255)
        .required('Password is required'),

      cnfpassword: Yup
        .string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),

      policy: Yup
        .boolean()
        .oneOf(
          [true],
          'This field must be checked'
        )
    }),
    onSubmit: () => {
      router.push('/');
    }
  });

  return (
    <>
      <Head>
        <title>
          Register | PMS
        </title>
      </Head>
      <Box
        style={{ background: `url("${loginBackground.src}")center center,linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))`, backgroundBlendMode: "overlay", backgroundSize: "cover" }}
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="lg"
          style={{
            paddingBottom: "20px",
            background: "white",
            borderRadius: "20px"
          }}>
          <NextLink
            href="/login"
            passHref
          >
            <Button style={{ float: "left" }}
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Login
            </Button>
          </NextLink>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ mt: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Create a account
              </Typography>
              {/* <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Use your email to create a new account
              </Typography> */}
            </Box>

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
                  error={Boolean(formik.touched.firstName && formik.errors.firstName)}
                  fullWidth
                  helperText={formik.touched.firstName && formik.errors.firstName}
                  label="First Name"
                  margin="normal"
                  name="firstName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  variant="outlined"
                />
              </Grid>

              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  error={Boolean(formik.touched.lastName && formik.errors.lastName)}
                  fullWidth
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  label="Last Name"
                  margin="normal"
                  name="lastName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  variant="outlined"
                />
              </Grid>

              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
                  variant="outlined"
                />
              </Grid>

              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  error={Boolean(formik.touched.number && formik.errors.number)}
                  fullWidth
                  helperText={formik.touched.number && formik.errors.number}
                  label="Number"
                  margin="normal"
                  name="number"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="tel"
                  value={formik.values.number}
                  variant="outlined"
                />
              </Grid>

              <Grid
                item
                md={6}
                xs={12}
              >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={formik.values.gender}
                    name="gender"
                    label="Gender"
                    onChange={formik.handleChange}
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid
                item
                md={6}
                xs={12}
              >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-helper-label">Role</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={formik.values.role}
                    name="role"
                    label="Role"
                    onChange={formik.handleChange}
                  >
                    {Role.map((option) => (
                      <MenuItem value={option.label}>{option.label}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  error={Boolean(formik.touched.street && formik.errors.street)}
                  fullWidth
                  helperText={formik.touched.street && formik.errors.street}
                  label="Street"
                  margin="normal"
                  name="street"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.street}
                  variant="outlined"
                />
              </Grid> */}

              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  error={Boolean(formik.touched.dob && formik.errors.dob)}
                  fullWidth
                  helperText={formik.touched.dob && formik.errors.dob}
                  // label="Date of Birth"
                  margin="normal"
                  name="dob"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="date"
                  value={formik.values.dob}
                  variant="outlined"
                />
              </Grid>

              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  error={Boolean(formik.touched.country && formik.errors.country)}
                  fullWidth
                  helperText={formik.touched.country && formik.errors.country}
                  label="Country"
                  margin="normal"
                  name="country"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="address"
                  value={formik.values.country}
                  variant="outlined"
                />
              </Grid>

              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  error={Boolean(formik.touched.state && formik.errors.state)}
                  fullWidth
                  helperText={formik.touched.state && formik.errors.state}
                  label="State"
                  margin="normal"
                  name="state"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="address"
                  value={formik.values.state}
                  variant="outlined"
                />
              </Grid>

              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  error={Boolean(formik.touched.city && formik.errors.city)}
                  fullWidth
                  helperText={formik.touched.city && formik.errors.city}
                  label="City"
                  margin="normal"
                  name="city"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="address"
                  value={formik.values.city}
                  variant="outlined"
                />
              </Grid>

              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  error={Boolean(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                  variant="outlined"
                />
              </Grid>

              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  error={Boolean(formik.touched.cnfpassword && formik.errors.cnfpassword)}
                  fullWidth
                  helperText={formik.touched.cnfpassword && formik.errors.cnfpassword}
                  label="Confirm Password"
                  margin="normal"
                  name="cnfpassword"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.cnfpassword}
                  variant="outlined"
                />
              </Grid>

              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField style={{ display: 'none' }}
                  error={Boolean(formik.touched.upload && formik.errors.upload)}
                  fullWidth
                  helperText={formik.touched.upload && formik.errors.upload}
                  // label="Upload Document"
                  margin="normal"
                  id="uploadPhoto"
                  name="upload"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="file"
                  value={formik.values.upload}
                  variant="outlined"
                />
                <Button onClick={() => { document.getElementById("uploadPhoto").click() }}>Upload Photo</Button>
              </Grid>

              <Grid
                item
                md={6}
                xs={12}
              >
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    ml: -1
                  }}
                >
                  <Checkbox
                    checked={formik.values.policy}
                    name="policy"
                    onChange={formik.handleChange}
                  />
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    I have read the
                    {' '}
                    <NextLink
                      href="#"
                      passHref
                    >
                      <Link
                        color="primary"
                        underline="always"
                        variant="subtitle2"
                      >
                        Terms and Conditions
                      </Link>
                    </NextLink>
                  </Typography>
                </Box>
              </Grid>

            </Grid>

            {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>
                {formik.errors.policy}
              </FormHelperText>
            )}
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign Up Now
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Have an account?
              {' '}
              <NextLink
                href="/login"
                passHref
              >
                <Link
                  variant="subtitle2"
                  underline="hover"
                >
                  Login
                </Link>
              </NextLink>
            </Typography>

          </form>
        </Container>
      </Box>
    </>
  );
};

export default Register;
