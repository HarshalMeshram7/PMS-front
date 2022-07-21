import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RegisterBackground from '../../public/static/images/background/register.jpg';
import loginBackground from '../../public/static/images/background/login.jpg';


const Register = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      policy: false
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email(
          'Must be a valid email')
        .max(255)
        .required(
          'Email is required'),
      firstName: Yup
        .string()
        .max(255)
        .required(
          'First name is required'),
      lastName: Yup
        .string()
        .max(255)
        .required(
          'Last name is required'),
      password: Yup
        .string()
        .max(255)
        .required(
          'Password is required'),
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
        <Container maxWidth="sm"
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
            <TextField
              error={Boolean(formik.touched.firstName && formik.errors.firstName)}
              // fullWidth
              helperText={formik.touched.firstName && formik.errors.firstName}
              label="First Name"
              margin="normal"
              name="firstName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.firstName}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.lastName && formik.errors.lastName)}
              // fullWidth
              helperText={formik.touched.lastName && formik.errors.lastName}
              label="Last Name"
              margin="normal"
              name="lastName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.lastName}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              // fullWidth
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
            <TextField
              error={Boolean(formik.touched.number && formik.errors.number)}
              // fullWidth
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
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              // fullWidth
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
            <TextField
              error={Boolean(formik.touched.cnfpassword && formik.errors.cnfpassword)}
              // fullWidth
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
            <TextField
              error={Boolean(formik.touched.dob && formik.errors.dob)}
              // fullWidth
              helperText={formik.touched.dob && formik.errors.dob}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />
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
